<!-- load header -->
<?php get_header(); ?>

<!-- page project portfolio -->
<section class="section_page_article_portfolio">

    <div class="box_page_portfolio">
        <!-- btn back home -->
        <a class="box_link_close" href="/#basFooter">
            <button class="box_close">
                <div></div>
                <div></div>
            </button>
        </a>

        <!-- article portfolio selected -->
        <?php
    if (have_posts()) :
    //pas obligatoir mais au cas où il y a un rajout de post
    while (have_posts()) : the_post(); ?>

        <article class="portfolio">
            <?php the_post_thumbnail('large'); ?>
            <h1 class="title_portfolio">
                <?php the_title(); ?>
            </h1>

            <!-- link site -->
            <div class="box_link">
                <a href="<?php echo get_post_meta($post->ID, 'lien_site', true); ?>"
                    target="_blank">Voir
                    le site
                </a>
            </div>

            <!-- text présentation -->
            <p class="content_portfolio">
                <?php echo get_post_meta($post->ID, 'john_text_presentation', true); ?>
            </p>

            <!-- img site -->
            <div class="box_img_portfolio">
                <?php
                $portfolioImgs = get_post_meta($post->ID, 'portfolio_img', true);
                $imgs = explode(' ', $portfolioImgs);
                foreach ($imgs as $key=>$value): ?>
                <a href="<?php echo get_post_meta($post->ID, 'lien_site', true); ?>"
                    target="_blank">
                    <img class="img_portfolio" src="<?php
                echo $value ; ?>" alt=""></a>
                <?php
                endforeach;
                ?>
            </div>

            <!-- info site -->
            <div class="info_portfolio">
                <div>
                    <!-- role -->
                    <h4>Rôle</h4>
                    <?php
                    $fields = get_post_meta($post->ID, 'john_role', true);
                    $roles = explode(" ", $fields);
                    foreach ($roles as $key => $value) :
                    ?>
                    <div>- <?php echo $value ; ?>
                    </div>
                    <?php
                    endforeach;
                    ?>
                </div>
                <div>
                    <!-- front end -->
                    <h4>Front-end</h4>
                    <?php
                    $fields = get_post_meta($post->ID, 'john_front_end', true);
                    $roles = explode(" ", $fields);
                    foreach ($roles as $key => $value) :
                    ?>
                    <div>- <?php echo $value ; ?>
                    </div>
                    <?php
                    endforeach;
                    ?>
                </div>
                <div>
                    <!-- back end -->
                    <h4>Back-end</h4>
                    <?php
                    $fields = get_post_meta($post->ID, 'john_back_end', true);
                    $roles = explode(" ", $fields);
                    foreach ($roles as $key => $value) :
                    ?>
                    <div>- <?php echo $value ; ?>
                    </div>
                    <?php
                    endforeach;
                    ?>
                </div>

            </div>
        </article>
        <?php
            endwhile;
            endif;
        ?>
    </div>
</section>

<!-- load footer -->
<?php get_footer();
