import { get_one, get_all } from './main'
const collaps = get_all('.collaps_item_header');

collaps.forEach(collap => {
    collap.addEventListener('click', (e) => {
        let collap_body = get_one('.collaps_item_header + div')
        console.log('[collap sibliing]', collap_body);
        collap_body.classList.toggle('active')
    })
})