const content = document.querySelector('.header__content')
const nav = document.querySelector('.header__nav');

content.addEventListener('mouseover', function(){
    const maxWidth = Math.random() * (window.innerWidth - content.clientWidth);
    const maxHeight = Math.random() * (window.innerHeight - content.clientHeight - nav.clientHeight);

    content.style.marginLeft = `${maxWidth}px`;
    content.style.marginTop = `${maxHeight}px`

})
