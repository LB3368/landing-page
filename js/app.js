/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 * This code is written, tested, debugged and operated by Latisha Bridges.
 * Everything in code has its own comment above it.
*/

/**
 * Define Global Variables
 * 
*/
// Start Global Variables
const navBarMenu = document.getElementById("navbar__list"); 
// empty unordered list
const navBarMenuSections = [...document.querySelectorAll("section")]; 
// creates an array and add items to it for each section in the document
let navBarMenuItems = navBarMenuSections.length;
const listSections = document.querySelectorAll("section"); 
// section elements
const listLinks = document.querySelectorAll(".navbar__menu a"); 
// links in the navbar
// End Global Variables

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Start nav build
const dynamicNavBar = () => {
    // function to add items to navbar list dynamically
    for (navBarMenuSection of navBarMenuSections) {
        navBarMenuSectionName = navBarMenuSection.getAttribute("data-nav");
        navBarMenuSectionLink = navBarMenuSection.getAttribute("id");
        navBarMenuListItem = document.createElement("li");
        navBarMenuListItem.innerHTML = `<a class='menu__link' href='#${navBarMenuSectionLink}'>${navBarMenuSectionName}</a>`;
        navBarMenu.appendChild(navBarMenuListItem);
    }
const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
};



function buildNav() {
    sections.forEach(section => {
        // Create li elements
        const navButton = document.createElement('li');
        // Insert html into li
        navButton.insertAdjacentHTML("afterbegin", '<a href="#${section.id}" class="menu_link">${section.dataset.nav}</a>');
        navList.appendChild(navButton);

        // Invoke scrollBehavior Function
        scrollBehavior(navButton, section);
    });
    //Append ul to nav
    navBar.appendChild(navList);
}

// Invoke Nav Function
dynamicNavBar();
buildNav();
smoothScroll();
// scroll to section on link click
document.addEventListener("scroll", addActiveClass);
// End build nav

// Anchor ID using scrollTo event build
function scrollBehavior(navButton, section) {
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    });
}
// End ID using scrollTo event


// Section class 'active' when near top of viewport
const sectionInViewport = (view) => {
    // determine if section is near top of viewport
    let sectionxy = view.getBoundingClientRect();
    return sectionxy.top <= 150 && sectionxy.bottom >= 150;
};

const addActiveClass = () => {
    // function to add active class to viewed section
    for (navBarMenuSection of navBarMenuSections) {
        if (sectionInViewport(navBarMenuSection)) {
            if (!navBarMenuSection.classList.contains("your-active-class")) {
                navBarMenuSection.classList.add("your-active-class");
            }
        } else {
            navBarMenuSection.classList.remove("your-active-class");
        }
    }
};
function activeSection (){
    // Select all anchor using "menu__link" class
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{

        const sectionBond = section.getBoundingClientRect();
        //Check if the section is in viewport or not 
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            //section in viewport according to top and bottom bounding
            //add 'your-active-class' class to the specific section
            section.classList.add("your-active-class");
            //add 'active_button' class to the specific nav button according to section ID
            navActive[i].classList.add("active_button");
        } else{
            //Remove both section and navButton active classes when section is off sight
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}
// End Section class 'active' when near top of viewport

// Start Toggle NavBar according to User scroll activity
function ToggleNavBar() {
    let userScroll;
    // Default setting for NavBar during scroll
    header.getElementsByClassName.cssText = 'opacity: 1; transition: ease 0.3s;'
    // Throughout scrolling clearTimeOut
    window.clearTimeout( userScroll );
    // Timeout runs after scrolling ends
    userScroll = setTimeout(function() {
        // Settings started after Timeout Finished on NavBar
        header.getElementsByClassName.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}
// End Toggle NavBar according to User scroll activity

// Start scroll event for activeSection and toggleNavBar
window.addEventListener('scroll',(event)=> {
    activeSection();
    ToggleNavBar();
})
//End Scroll event for activeSection and toggleNavBar

// Start Go Up Button
// Create div element for button
const goUpButton = footer.insertAdjacentHTML("beforebegin", '<div Id="return_top" ></div>');
// Use scrollTo event to scroll to top of page
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// End Go Up button
