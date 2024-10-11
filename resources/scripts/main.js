const aboutMeText = document.getElementById('about-me-text');
const changeFontBtn = document.getElementById('change-font');

const changeFont = () => {
  if (!aboutMeText.style.fontFamily) {
    aboutMeText.style.fontFamily = 'Courier';
  } else {
    aboutMeText.style.fontFamily = '';
  }
}

changeFontBtn.addEventListener('click', changeFont);