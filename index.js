var sidenav=document.querySelector(".side-navbar")


    function showNavbar()
    {
        sidenav.style.left="0"
    }
    function closeNavbar()
    {
        sidenav.style.left="-30%"
    }

const countElement = document.getElementById('count');
let count = 0;
const targetCount = 2000;

function animateCount() {
  if (count < targetCount) {
    count++;
    countElement.innerText = count;
    setTimeout(animateCount, 1);
  }
}

animateCount();
