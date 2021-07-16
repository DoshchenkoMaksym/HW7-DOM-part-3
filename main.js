let formInput = document.querySelector('.form__input');
let formBtn = document.querySelector('.form__btn');
let list = document.querySelector('.list');
/* formBtn.addEventListener('click', () => {
    let li = document.createElement('li')
    li.classList = 'list__item';
    li.innerText = `${formInput.value}`;
    list.append(li);
}); */
formBtn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.classList.add('list__item');
    li.innerText = `${formInput.value}`;
    list.append(li);
});

