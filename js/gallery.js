// ===========================================================
// Galeria — Pokoje u Tymka
//
// Zdjęcia wczytywane są z folderu images/gallery/ i mają być
// nazwane kolejno: 1.jpg, 2.jpg, 3.jpg ... aż do TOTAL_PHOTOS.
// Jeśli dany plik nie istnieje, jest po prostu pomijany —
// możesz więc wpisać docelową liczbę zdjęć (np. 160) i dorzucać
// pliki stopniowo, strona nie "wysypie się" na brakujących.
// ===========================================================

var TOTAL_PHOTOS = 160; // <- zmień na docelową liczbę zdjęć w folderze images/gallery/

document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('galleryGrid');
  var countLabel = document.getElementById('galleryCount');
  if (!grid) return;

  var found = [];
  var checked = 0;

  for (var i = 1; i <= TOTAL_PHOTOS; i++) {
    (function (n) {
      var probe = new Image();
      probe.onload = function () {
        addToGrid(n);
        finishCheck();
      };
      probe.onerror = function () {
        finishCheck();
      };
      probe.src = 'images/gallery/' + n + '.jpg';
    })(i);
  }

  function finishCheck() {
    checked++;
    if (checked === TOTAL_PHOTOS) {
      if (found.length === 0) {
        countLabel.textContent = 'Zdjęcia pojawią się tutaj po dodaniu plików do folderu images/gallery/ (zobacz images/gallery/README.txt).';
      } else {
        countLabel.textContent = 'Zdjęć w galerii: ' + found.length;
      }
    }
  }

  function addToGrid(n) {
    found.push(n);
    var img = document.createElement('img');
    img.src = 'images/gallery/' + n + '.jpg';
    img.alt = 'Pokoje u Tymka — zdjęcie ' + n;
    img.loading = 'lazy';
    img.dataset.index = found.length - 1;
    img.addEventListener('click', function () {
      openLightbox(found.indexOf(n));
    });
    grid.appendChild(img);
    // keep grid in ascending order even though loads finish out of order
    var imgs = Array.prototype.slice.call(grid.children);
    imgs.sort(function (a, b) {
      return parseInt(a.src.split('/').pop()) - parseInt(b.src.split('/').pop());
    });
    imgs.forEach(function (el) { grid.appendChild(el); });
  }

  // ---------- lightbox ----------
  var lightbox = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var current = 0;

  function openLightbox(idx) {
    current = idx;
    showCurrent();
    lightbox.classList.add('open');
  }
  function showCurrent() {
    var n = found[current];
    lbImg.src = 'images/gallery/' + n + '.jpg';
    lbImg.alt = 'Pokoje u Tymka — zdjęcie ' + n;
  }
  document.getElementById('lbClose').addEventListener('click', function () {
    lightbox.classList.remove('open');
  });
  document.getElementById('lbPrev').addEventListener('click', function () {
    current = (current - 1 + found.length) % found.length;
    showCurrent();
  });
  document.getElementById('lbNext').addEventListener('click', function () {
    current = (current + 1) % found.length;
    showCurrent();
  });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') lightbox.classList.remove('open');
    if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });
});
