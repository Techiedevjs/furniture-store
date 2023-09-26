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

const loadJobProfileData = () => {
    document.querySelectorAll('.profile-rating').forEach(elem => {
        elem.src = `images/${profile.rating}-rating.png`;
    })
    document.querySelector('#expertise').innerHTML = profile.expertise;
    document.querySelectorAll('.completed-jobs').forEach((elem) => {
        elem.innerHTML = profile.jobsCompleted;
    })
    document.querySelectorAll('.total-earnings').forEach(elem => {
        elem.innerHTML = '$' + profile.totalEarnings
    })
    document.querySelectorAll('.average-job-earnings').forEach(elem => {
        elem.innerHTML = '$' + profile.averageJobEarnings
    })
    document.querySelectorAll('.expertise-categories').forEach(elem => {
        elem.innerHTML = profile.expertiseCategories
    })
}
loadJobProfileData();
const openProfileMenu = () => {
    document.querySelector('.profile-section').classList.remove('hideprofile')
}
const closeProfileMenu = () => {
    document.querySelector('.profile-section').classList.add('hideprofile')
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
            document.querySelector('.furniture').classList.add('hide-element')
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
let jobs = [
    
]


const toggleDisplay = () =>{
    document.querySelector('.display').classList.toggle('hide-display')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});