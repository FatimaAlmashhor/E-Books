const getAll = (element) => document.querySelectorAll(element)
const getone = (element) => document.querySelector(element)

const steps = getAll('.step')
const next = getone('#next')
const back = getone('#back')

let progress = 0;
const progressNumbers = steps.length;


next.addEventListener('click', (e => {
    if (progress >= progressNumbers - 1) {
        console.log('stop');
    }
    else {
        progress++;
        steps[progress].classList.add('active')
        getone(`[data-progress-content='${progress}']`).classList.remove('hidden')
        if (progress > 0) {
            getone(`[data-progress-content='${progress - 1}']`).classList.add('hidden')
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
        getone(`[data-progress-content='${progress}']`).classList.remove('hidden')
        if (progress < progressNumbers) {
            console.log('[progress]', progress);
            getone(`[data-progress-content='${progress + 1}']`).classList.add('hidden')
        }
    }
}))
