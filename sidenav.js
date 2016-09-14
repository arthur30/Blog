
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var state = 0; // closed

function changeState() {
    if(state === 0) {
        openNav();
        state++;
    } else if(state === 1) {
        closeNav();
        state--;
    }
}
