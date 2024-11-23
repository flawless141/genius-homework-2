const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnsOpen.forEach(button => button.addEventListener('click', toggleModal));
modalBtnClose.addEventListener('click', toggleModal);