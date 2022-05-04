const readMore = document.querySelector('.read-more-btn')
const text = document.querySelector('.text')

readMore.addEventListener('click', () => {
    text.classList.toggle('showMore') // check in dev tools elements when btn is clicked class showMore in class text is added and removed
    if (readMore.innerText === 'Read More') {
        readMore.innerText = 'Read Less'
    }
    else {
        readMore.innerText = 'Read More'
    }
})