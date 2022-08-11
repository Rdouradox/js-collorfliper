const colors = ['green', 'red', 'yellow', 'blue']

const btn = document.getElementById('btn')
const color = document.querySelector('.h2-2')

btn.addEventListener('click', function () {
  const random = getrandom()
  document.body.style.backgroundColor = colors[random]
  color.textContent = colors[random]
})

function getrandom() {
  return Math.floor(Math.random() * colors.length)
}
