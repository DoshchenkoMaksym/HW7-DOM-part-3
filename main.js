let formInput = document.querySelector('.form__input');
let formBtn = document.querySelector('.form__btn');
let list = document.querySelector('.list');
let ourLi = [];
/* formBtn.addEventListener('click', () => {
    let li = document.createElement('li')
    li.classList = 'list__item';
    li.innerText = `${formInput.value}`;
    list.append(li);
}); */
formBtn.addEventListener('click', () => {
    let newElem = document.createElement('li');
    newElem.classList.add('list__item');
    newElem.innerText = `${formInput.value}`;
    list.append(newElem);
    newElem.addEventListener('click', () => {
        newElem.classList.toggle('active');
    });
});

