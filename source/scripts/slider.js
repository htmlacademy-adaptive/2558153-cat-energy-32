(function () {
  const slider = document.querySelector('.live__slider');

  const before = slider.querySelector('.live__slide--before');
  const after = slider.querySelector('.live__slide--after');
  const input = slider.querySelector('.live__range');
  const container = document.querySelector('.live__progress-bar');

  input.addEventListener('input', (e) => {
    after.style.width = `${100 - input.value }%`;
    before.style.width = `${input.value }%`;
    container.style.setProperty('--position', `${e.target.value}%`);
  });


})();
