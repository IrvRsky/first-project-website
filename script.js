const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const headerUl = document.querySelector('header ul');

toggleBtn.addEventListener('click',function(){
    headerUl.classList.toggle('slide')

const isOpen = headerUl.classList.contains('slide')

toggleBtnIcon.classList = isOpen
? ('fas fa-xmark')
: ('fas fa-bars')
})