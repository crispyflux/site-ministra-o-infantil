const btnMobile = document.querySelector('.btn-mobile')
const navMobile = document.getElementById('container-mobile')

btnMobile.addEventListener('click', () => {
    navMobile.classList.toggle('active')
})