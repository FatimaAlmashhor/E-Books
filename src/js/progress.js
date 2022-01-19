const get_all = (element) => document.querySelectorAll(element)
const get_one = (element) => document.querySelector(element)

const steps = get_all('.step')
const next = get_one('#next')
const back = get_one('#back')

let progress = 0;
const progressNumbers = steps.length;


next.addEventListener('click', (e => {
    if (progress > progressNumbers - 1) {
        console.log('stop');
    }
    else {
        progress++;
        steps[progress].classList.add('active')
        get_one(`[data-progress-content='${progress}']`).classList.remove('hidden')
        if (progress > 0) {
            get_one(`[data-progress-content='${progress - 1}']`).classList.add('hidden')
        }
    }
}))
back.addEventListener('click', (e => {
    if (progress == 0) {
        console.log('stop prev');
    }
    else {
        steps[progress].classList.remove('active')
        progress--;
        get_one(`[data-progress-content='${progress}']`).classList.remove('hidden')
        if (progress < progressNumbers) {
            console.log('[progress]', progress);
            get_one(`[data-progress-content='${progress + 1}']`).classList.add('hidden')
        }
    }
}))
