
(async () => {
    console.log('hi');
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

