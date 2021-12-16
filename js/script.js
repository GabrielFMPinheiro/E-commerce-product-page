const $ = (e) => document.querySelector(e);

const cart = document.querySelector('.cart');
const minus = $('.minus');
const quantity = $('.quantity');
const plus = $('.plus');
const mainImgBox = $('.image-box');
const modal = $('.modal-img-container');
const closeModal = $('.modal-close-box');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-container');
const header = document.querySelector('.header-container');
const closeNav = $('.close');
const thumbs = document.querySelectorAll('.thumbs-box');
const mainImg = $('.main-img');
const previous = $('.previous-box');
const arr = [];
const next = $('.next-box');
const thumbsModal = document.querySelectorAll('.modal-thumbs-box');
const nextModal = $('.modal-next-box');
const modalMainImg = $('.modal-main-img');
const previousModal = $('.modal-previous-box');
const addBtn = $('.btn-add');
const itensCart = $('.cart-itens');
const emptyMsg = $('.empty-msg');
const deleteItem = $('.delete-box');
const count = $('.count');

function toogle(elem) {
  if (elem.style.visibility === 'visible') {
    elem.style.visibility = 'hidden';
  } else {
    elem.style.visibility = 'visible';
  }
}

cart.addEventListener('click', () => {
  const cartSection = $('.cart-box');
  if (cartSection.style.display === 'block') {
    cartSection.style.display = 'none';
  } else {
    cartSection.style.display = 'block';
  }
});

minus.addEventListener('click', () => {
  if (quantity.innerText !== '0') {
    const newValue = parseInt(quantity.innerText, 10) - 1;
    quantity.innerText = newValue;
  }
});

plus.addEventListener('click', () => {
  const newValue = parseInt(quantity.innerText, 10) + 1;
  quantity.innerText = newValue;
});

mainImgBox.addEventListener('click', () => {
  toogle(modal);
});

closeModal.addEventListener('click', () => {
  toogle(modal);
});

menu.addEventListener('click', () => {
  header.style.position = 'initial';
  toogle(nav);
});

closeNav.addEventListener('click', () => {
  toogle(nav);
  header.style.position = 'relative';
});

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', ({ target: { childNodes } }) => {
    const active = $('.active');
    const { src } = childNodes[1];

    active.classList.remove('active');
    mainImg.src = src;
    thumb.classList.add('active');
  });
});

thumbs.forEach((thumb) => {
  const nodes = thumb.childNodes;
  arr.push(nodes[1].src);
});

previous.addEventListener('click', () => {
  const srcMainImg = mainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 0) {
    mainImg.src = arr[index - 1];
  } else {
    mainImg.src = arr[3];
  }
});

next.addEventListener('click', () => {
  const srcMainImg = mainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 3) {
    mainImg.src = arr[index + 1];
  } else {
    mainImg.src = arr[0];
  }
});

nextModal.addEventListener('click', () => {
  const modalActive = $('.modal-active');
  modalActive.classList.remove('modal-active');
  const srcMainImg = modalMainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 3) {
    modalMainImg.src = arr[index + 1];
    thumbsModal[index + 1].classList.add('modal-active');
  } else {
    modalMainImg.src = arr[0];
    thumbsModal[0].classList.add('modal-active');
  }
});

previousModal.addEventListener('click', () => {
  const modalActive = $('.modal-active');
  modalActive.classList.remove('modal-active');
  const srcMainImg = modalMainImg.src;
  const index = arr.indexOf(srcMainImg);
  if (index !== 0) {
    modalMainImg.src = arr[index - 1];
    thumbsModal[index - 1].classList.add('modal-active');
  } else {
    modalMainImg.src = arr[3];
    thumbsModal[3].classList.add('modal-active');
  }
});

thumbsModal.forEach((thumb) => {
  thumb.addEventListener('click', ({ target: { childNodes } }) => {
    const modalActive = $('.modal-active');
    const { src } = childNodes[1];
    modalActive.classList.remove('modal-active');
    modalMainImg.src = src;
    thumb.classList.add('modal-active');
  });
});

addBtn.addEventListener('click', () => {
  const count = $('.count');
  const price = $('.value');
  const quantityCart = $('.quantity-cart');

  if (quantity.innerText !== '0') {
    const calculation = parseInt(quantity.innerText, 10) * 125;
    quantityCart.innerText = quantity.innerText;
    count.innerText = quantity.innerText;
    price.innerText = `$${calculation}.00`;
    emptyMsg.style.visibility = 'hidden';
    itensCart.style.visibility = 'visible';
    count.style.visibility = 'visible';
  }
});

deleteItem.addEventListener('click', () => {
  emptyMsg.style.visibility = 'initial';
  itensCart.style.visibility = 'hidden';
  count.style.visibility = 'hidden';
});
