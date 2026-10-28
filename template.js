
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    var imgs = document.querySelectorAll('.gallery img');
    if (!imgs.length) { return; }
    var box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<img alt="">';
    document.body.appendChild(box);
    var big = box.querySelector('img');
    imgs.forEach(function (img) {
      img.addEventListener('click', function () {
        big.src = img.getAttribute('data-full') || img.src;
        big.alt = img.alt;
        box.classList.add('open');
      });
    });
    box.addEventListener('click', function () { box.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { box.classList.remove('open'); }
    });
  });
})();
