const shareBtn = document.querySelector('.share')
const shareBlock = document.querySelector('.shareIt')


shareBtn.addEventListener('click', function () {
    shareBtn.classList.toggle('active');
    shareBlock.classList.toggle('active')
    
})