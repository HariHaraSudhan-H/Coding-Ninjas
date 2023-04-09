var switches = document.getElementById('switch');
var slider = document.getElementById('slider');
var count = 0;
slider.addEventListener('click', darktoggle);
function darktoggle() {
    count++;
    if (count % 2 === 0) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        switches.style.translate = "0";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        switches.style.translate = "45px"
        slider.style.backgroundColor="white";
    }
}