const switch_lang = document.getElementById('switch_lang');

let cuurentLang = localStorage.getItem('lang')
switch_lang.addEventListener('click', (e) => {
    const body = document.getElementsByTagName('body')
    cuurentLang = localStorage.getItem('lang')
    cuurentLang === null ? 'ar' : cuurentLang
    let switchLang = cuurentLang === 'ar' ? 'en' : 'ar'
    body[0].classList.toggle('en')
    localStorage.setItem('lang', switchLang)
    e.target.innerText = switchLang === 'en' ? 'english' : 'العربية'

})