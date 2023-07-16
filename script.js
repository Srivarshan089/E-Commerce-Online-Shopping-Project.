let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Stumps',
        image: 'stump.jpeg',
        price: 660
    },
    {
        id: 2,
        name: 'Truf',
        image: 'trufs.jpeg',
        price: 1000
    },
    {
        id: 3,
        name: 'Bails',
        image: 'bails.jpeg',
        price: 480
    },
    {
        id: 4,
        name: 'Kukkabura Bat',
        image: 'Kokkupura.jpeg',
        price: 2000
    },
    {
        id: 5,
        name: 'MRF Bat',
        image: 'mrf.jpeg',
        price: 4000
    },
    {
        id: 6,
        name: 'KingsSpot Bat',
        image: 'kingsspot.jpeg',
        price: 2800
    },
    {
        id: 7,
        name: 'Stumper Ball',
        image: 'stumper.jpeg',
        price: 120
    },    {
        id: 8,
        name: 'Batting Pad',
        image: 'Bat pad.jpeg',
        price: 700
    },    {
        id: 9,
        name: 'Thigh Pad',
        image: 'thigh.jpeg',
        price: 600
    },    {
        id: 10,
        name: 'Gloves',
        image: 'gloves.jpeg',
        price: 900
    },
    {
        id: 11,
        name: 'Elbow Guard',
        image: 'elbow.jpeg',
        price: 750
    },
    {
        id: 12,
        name: 'Helmet',
        image: 'helmet.jpeg',
        price: 12000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}