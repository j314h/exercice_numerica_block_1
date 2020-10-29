<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
        href="<?php bloginfo('stylesheet_url'); ?>"
        type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
    <title>
        <?php bloginfo('name'); ?>
    </title>
    <?php wp_head(); ?>
</head>




<body>

    <!-- header and menu -->
    <div class="menu_mobile">
        <div class="barre1"></div>
        <div class="barre2"></div>
    </div>
    <header>
        <?php
        if (is_front_page()) {
            (has_nav_menu('menu')) ?
            wp_nav_menu(array('theme_location' => 'menu')) :
            null;
        } else {
            null;
        }
        
        ?>
    </header>

    <main>