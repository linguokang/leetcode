const $ul = document.querySelector('ul')

$ul.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase === 'li') {
        console.log('li')
    }
})
