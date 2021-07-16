let formInput = document.querySelector('.form__input');
let formBtn = document.querySelector('.form__btn');
let list = document.querySelector('.todo__list');


formBtn.addEventListener('click', () => {
    let li = list.innerHTML;
    li += `<li class="todo__list-item">${formInput.value}<div class="cancel"></div></li>`;
    list.innerHTML = li;
});



list.addEventListener('click', (event) => {
    if (event.target.tagName === 'DIV'){
        event.target.closest('.todo__list-item').remove();
    } else if (event.target.tagName === "LI") {
        event.target.classList.toggle('active');
    }
});