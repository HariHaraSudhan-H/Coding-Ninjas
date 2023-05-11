console.log('connected to js')

const contact = document.querySelectorAll('.contacts');
for(let i of contact){
    i.addEventListener('click',function(){
        i.style.color = 'orange';
    })
}
