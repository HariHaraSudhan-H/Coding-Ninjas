var percentage = document.getElementById('percentage');
var html = document.documentElement;
window.addEventListener('scroll', scroll);
function scroll() {
    var current_height = document.body.scrollTop || html.scrollTop;
    var total_height = html.scrollHeight - html.clientHeight;
    console.log(current_height);
    var currentPercent = (current_height / total_height) * 100;
    percentage.innerHTML = parseInt(currentPercent);
}
