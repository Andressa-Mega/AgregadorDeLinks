function toggleMode() {
  //Substitui fundo para dark ou light mode
  const html = document.documentElement
  html.classList.toggle('light')

  // PEGAR TAG IMG
  const img = document.querySelector('#profile img') //Procura pelo seletor

  // SUBSTITUIR IMG
  // se tiver light mode, adicionar a imagem light
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatarLight.png');
  } else {
  //se tiver sem light mode, manter imagem dark
    img.setAttribute('src', './assets/avatarDark.png');
  }

  const text = document.querySelector('#profile #description');

  if (html.classList.contains('light')) {
    text.innerText = text.innerText.replace('dark', 'light') 
  } else {
    text.innerText = text.innerText.replace('light', 'dark')
  }
}