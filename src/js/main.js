
(async () => {
    console.log('[on load]');
    const includes = document.getElementsByTagName('include');
    await [].forEach.call(includes, i => {
        let filePath = i.getAttribute('src');
        (async () => {
            await fetch(filePath).then(file => {
                file.text().then(content => {
                    i.insertAdjacentHTML('afterend', content);
                    i.remove();
                });
            });
        })()
    });

})();

console.log('[outer function]');

const get_one = (element) => document.querySelector(element);
const get_arr = (element) => document.querySelectorAll(element);

export { get_one, get_arr }

//  get_arr
// async function checkElement(selector) {
//     const querySelector = null;
//     while (querySelector === null) {
//         await rafAsync();
//         querySelector = document.querySelector(selector);
//     }
//     return querySelector;
// }

// checkElement('body') //use whichever selector you want
//     .then((element) => {
//         console.info(element);
//         //Do whatever you want now the element is there
//     });