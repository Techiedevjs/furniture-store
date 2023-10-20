let allItems = [
    {
        id: "weuw34",
        currentPrice : 31568,
        discountedPrice: 15970,
        imageUrl: "images/light2.png",
        name: "Rattan Ceiling Light Shade",
        category: "livingroom",
        type: "furniture",
        subCategory: "lighting",
        specialOffer: true
    },
    {
        id: "erer89",
        currentPrice :23456,
        discountedPrice: 10000,
        imageUrl: "images/bed.png",
        name: "Madara Retro Oak and Rattan Bed",
        category: "bedroom",
        type: "furniture",
        subCategory: "bed"
    },
    {
        id: "hu34j",
        currentPrice : 34090,
        discountedPrice: 23450,
        imageUrl: "images/table1.png",
        name: "Set of 2 Louve Nesting Tables",
        category: "diningroom",
        type: "furniture",
        subCategory: "table",
        specialOffer: true
    },
    {
        id: "poi7e",
        currentPrice : 1300,
        discountedPrice: 700,
        imageUrl: "images/painting1.png",
        name: "Balsac Paris Painting",
        category: "livingroom",
        type: "decoration",
        subCategory: "paintings"
    },
    {
        id: "ert45",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/shelf2.png",
        name: "mona lisa",
        category: "bedroom",
        type: "furniture",
        subCategory: "shelf"
    },
    {
        id: "456hj",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/painting2.png",
        name: "mona lisa",
        category: "livingroom",
        type: "decoration",
        subCategory: "paintings",
        specialOffer: true
    },
    {
        id: "uoi73",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/chair2.png",
        name: "mona lisa",
        category: "diningroom",
        type: "furniture",
        subCategory: "chairs"
    },
    {
        id: "uio83",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/light4.png",
        name: "mona lisa",
        category: "livingroom",
        type: "decoration",
        subCategory: "lighting",
        specialOffer: true
    },
    {
        id: "we34r",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/shelf2.png",
        name: "mona lisa",
        category: "bedroom",
        type: "furniture",
        subCategory: "shelf"
    },
    {
        id: "we34r",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/shelf2.png",
        name: "sitter",
        category: "bedroom",
        type: "furniture",
        subCategory: "shelf"
    },
    {
        id: "ui89y",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/cabinet2.png",
        name: "mona lisa",
        category: "diningroom",
        type: "decoration",
        subCategory: "table",
        specialOffer: true
    },
]
const profile = {
    firstName: "Kurt",
    lastName: "achmed",
    lixBalance: 15500,
}
document.querySelector('.lix-balance').innerHTML = profile.lixBalance;
document.querySelectorAll('.profile-name').forEach(elem => {
    elem.innerHTML = profile.firstName + " " + profile.lastName;
})
const openProfileMenu = () => {
    document.querySelector('.shopping-cart').classList.remove('hidecart')
}
const closeCart = () => {
    document.querySelector('.shopping-cart').classList.add('hidecart')
}
const pages = [
    {
        name: 'home',
        page: document.querySelector('.home'),
        tab: document.querySelector('.home-tab')
    },
    {
        name: 'furniture',
        page: document.querySelector('.furniture'),
        tab: document.querySelector('.furniture-tab')
    },
    {
        name: 'decoration',
        page: document.querySelector('.decoration'),
        tab: document.querySelector('.decoration-tab')
    },
    {
        name: 'set',
        page: document.querySelector('.set'),
        tab: document.querySelector('.set-tab')
    },
]
let currentPage;
pages.map((p) => {
    const {tab, name, page} = p
    tab.addEventListener('click', () => {
        if(name === 'home'){
            document.querySelector('.homepage').classList.remove('hide-element')
        }
        tab.classList.add('pressed');
        page.classList.remove('hide-element');
        pages.map((i) => {
            if(i.name !== name){
                i.tab.classList.remove('pressed');
                i.page.classList.add('hide-element');
            }
        })
        document.querySelector('.search').classList.remove('hide')
        document.querySelector('#searchitems').value = ""
        currentFilter = {}
        currentPage = name;
        closeCart()
    })
})
const searchItems = () => {
    let searchvalue = document.querySelector('#searchitems').value
    let filtered;
    if(currentPage === 'furniture'){
        filtered = allItems.filter((item) => item.type === 'furniture' && item.name.toLowerCase().includes(searchvalue.toLowerCase()))
        if(currentFilter.cat && currentFilter.subcat){
            let filter = filtered.filter((item) => item.category === currentFilter.cat && item.subCategory === currentFilter.subcat)
            pushFurnitures(filter);
        } else {
            pushFurnitures(filtered);
        }
    } else if(currentPage === 'decoration'){
        filtered = allItems.filter((item) => item.type === 'decoration' && item.name.toLowerCase().includes(searchvalue.toLowerCase()))
        if(currentFilter.cat && currentFilter.subcat){
            let filter = filtered.filter((item) => item.category === currentFilter.cat && item.subCategory === currentFilter.subcat)
            pushDecorations(filter);
        } else {
            pushDecorations(filtered);
        }
    } else {
        let homesearch = document.querySelector('.home-search')
        searchvalue ? document.querySelector('.search-value').innerHTML = '"' + searchvalue + '"' : document.querySelector('.search-value').innerHTML = ""
        filtered = allItems.filter((item) => item.name.toLowerCase().includes(searchvalue.toLowerCase()));
        pushHomeSearchContents(filtered)
        searchvalue ? homesearch.classList.remove('hide-element') : homesearch.classList.add('hide-element');
    }
}
const toggleFilter = (elem) => {
    document.querySelector(`.${elem}-filters`).classList.toggle('hidefilter');
    document.querySelector(`.${elem} .minus`).classList.toggle('hide');
    document.querySelector(`.${elem} .plus`).classList.toggle('hide');
}
const showSearch = () => {
    document.querySelector('.search').classList.add('showsearch')
    document.querySelector('.search .flexlittle').classList.remove('hide')
    document.querySelector('#searchitems').focus()
}
const cancelSearch = () => {
    document.querySelector('.search').classList.remove('showsearch')
    document.querySelector('.search .flexlittle').classList.add('hide')
    pushDecorations(allItems);
    pushFurnitures(allItems);
    document.querySelector('.home-search').classList.add('hide-element')
    document.querySelector('#searchitems').value = "";
}
const pushSpecialOffers = (data) => {
    document.querySelector('.specialoffers').innerHTML = "";
    data.map((item) => {
        const {id, imageUrl, specialOffer, name, discountedPrice, currentPrice} = item;
        if(specialOffer){
            document.querySelector('.specialoffers').innerHTML += `
            <section class="offer">
                <div>
                    <h3>$ ${discountedPrice}</h3>
                    <h5>$ ${currentPrice}</h5>
                </div>    
                <div>
                    <img src=${imageUrl} alt="item" class="item-image">
                </div>
                <p>${name}</p>
                <button onclick="addToCart('${id}')">ADD TO CART</button>
            </section>
            `
        }
    })
}
const pushFurnitures = (data) => {
    document.querySelector('.furnitures').innerHTML = ""
    data.map((item) => {
        const {id, type, imageUrl, name, specialOffer, discountedPrice, currentPrice, category} = item;
        if(type === 'furniture'){
            document.querySelector('.furnitures').innerHTML += `
            <section class="offer">
                <div>
                    <h3>$ ${ specialOffer ? discountedPrice : currentPrice}</h3>
                    <h5> ${specialOffer ? '$' + currentPrice : ''}</h5>
                </div>    
                <div>
                    <img src=${imageUrl} alt="item" class="item-image">
                </div>
                <p>${name}</p>
                <button onclick="addToCart('${id}')">ADD TO CART</button>
            </section>
            `
        }
    })
}
const pushDecorations = (data) => {
    document.querySelector('.decorations').innerHTML = ""
    data.map((item) => {
        const {id, type, imageUrl, name, specialOffer, discountedPrice, currentPrice, category} = item;
        if(type === 'decoration'){
            document.querySelector('.decorations').innerHTML += `
            <section class="offer">
                <div>
                    <h3>$ ${specialOffer ? discountedPrice : currentPrice}</h3>
                    <h5> ${specialOffer ? '$' + currentPrice : ''}</h5>
                </div>    
                <div>
                    <img src=${imageUrl} alt="item" class="item-image">
                </div>
                <p>${name}</p>
                <button onclick="addToCart('${id}')">ADD TO CART</button>
            </section>
            `
        }
    })
}
const pushHomeSearchContents = (data) => {
    document.querySelector('.search-content').innerHTML = "";
    data.map((item) => {
        const {id, type, imageUrl, name, specialOffer, discountedPrice, currentPrice} = item;
        document.querySelector('.search-content').innerHTML += `
            <section class="offer">
                <div>
                    <h3>$ ${ specialOffer ? discountedPrice : currentPrice}</h3>
                    <h5> ${specialOffer ? '$' + currentPrice : ''}</h5>
                </div>    
                <div>
                    <img src=${imageUrl} alt="item" class="item-image">
                </div>
                <p>${name}</p>
                <button onclick="addToCart('${id}')">ADD TO CART</button>
            </section>
        `
    })
}
let cartItems = []
let cartTotal = 0
const updateCartTotal = () => {
    cartTotal = 0
    cartItems.map((item) => {
        if(item.specialOffer){
            cartTotal += item.discountedPrice
        } else {
            cartTotal += item.currentPrice
        }
    });
    document.querySelector('.carttotal').innerHTML = cartTotal;
}
updateCartTotal()
const pushCartItems = (data) => {
    document.querySelector('.cart-items').innerHTML = ""
    data.map((item) => {
        const {name, imageUrl, discountedPrice, specialOffer, currentPrice, id} = item
        document.querySelector('.cart-items').innerHTML += `
        <div class="cart-item item-${id}">
            <img src="${imageUrl}" alt="item">
            <section>
                <div>
                    <p class="cap">${name}</p>
                    <h5>$ ${specialOffer ? discountedPrice : currentPrice}</h5>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" onclick="removeFromCart('${id}')" width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <path opacity="0.5" d="M3.75 22C3.0625 22 2.47396 21.7606 1.98438 21.2819C1.49479 20.8032 1.25 20.2278 1.25 19.5556V3.66667H0V1.22222H6.25V0H13.75V1.22222H20V3.66667H18.75V19.5556C18.75 20.2278 18.5052 20.8032 18.0156 21.2819C17.526 21.7606 16.9375 22 16.25 22H3.75ZM6.25 17.1111H8.75V6.11111H6.25V17.1111ZM11.25 17.1111H13.75V6.11111H11.25V17.1111Z" fill="#878787"/>
                </svg>
            </section>
        </div>
        `
    })
    if(cartTotal > profile.lixBalance){
        document.querySelector('.cart-items').innerHTML += `
        <p class="message">There isn't enough money to buy these items!</p>
        `
    }
}
const removeFromCart = (id) => {
    document.querySelector(`.item-${id}`).classList.add('hideprofile')
    cartItems = cartItems.filter((item) => item.id !== id)
    updateCartTotal(cartTotal)
    setTimeout(() => {
        pushCartItems(cartItems);
    }, 1000);
    if(cartItems.length){
        document.querySelector('.shopping-cart button').classList.remove('hide')
    } else {
        document.querySelector('.shopping-cart button').classList.add('hide')
    }
}
pushCartItems(cartItems)
const addToCart = (id) => {
    let selectedItem = allItems.filter((item) => item.id === id)
    if(selectedItem[0]){
        document.querySelector('.itemimage').src = selectedItem[0].imageUrl
        document.querySelector('.itemname').textContent = selectedItem[0].name
        document.querySelector('.added-to-cart').classList.remove('hideprofile');
        cartItems.unshift(selectedItem[0]);
        updateCartTotal()
        pushCartItems(cartItems)
        setTimeout(() => {
            cancelCartPopUp()
        }, 1500);
    }
    if(cartItems.length){
        document.querySelector('.shopping-cart button').classList.remove('hide')
    } else {
        document.querySelector('.shopping-cart button').classList.add('hide')
    }
}
const cancelCartPopUp = () => {
    document.querySelector('.added-to-cart').classList.add('hideprofile');
}
const proceedToBuy = () => {
    if(cartTotal <= profile.lixBalance){
        alert("Transaction in progress")
        console.log(cartItems)
        closeCart()
    }
}
let currentFilter = {
    cat: "",
    subcat: "",
    search: ""
}
const filterDecorationItems = (subcat, cat, elem) => {
    let targetElement = document.querySelector(`.${elem}`);
    if(!document.querySelector(`.${elem} svg`).classList.contains('hide')){
        document.querySelector(`.${elem} svg`).classList.add('hide')
        pushDecorations(allItems)
        document.querySelector('.decoration-header').innerHTML = 'DECORATION'
    } else {
        document.querySelector(`.${elem} svg`).classList.remove('hide')
        document.querySelector('.decoration-header').innerHTML = document.querySelector(`.${elem}`).textContent
        document.querySelectorAll('.decoration-filter').forEach((item) => {
            if(item !== targetElement){
                item.lastChild.previousSibling.classList.add('hide')
            }
        })
        currentFilter.cat = cat
        currentFilter.subcat = subcat
        searchItems()
    }
}
const filterFurnitureItems = (subcat, cat, elem) => {
    let targetElement = document.querySelector(`.${elem}`);
    if(!document.querySelector(`.${elem} svg`).classList.contains('hide')){
        document.querySelector(`.${elem} svg`).classList.add('hide');
        pushFurnitures(allItems);
        document.querySelector('.furniture-header').innerHTML = 'FURNITURE'
    } else {
        document.querySelector(`.${elem} svg`).classList.remove('hide')
        document.querySelector('.furniture-header').innerHTML = document.querySelector(`.${elem}`).textContent
        document.querySelectorAll('.furniture-filter').forEach((item) => {
            if(item !== targetElement){
                item.lastChild.previousSibling.classList.add('hide')
            }
        })
        currentFilter.cat = cat
        currentFilter.subcat = subcat
        searchItems()
    }
}
pushSpecialOffers(allItems)
pushFurnitures(allItems)
pushDecorations(allItems)
const toggleDisplay = () => {
    document.querySelector('.display').classList.toggle('hide-display')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});