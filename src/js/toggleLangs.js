const switch_lang = document.getElementById('switch_lang');

switch_lang.addEventListener('click', (e) => {
    const body = document.getElementsByTagName('body')
    body[0].classList.toggle('en')
    e.target.innerText = body[0].className == '' ? 'english' : 'العربية'
    console.log('body.classList', body[0].className);

})