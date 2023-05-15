console.log('connected to js')
let category = document.querySelectorAll('.outputCategory');

// let confirmation = window.confirm("hello");
console.log(category);

//Changing the background color of category accordingly
for (let i of category) {
    console.log(i.innerText);
    if (i.innerText == "CHOOSE ONE OPTION") {
        // i.style.display='none';
        i.style.backgroundColor = 'inherit';
        i.style.color = 'black'
    }
    if (i.innerText == "WORK") {
        i.style.backgroundColor = 'orange';
    }
}
//Toggling the task as completed and not completed
let done = document.querySelectorAll('.done');
console.log(done);
for (let i of done) {
    console.log(i.dataset);
    if (i.dataset.done == 'true') {
        document.getElementById(i.id).style.textDecoration = 'line-through';
        document.getElementById(i.id).style.textDecorationColor = 'red';

    }
}