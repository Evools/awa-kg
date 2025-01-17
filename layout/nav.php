<?php

    $navigate = [
        '#' => 'Главная',
        '#about' => 'О нас',
        '#howtojob' => 'Как найти работу',
        '#career' => 'Карьера в AWA',
        '#footer' => 'Контакты',
    ];

?>

<section class="bg-header">
    <header class="header container">
        <a href="#" class="logo">
            <img src="../assets/images/logo.svg" alt="" />
        </a>
        <div class="navbar">
            <nav class="nav">
                <?php foreach ( $navigate as $nav_link => $nav_name ): ?>
                    <a href="<?= $nav_link ?>"
                        class="nav__link">
                        <?= $nav_name ?>
                    </a>
                <?php endforeach; ?>
            </nav>
            <div class="language">
                <a href="#" class="language__link">
                    RU
                </a>
                /
                <a href="#" class="language__link">
                    KG
                </a>
            </div>
        </div>
        <button class="hamburger hamburger--spring" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
        </button>
    </header>
</section>