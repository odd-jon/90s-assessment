const animation = document.getElementById('animationToggle');
let bodyTag    = document.getElementById('bodyTag');

animation.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
bodyTag.classList.add('body-animation');
bodyTag.classList.add('body-flicker');
  } else {
      bodyTag.classList.remove('body-animation');
  }
})