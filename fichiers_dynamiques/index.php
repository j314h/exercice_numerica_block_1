<?php

//query profil
$profil = new WP_Query(array(
    'post_type' => 'profil',
));

//query competences
$competence = new WP_Query(array(
    'post_type' => 'competence',
    'custom-fields' => 'competence'
));

//query portfolio
$portfolio = new WP_Query(array(
    'post_type' => 'portfolio',
));

?>

<!-- load header -->
<?php get_header(); ?>

<!-- a propos -->
<section id="aPropos" class="section_a_propos">
    <div class="section_a_propos_box">
        <div class="section_a_propos_box_title">
            <h1 id="title">
                <?php $profil->the_post(); the_title();?>
            </h1>
            <p id="sousTitle"></p>
        </div>
        <img class="img_profil"
            src="<?php echo get_post_meta($post->ID, 'img_profil_adresse', true); ?>"
            alt="photo_john_haimez">
        <article class="article_a_propos">
            <p class="text_a_propos">
                <?php
                    the_content();
                ?>
            </p>
            <p class="text_a_propos text_a_propos_hide">
                <?php
                    echo get_post_meta($post->ID, 'texte_cacher_profil', true);
                ?>
            </p>
            <div class="section_a_propos_box_btn_voir_cv">
                <button class="btn_see_cv">Voir mon CV</button>
            </div>
        </article>
    </div>
    <?php
        wp_reset_postdata();
    ?>
</section>

<!-- competence -->
<section id="competence" class="section_competence">
    <div class="section_competence_box">
        <div class="competence_box_title">
            <h2 id="title_competence">Compétences</h2>
        </div>
        <!-- loop competence -->
        <?php
            if ($competence->have_posts()):
            while ($competence->have_posts()):
            $competence->the_post(); ?>
        <div class="competence_box_content">
            <div class="competence_box_content_title_img">
                <div class="box_title_competence">
                    <h3 id="<?php the_title(); ?>">
                        <?php the_title(); ?>
                    </h3>
                </div>
                <div class="box_img_competence">
                    <?php
                        //loop for img competence
                        $fields = get_post_meta($post->ID, '', true);
                        foreach ($fields as $key=>$value):
                        if (strstr($key, 'j')): ?>
                    <img class="img_competence"
                        src="<?php echo get_post_meta($post->ID, $key, true) ?>"
                        alt="">
                    <?php
                        endif;
                        endforeach;
                    ?>
                </div>
            </div>
            <article class="competence_box_content_article">
                <p>
                    <?php the_content(); ?>
                </p>
            </article>
        </div>
        <?php
            endwhile;
            endif;
            wp_reset_postdata();
        ?>
    </div>
</section>

<!-- portfolio -->
<section id="portfolio" class="section_portfolio">
    <div class="section_portfolio_box">
        <div class="portfolio_box_title">
            <h2 id="title_portfolio">Portfolio</h2>
        </div>
        <!-- loop portfolio -->
        <?php
            if ($portfolio->have_posts()):
            while ($portfolio->have_posts()):
                $portfolio->the_post(); ?>
        <article
            id="<?php echo get_post_meta($post->ID, 'title', true); ?>"
            class="box_article_portfolio">
            <div
                class="box_text_article_portfolio <?php echo get_post_meta($post->ID, 'title', true); ?>">
                <h3 id="title_article_portfolio"><?php the_title(); ?>
                </h3>
                <p>
                    <?php the_content(); ?>
                </p>
                <a href="<?php the_permalink() ?>"><button
                        class="btn_detail_portfolio">Details</button></a>
            </div>
            <div class="box_img_article_portfolio">
                <a href="<?php the_permalink() ?>">
                    <img src="<?php echo get_post_meta($post->ID, 'john_img_portfolio', true); ?>"
                        alt="">
                </a>
            </div>
        </article>
        <?php
            endwhile;
            endif;
            wp_reset_postdata();
        ?>
    </div>
</section>

<!-- contact -->
<section id="contact" class="section_contact">
    <div class="contact_box">

        <div class="contact_box_content">
            <div class="title_contact_box">
                <h2 id="title_contact">Contact</h2>
            </div>
            <form class="form_contact">
                <?php echo do_shortcode('[contact-form-7 id="90" title="Formulaire de contact 1"]'); ?>
            </form>
            <div class="contact_box_lien_utils">
                <p>Voir mon travail en détail</p>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/john-haimez-a11230137/" target="_blank">
                            <img src="/wp-content/uploads/2020/10/iconmonstr-linkedin-3.svg">
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/j314h" target="_blank">
                            <img src="/wp-content/uploads/2020/10/iconmonstr-github-3.svg">
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/j314h" target="_blank">
                            <img src="/wp-content/uploads/2020/10/icons8-codepen.svg">
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</section>

<!-- load footer -->
<?php
get_footer();
