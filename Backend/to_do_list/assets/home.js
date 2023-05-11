console.log('connected to js')
let category = document.querySelectorAll('.outputCategory');
console.log(category);
for(let i of category){
    console.log(i.innerText);
    if(i.innerText=="CHOOSE ONE OPTION"){
        // i.style.display='none';
        i.style.backgroundColor ='inherit';
        i.style.color = 'black'
    }
    if(i.innerText=="WORK"){
        i.style.backgroundColor = 'orange';
    }
}
let done = document.querySelectorAll('.done');
console.log(done);
for(let i of done){
    console.log(i.dataset);
    if(i.dataset.done=='true'){
        document.getElementById(i.id).style.textDecoration='line-through';
    }
}