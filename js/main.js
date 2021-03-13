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
    
    const accordion = () =>{
       /* const characteristicsTitle = document.querySelectorAll('.characteristics__title');
        const characteristicsDescription = document.querySelectorAll('.characteristics__description');

        characteristicsTitle.forEach((elem, i) =>{
            elem.addEventListener('click', () =>{
                elem.classList.toggle('active');
                characteristicsDescription[i].classList.toggle('active');
            });
        }); */

        const characteristicsList = document.querySelector('.characteristics__list');
        const characteristicsItem = document.querySelectorAll('.characteristics__item');

        const open = (button, dropDown) =>{
            closeAll();
            dropDown.style.height = `${dropDown.scrollHeight}px`
            button.classList.add('active');
            dropDown.classList.add('active');
        };

        const close = (button, dropDown) =>{
            button.classList.remove('active');
            dropDown.classList.remove('active');
            dropDown.style.height = '';
        };

        const closeAll = (button, dropDown) =>{
            characteristicsItem.forEach((elem) =>{
                if(elem.children[0] !== button && elem.children[1] !== dropDown){
                    close(elem.children[0], elem.children[1]);
                }
            })
        }

        characteristicsList.addEventListener('click', (event) =>{
            const target = event.target;
            if(target.classList.contains('characteristics__title')){
                const parent = target.closest('.characteristics__item');
                const describ = parent.querySelector('.characteristics__description');
                describ.classList.contains('active') ? close(target, describ) : open(target,describ);
            }
        });

    }

    const modal = () =>{
        const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
        const modalBlock = document.querySelector('.modal');
        const bodyBlock = document.querySelector('body');
        
        cardDetailsButtonBuy.addEventListener('click', () =>{
            modalBlock.classList.add('open');
        })

        modalBlock.addEventListener('click', (event) =>{
            const target = event.target;
            if(target.classList.contains('modal')){
                modalBlock.classList.remove('open');
            }
            else if(target.classList.contains('modal__close')){
                modalBlock.classList.remove('open');
            }
        })

        bodyBlock.addEventListener('keydown', (event) =>{
            const target = event.key;
            if(target === "Escape"){
                modalBlock.classList.remove('open');
            }
        })
    }

    tabs();
    accordion();
    modal();
});