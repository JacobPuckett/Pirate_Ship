let ship = document.querySelector('img')

ship.addEventListener('click', (evt) => {
    alert('ZOOOOM')
    rollbar.error('black pearl does zoom')
})

let deleteBtn = document.querySelector('button')


deleteBtn.addEventListener('click', (evt) => {
    const arr = ''
    ship = arr
    rollbar.warning('bad')
})