const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open');
    };

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Loading</p>'
    };

    const renderRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="../goods.html?id=${card.id}" class="products-card">
                            <div class="products-card__image">
                                <img src="../img/rests/${card.img}" alt="${card.img}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h4 class="products-card__description--title">${card.title}</h4>
                                    <div class="products-card__description--badge">${card.time}</div>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-info">
                                        <div class="products-card__description-info--raiting">
                                            <img src="./img/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card__description-info--price">
                                            From $${card.price}
                                        </div>
                                        <div class="products-card__description-info--group">
                                            ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
            `)
        });
    };

    fetch('../db/db.json')
        .then(response => response.json())
        .then(data => {

            if (container) {
                loading();

                setTimeout(() => {
                    renderRests(data.rests);
                }, 1000);
            }
        });
};

const goodsFunc = () => {
    const container = document.querySelector('#goods-container');

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Loading</p>'
    };

    const renderGoods = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="#" class="products-card">
                            <div class="products-card__image">
                                <img src="./img/goods/${card.img}" alt="${card.img}">
                            </div>
                            <div class="products-card__description">
                                <div class="products-card__description-row">
                                    <h5 class="products-card__description--name">
                                        ${card.title}
                                    </h5>
                                </div>
                                <div class="products-card__description-row">
                                    <p class="products-card__description--text">
                                        ${card.description}
                                    </p>
                                </div>
                                <div class="products-card__description-row">
                                    <div class="products-card__description-controls">
                                        <button class="btn btn-primary">
                                            Add to cart
                                            <img src="./img/icons/shopping-cart-white.svg" alt="shopping-cart">
                                        </button>

                                        <span class="products-card__description-controls--price">
                                            $${card.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </a>
            `)
        });
    };

    fetch('../db/db.json')
        .then(response => response.json())
        .then(data => {

            if (container) {
                loading();

                setTimeout(() => {
                    renderGoods(data.goods);
                }, 1000);
            }
        });
};

// const goodsHeaderFunc = () => {
//     const container = document.querySelector('#goods-header');

//     const renderHeaderGoods = () => {
//         container.innerHTML = '';

//         array.forEach((card) => {
//             container.insertAdjacentHTML('beforeend', `
//                 <h3 class="products-header__title">${card.title}</h3>
//                 <div class="products-card__description-info">
//                     <div class="products-card__description-info--raiting">
//                         <img src="./img/icons/star.svg" alt="star">
//                         ${card.rating}
//                     </div>
//                     <div class="products-card__description-info--price">
//                         From $${card.price}
//                     </div>
//                     <div class="products-card__description-info--group">
//                         ${card.type}
//                     </div>
//                 </div>
//             `);
//         });
//     };

//     fetch('../db/db.json')
//         .then(response => response.json())
//         .then(data => {
//             renderHeaderGoods(data.rests);
//         });
// }

modalFunc();
restsFunc();
goodsFunc();