// Loder

window.addEventListener('load', hidePreloder);

function hidePreloder(){
    document.getElementById("preloder").style.display = "none";
}

// Login check



// Header

const date = document.querySelector('.date');
date.innerHTML = new Date().toDateString();

// Category

var categoryList = ['All', 'Technology', 'Science', 'Health', 'Business', 'Entertainment', 'Sports', 'World', 'Politics', 'Startup', 'Travel', 'Fashion', 'Food', 'Art', 'Culture' ];
const nav = document.querySelector('.categories');

var map = categoryList.map((category, index) => {
    return `<a href="#" key="${index}" value="${category}">${category}</a>`;
});

nav.innerHTML = map.join('');

// Uppend Card

