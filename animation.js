var burger = document.getElementById('burger');
var sideBar = document.getElementById('sidebar');
var close = document.getElementById('close');

burger.addEventListener('click', function(){
    sideBar.style.width = '300px'
})

close.addEventListener('click', function(){
    sideBar.style.width = '0px'
})