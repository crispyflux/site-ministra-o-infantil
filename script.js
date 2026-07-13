const btnMobile = document.querySelector('.btn-mobile')
const navMobile = document.getElementById('container-mobile')
const btncontatar = document.getElementById('btn-contatar')

btnMobile.addEventListener('click', () => {
    navMobile.classList.toggle('active')
})

btncontatar.addEventListener('click', () => {
    window.open("https://wa.me/5511942049146")
})
