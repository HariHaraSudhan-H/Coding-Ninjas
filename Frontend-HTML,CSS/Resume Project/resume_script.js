
// ...smooth_scroll...

var links = document.querySelectorAll('.nav-menu a');
for (var i of links) {
    i.addEventListener('click', scroller);
}
function scroller(event) {
    event.preventDefault();
    var targetSectionId = event.target.innerText.toLowerCase();
    var targetSection = document.getElementById(targetSectionId)
    console.log(event)
    var scrollInterval = setInterval(function () {
        var coordinates = targetSection.getBoundingClientRect();
        if (coordinates.top <= 0) {
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0, 50);
    }, 50)
}

// ...Autofill skillbars...

// var progressBars = document.querySelectorAll('.skill-progress > div')
// window.addEventListener('scroll', checkScroll);
// var animation = false;
// var skills = document.getElementById('skills-container');
// function initializeBars() {
//     for (let i of progressBars) {
//         i.style.width = 0 + '%';
//     }
// }
// initializeBars();
// function checkScroll() {
//     var coordinates = skills.getBoundingClientRect();
//     if (!animation && coordinates.top <= window.innerHeight) {
//         console.log("checking");
//         animation = true;
//         fillbars();
//     }else if(coordinates.top>window.innerHeight){
//         animation=false;
//         initializeBars();
//     }
// }
// function fillbars() {
//     console.log(progressBars)
//     for (let i of progressBars) {
//         let currentwidth = 0;
//         let interval = setInterval(function () {
//             let targetWidth = i.getAttribute('data-bar-width');
//             console.log("filling")
//             if (currentwidth >= targetWidth) {
//                 clearInterval(interval);
//                 return;
//             }
//             currentwidth++;
//             i.style.width = currentwidth + '%';
//         }, 5);
//     }
// }

// ...autofill better...

var progressBars = document.querySelectorAll('.skill-progress > div');
window.addEventListener('scroll', checkScroll);
function initializeBars(i) {
    i.style.width = 0 + '%';
}

for (let i of progressBars) {
    initializeBars(i);
}
function checkScroll() {
    for (let i of progressBars) {
        let coordinates = i.getBoundingClientRect();
        let dataVisited = i.getAttribute('data-visited');
        if (dataVisited=='false' && coordinates.top <= window.innerHeight-coordinates.height) {
            i.setAttribute('data-visited', "true");
            fillbar(i);
        } else if (coordinates.top > window.innerHeight) {
            i.setAttribute('data-visited', "false");
            initializeBars(i);
        }
    }
}

function fillbar(i) {
    let currentwidth = 0;
    let interval = setInterval(function () {
        let targetWidth = i.getAttribute('data-bar-width');
        if (currentwidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentwidth++;
        i.style.width = currentwidth + '%';
    }, 5);
}