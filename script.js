function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatarLight.png');
  } else {
    img.setAttribute('src', './assets/avatarDark.png');
  }

  const text = document.querySelector('#profile #description');
  if (html.classList.contains('light')) {
    text.innerText = text.innerText.replace('dark', 'light') 
  } else {
    text.innerText = text.innerText.replace('light', 'dark')
  }
}