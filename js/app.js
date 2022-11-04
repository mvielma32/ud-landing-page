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
*/

/**
 * Define Global Variables
 * 
*/

// const navList = document.querySelector('#navbar__list');
const topSec = document.querySelector('.main__hero');
const secOne = document.querySelector('#section1');
const secThree = document.querySelector('#section3');
const main = document.querySelector('main');
let secList = document.querySelectorAll('section');
const secArray = Array.from(secList);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sections = Array.from(document.getElementsByTagName('section'));
const menu = document.getElementById('navbar__list');

menu.setAttribute('style', 'background-color: #bdbdbd; display: flex; justify-content:start; overflow:auto; ');

const topSection = document.createElement('li');
topSection.className='menu__link';
topSection.textContent = "Back to Top";
menu.appendChild(topSection);

const addSection = document.createElement('li');
addSection.className='menu__link';
addSection.textContent = "Add Section";
menu.appendChild(addSection);

let number = 0;
for(const section of sections){
    number = number + 1;
    const listItem = document.createElement('li');
    const listItemLink = document.createElement('a');
    listItemLink.textContent = section.dataset.nav;
    listItem.id=`sec${number}`;
    listItem.className = "menu__link";
    listItem.appendChild(listItemLink);
    menu.appendChild(listItem);
};

let list = Array.from(document.querySelectorAll('li'));

//Add Section button code: - adds a section everytime it's clicked. The screen will also scroll to the new section. 
let num = 3;
addSection.addEventListener('click', function addNextSection(){
    num = num + 1;
    if( num > 10){
        event.preventDefault();
    } else {
    let secName = `Section ${num}`;

    const nextSec = document.createElement('section');
    const nextDiv = document.createElement('div');
    const nextH2 = document.createElement('h2');
    const nextP = document.createElement('p');
    const nextP2 = document.createElement('p');
    nextSec.id = `section${num}`;
    nextSec.dataset.nav = `Section ${num}`;

    nextDiv.className = "landing__container";
    nextH2.innerText = secName;
    nextP.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
    nextP2.innerText = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

    main.appendChild(nextSec);
    nextSec.appendChild(nextDiv);
    nextDiv.appendChild(nextH2);
    nextDiv.appendChild(nextP);
    nextDiv.appendChild(nextP2);
    sections.push(nextSec);
    
    const nextListItem = document.createElement('li');
    const nextItemLink = document.createElement('a');
    nextListItem.className='menu__link';
    nextListItem.id= `sec${num}`;
    nextItemLink.textContent = `Section ${num}`;
    list.push(nextListItem);
    nextListItem.appendChild(nextItemLink);
    menu.appendChild(nextListItem);
    nextSec.scrollIntoView({behavior: "smooth",});
    };
});

// Add class 'active' to section when near top of viewport**
document.addEventListener('scroll', function updateClass(){
    for (let i = 0; i < sections.length; i++) {
        const element = sections[i];
        let num = i + 2;
        const topDistance = element.getBoundingClientRect().top;
        if (topDistance > -100 && topDistance < 500) {
            element.className = "your-active-class";
            list[num].dataset.nav = "your-active-class" 
        } else {
            element.className = "inactive";  
            list[num].dataset.nav = "inactive"        
        };
    };
});

// Scroll to anchor ID using scrollTO event**

// Click to scroll to the top of the page.
topSection.addEventListener('click', function scroll() {
    window.scrollTo({behavior: "smooth", top:0});
});

// Click on section to go to that section.
menu.addEventListener('click', function roll(){
    for (let i = 2; i < list.length; i++) {
        const element = list[i];
        let numb = i -1;
        document.querySelector(`#sec${numb}`).addEventListener('click', function scroll() {
            document.querySelector(`#section${numb}`).scrollIntoView({behavior: "smooth",});
        });
    }
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


