let formInput = document.querySelector('.form__input');
let formBtn = document.querySelector('.form__btn');
let list = document.querySelector('.todo__list');
let ourLi = [];
/* formBtn.addEventListener('click', () => {
    let li = document.createElement('li')
    li.classList = 'list__item';
    li.innerText = `${formInput.value}`;
    list.append(li);
}); */
formBtn.addEventListener('click', () => {
    let newElem = document.createElement('li');
    newElem.classList.add('todo__list-item');
    newElem.innerText = `${formInput.value}`;
    list.append(newElem);
    newElem.addEventListener('click', () => {
        newElem.classList.toggle('active');
    });
    let newElem2 = document.createElement('div');
    newElem2.classList.add('cancel');
    newElem.append(newElem2);
    newElem2.addEventListener('click', (event) => {
        if (event.target.tagName === 'DIV'){
            newElem.remove();
        }
    });
});

