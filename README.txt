<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Galeria — Pokoje u Tymka</title>
<meta name="description" content="Galeria zdjęć pensjonatu Pokoje u Tymka w Wiśle.">
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<header class="site-header">
  <nav class="nav">
    <a class="brand" href="index.html">
      <strong>Pokoje u Tymka</strong>
      <span>Wisła · ul. Gimnazjalna 1</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="navLinks">Menu</button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html#o-nas">O nas</a></li>
      <li><a href="index.html#pokoje">Pokoje</a></li>
      <li><a href="index.html#udogodnienia">Udogodnienia</a></li>
      <li><a href="index.html#atrakcje">Atrakcje</a></li>
      <li><a href="gallery.html">Galeria</a></li>
      <li><a href="index.html#opinie">Opinie</a></li>
      <li><a href="index.html#kontakt">Kontakt</a></li>
    </ul>
  </nav>
</header>

<section>
  <div class="wrap">
    <div class="section-head">
      <span class="kicker">Galeria</span>
      <h2>Zdjęcia pensjonatu</h2>
      <p id="galleryCount">Ładowanie zdjęć…</p>
    </div>
    <div class="gallery-grid" id="galleryGrid"></div>
  </div>
</section>

<div class="lightbox" id="lightbox">
  <button class="lightbox-close" id="lbClose" aria-label="Zamknij">✕</button>
  <button class="lightbox-prev" id="lbPrev" aria-label="Poprzednie">‹</button>
  <img id="lbImg" src="" alt="">
  <button class="lightbox-next" id="lbNext" aria-label="Następne">›</button>
</div>

<footer class="site-footer">
  <div class="wrap footer-inner">
    <div>Pokoje u Tymka · ul. Gimnazjalna 1, 43-460 Wisła</div>
    <div><a href="tel:698143163">698 143 163</a> · <a href="https://www.facebook.com/profile.php?id=61565690167032&locale=pl_PL" target="_blank" rel="noopener">Facebook / Messenger</a></div>
  </div>
</footer>

<script src="js/main.js"></script>
<script src="js/gallery.js"></script>
</body>
</html>
