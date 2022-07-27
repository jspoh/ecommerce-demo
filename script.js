const totalCards = 12;

/*opening checks and updates*/
let likedItems = [];
let cartItems = [];
let tempItemName = '';

if (localStorage.likedItems !== undefined) {
    let tempLikedItems = localStorage.likedItems.split(',');
    for (let i=0; i<tempLikedItems.length; i++) {
        if (i%2 === 0) {
            tempItemName = tempLikedItems[i];
        }
        else {
            likedItems.push([tempItemName, tempLikedItems[i]]);
        }
    }
}
tempItemName = '';
if (localStorage.cartItems !== undefined) {
    let tempcartItems = localStorage.cartItems.split(',');
    for (let i=0; i<tempcartItems.length; i++) {
        if (i%2 === 0) {
            tempItemName = tempcartItems[i];
        }
        else {
            cartItems.push([tempItemName, tempcartItems[i]]);
        }
    }
}

for (let i=0; i<likedItems.length; i++) {
        for (let j=0; j<totalCards; j++) {
            try {
                if (likedItems[i][0] === document.querySelector(`#product${j}title`).innerText) {
                    document.querySelector(`#product${j}like`).classList.add('noDisplay');
                    document.querySelector(`#product${j}liked`).classList.remove('noDisplay');
                }
            }
            catch (error) {
                console.log(error);
            }
        }
}
for (let i=0; i<cartItems.length; i++) {
    for (let j=0; j<totalCards; j++) {
        try {
            if (cartItems[i][0] === document.querySelector(`#product${j}title`).innerText) {
                document.querySelector(`#product${j}cart`).classList.add('noDisplay');
                document.querySelector(`#product${j}carted`).classList.remove('noDisplay');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}


/* drop down content */
const categoryBtn = document.querySelector('#category');
const dropdownContent = document.querySelector('.dropdownContent');
let isHovering = false;

document.addEventListener('mouseover', (e)=>{
    if (e.target.id === 'category') {
        isHovering = true;
        dropdownContent.classList.add('ddActive');
    }
    else if (e.target.classList[0] === 'ddContent' && isHovering || e.target.classList[0] === 'dd' && isHovering) {
        dropdownContent.classList.add('ddActive');
    }
    else {dropdownContent.classList.remove('ddActive'); isHovering = false;}
})



/* product cards */
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('mouseenter', (e)=>{
        document.querySelector(`#${e.target.id}`).classList.add('showInfo');
        document.querySelector(`#${e.target.id}info`).classList.remove('hide');
    })
    card.addEventListener('mouseleave', (e)=>{
        document.querySelector(`#${e.target.id}`).classList.remove('showInfo');
        document.querySelector(`#${e.target.id}info`).classList.add('hide');
    })
}



/* liking/adding to cart */

for (let i=0; i<totalCards; i++) {
    /*add*/
    document.querySelector(`#product${i}like`).addEventListener('click', (e)=>{
        let likedItemName = document.querySelector(`#product${i}title`).innerText;
        let likedItemPrice = document.querySelector(`#product${i}price`).innerText.slice(1);
        likedItems.push([likedItemName, likedItemPrice]);
        localStorage.likedItems = likedItems;

        document.querySelector(`#product${i}like`).classList.add('noDisplay');
        document.querySelector(`#product${i}liked`).classList.remove('noDisplay');
    })
    document.querySelector(`#product${i}cart`).addEventListener('click', (e)=>{
        let cartItemName = document.querySelector(`#product${i}title`).innerText;
        let cartItemPrice = document.querySelector(`#product${i}price`).innerText.slice(1);
        cartItems.push([cartItemName, cartItemPrice]);
        localStorage.cartItems = cartItems;

        document.querySelector(`#product${i}cart`).classList.add('noDisplay');
        document.querySelector(`#product${i}carted`).classList.remove('noDisplay');
    })
    /*remove*/
    document.querySelector(`#product${i}liked`).addEventListener('click', (e)=>{
        let unlikedItemName = document.querySelector(`#product${i}title`).innerText;
        for (let j=0; j<totalCards; j++) {
            if (likedItems[j][0] === unlikedItemName) {
                likedItems.splice(j, 1);
                break;
            }
        }
        localStorage.likedItems = likedItems;

        document.querySelector(`#product${i}liked`).classList.add('noDisplay');
        document.querySelector(`#product${i}like`).classList.remove('noDisplay');
    })
    document.querySelector(`#product${i}carted`).addEventListener('click', (e)=>{
        let uncartItemName = document.querySelector(`#product${i}title`).innerText;
        for (let j=0; j<totalCards; j++) {
            if (cartItems[j][0] === uncartItemName) {
                cartItems.splice(j, 1);
                break;
            }
        }
        localStorage.cartItems = cartItems;

        document.querySelector(`#product${i}carted`).classList.add('noDisplay');
        document.querySelector(`#product${i}cart`).classList.remove('noDisplay');
    })
}