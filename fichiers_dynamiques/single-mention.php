<?php get_header(); ?>

<section class="section_page_article_portfolio mention">
    <div class="box_page_portfolio">
        <!-- btn back home -->
        <a class="box_link_close_mention" href="/#basFooter">
            <button class="box_close">
                <div></div>
                <div></div>
            </button>
        </a>

        <?php
    // see mentions legale
    if (have_posts()) :
    while (have_posts()) : the_post(); ?>
        <h3 class="title_mention">
            <?php the_title() ?>
        </h3>
        <div class="content_mention">
            <?php the_content(); ?>
        </div>
        <?php
            endwhile;
            endif;
        ?>
    </div>
</section>




<?php get_footer();
