<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="<?php bloginfo('template_url'); ?>/favicon.png" />
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div id="flexHeader" class="container flex-header padding0">

        <div class="logo"><a href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/img/logo.png" alt="" width="470"><span class="tagline">Service is in Our Name!</span></a></div>

        <div class="header-block">
          <div class="phone">
              <p class="salesnum">CALL TODAY
              <a href="tel:17054240082">705.424.0082</a></p>
          </div>
            <div class="address">
              <p>8903 Simcoe Rd. 56</br>
              PO Box 2022</br>
              Angus, ON  L0M 1B0</p>
            </div>
        </div>
    </div>

    <div class="header-nav">
        <div class="container padding0">
          <div class="stickylogo"><a href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/img/sticky-logo.png" alt="" width="370"></a></div>
            <div class="mobile-icons">
                <a href="tel:17054240082" class="nav-phone">
                    <i class="fa fa-phone"></i>
                    <span>CALL</span>
                </a>

                <a href="<?php echo home_url(); ?>/contact-us/" class="nav-contact">
                    <i class="fa fa-envelope"></i>
                    <span>CONTACT</span>
                </a>

                <a href="javascript:void(0);" id="navToggle" class="nav-toggle">
                    <i class="fa fa-bars"></i>
                    <span>MENU</span>
                </a>
            </div>
            <nav id="mainNav" class="mobile-nav" role="navigation">
               <?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'container' => '' ) ); ?>
            </nav>
        </div>
    </div>
</header>
<a id="floatingAppointment" class="button buttonVertical" href="contact-us/">
    REQUEST A QUOTE
</a>
<main>
