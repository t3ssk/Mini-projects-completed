const faqs = document.querySelectorAll('.q')


faqs.forEach(item=> {
    return item.addEventListener('click', (e)=>{
        const div = e.path[2]
        div.querySelector('.a').classList.toggle('active')
        div.querySelector('.q').classList.toggle('active')
    })
})
