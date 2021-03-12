document.addEventListener('DOMContentLoaded', () =>{
    'use strict';

    const tabs = () => {
        const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
        const cardDetailTitleElem = document.querySelector('.card-details__title');
        const cardImageItem =  document.querySelector('.card__image_item');
        const cardDetailPrice = document.querySelector('.card-details__price');
        const cardDescriptionMemory = document.querySelector('.description__memory');

        const data = [
            {
                name: 'мартфон Apple iPhone 12 Pro 128GB Graphite',
                img: 'img/iPhone-graphite.png',
                price: 95990,
                memory: '128GB',
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Silver',
                img: 'img/iPhone-silver.png',
                price: 97000,
                memory: '256GB',
            },
            {
                name: 'Смартфон Apple iPhone 12 Pro 256GB Pacific Blue',
                img: 'img/iPhone-blue.png',
                price:  99900,
                memory: '256GB',
            }
        ];

        const deactivate = () =>{
            cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
        }

        cardDetailChangeElems.forEach((btn, i) => {
            btn.addEventListener('click', () =>{
                if(!btn.classList.contains('active')){
                    deactivate();
                    btn.classList.add('active');
                    cardDetailTitleElem.textContent = data[i].name;
                    cardImageItem.src = data[i].img;
                    cardImageItem.alt = data[i].name;
                    cardDetailPrice.textContent = data[i].price + '$';
                    cardDescriptionMemory.textContent = 'Встроенная память (ROM): ' + data[i].memory;
                }
            });
            })
        };

      /*  const cardImageElem = document.querySelectorAll('.card__image');

        const hideAll = () =>{
            for (let i = 0; i < cardDetailChangeElem.length; i++){
                cardDetailChangeElem[i].classList.remove('active');
                cardDetailTitleElem[i].classList.remove('active');
                cardImageElem[i].classList.remove('active');
            }
        };

        for (let i = 0; i < cardDetailChangeElem.length; i++){

            cardDetailChangeElem[i].addEventListener('click', () =>{
                hideAll();
                cardDetailChangeElem[i].classList.add('active');
                cardDetailTitleElem[i].classList.add('active');
                cardImageElem[i].classList.add('active');
            })
        }
    }; */
    
    tabs();
});