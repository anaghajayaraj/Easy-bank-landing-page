function funcMenu(){
    var y=document.getElementById('menu-list');
    if (y.style.display==="none"){
      y.style.display="block";
      document.getElementById("hamburger-icon").src ="images/icon-close.svg";
    }
    else{
      y.style.display="none";
      document.getElementById("hamburger-icon").src ="images/icon-hamburger.svg";
    }
  }