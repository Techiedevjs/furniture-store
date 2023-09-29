let allItems = [
    {
        id: "weuw34",
        currentPrice : 31568,
        discountedPrice: 15970,
        imageUrl: "images/light2.png",
        name: "Rattan Ceiling Light Shade",
        category: "furniture",
        subCategory: ""
    },
    {
        id: "erer89",
        currentPrice :23456,
        discountedPrice: 10000,
        imageUrl: "images/bed.png",
        name: "Madara Retro Oak and Rattan Bed",
        category: "furniture",
        subCategory: ""
    },
    {
        id: "hu34j",
        currentPrice : 34090,
        discountedPrice: 23450,
        imageUrl: "images/table1.png",
        name: "Set of 2 Louve Nesting Tables",
        category: "furniture",
        subCategory: ""
    },
    {
        id: "poi7e",
        currentPrice : 1300,
        discountedPrice: 700,
        imageUrl: "images/painting1.png",
        name: "Balsac Paris Painting",
        category: "decoration",
        subCategory: ""
    },
    {
        id: "ert45",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/painting2.png",
        name: "mona lisa",
        category: "furniture",
        subCategory: ""
    },
    {
        id: "456hj",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/painting2.png",
        name: "mona lisa",
        category: "decoration",
        subCategory: ""
    },
    {
        id: "uoi73",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/chair2.png",
        name: "mona lisa",
        category: "furniture",
        subCategory: ""
    },
    {
        id: "uio83",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/painting2.png",
        name: "mona lisa",
        category: "decoration",
        subCategory: ""
    },
    {
        id: "we34r",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/shelf2.png",
        name: "mona lisa",
        category: "furniture",
        subCategory: ""
    },
    {
        id: "ui89y",
        currentPrice : 3400,
        discountedPrice: 1900,
        imageUrl: "images/painting2.png",
        name: "mona lisa",
        category: "decoration",
        subCategory: ""
    },
]

const profile = {
    firstName: "Debbie",
    lastName: "Sussie",
    walletBalance: 3500,
    rating: "C",
    totalEarnings: 75450,
    averageJobEarnings: 725,
    jobsCompleted: 114,
    expertise: "Backend Developer",
    expertiseCategories: 3,
    jobCompletion: {
        incompleteJobs : 45,
        onTimeJobs: 79,
        lateJobs: 56
    }
}
document.querySelectorAll('.profile-name').forEach(elem => {
    elem.innerHTML = profile.firstName + " " + profile.lastName;
})
const openProfileMenu = () => {
    document.querySelector('.shopping-cart').classList.remove('hideprofile')
}
const closeProfileMenu = () => {
    document.querySelector('.shopping-cart').classList.add('hideprofile')
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
]
pages.map((p) => {
    const {tab, name, page} = p
    tab.addEventListener('click', () => {
        if(name === 'home'){
            document.querySelector('.special').classList.add('hide-element')
            document.querySelector('.homepage').classList.remove('hide-element')
        }
        if(name === 'jobs'){
            document.querySelector(`.furniture`).classList.remove('hide-element');
        }
        if(name === 'favorites'){
            document.querySelector(`.decoration`).classList.remove('hide-element');
        }
        tab.classList.add('pressed');
        page.classList.remove('hide-element');
        pages.map((i) => {
            if(i.name !== name){
                i.tab.classList.remove('pressed');
                i.page.classList.add('hide-element');
            }
        })
        closeProfileMenu()
    })
})
const showSpecialOffers = () => {
    document.querySelector('.special').classList.remove('hide-element')
    document.querySelector('.homepage').classList.add('hide-element')
}

const pushSpecialOffers = (data) => {
    document.querySelector('.specialoffers').innerHTML = "";
    data.map((item) => {
        const {id, imageUrl, name, discountedPrice, currentPrice} = item;
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
            <button>ADD TO CART</button>
        </section>
        `
    })
}

const pushFurnitures = (data) => {
    document.querySelector('.furnitures').innerHTML = ""
    data.map((item) => {
        const {id, imageUrl, name, discountedPrice, currentPrice, category} = item;
        if(category === 'furniture'){
            document.querySelector('.furnitures').innerHTML += `
            <section class="offer">
                <div>
                    <h3>$ ${discountedPrice}</h3>
                    <h5>$ ${currentPrice}</h5>
                </div>    
                <div>
                    <img src=${imageUrl} alt="item" class="item-image">
                </div>
                <p>${name}</p>
                <button>ADD TO CART</button>
            </section>
            `
        }
    })
}

const pushDecorations = (data) => {
    document.querySelector('.decorations').innerHTML = ""
    data.map((item) => {
        const {id, imageUrl, name, discountedPrice, currentPrice, category} = item;
        if(category === 'decoration'){
            document.querySelector('.decorations').innerHTML += `
            <section class="offer">
                <div>
                    <h3>$ ${discountedPrice}</h3>
                    <h5>$ ${currentPrice}</h5>
                </div>    
                <div>
                    <img src=${imageUrl} alt="item" class="item-image">
                </div>
                <p>${name}</p>
                <button>ADD TO CART</button>
            </section>
            `
        }
    })
}

const addToCart = (id) => {
    
}
pushSpecialOffers(allItems)
pushFurnitures(allItems)
pushDecorations(allItems)
const toggleDisplay = () =>{
    document.querySelector('.display').classList.toggle('hide-display')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
