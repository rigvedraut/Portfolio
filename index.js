// navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// content inside header

  var typed = new Typed('#h3', {
    strings: ['A multidisciplinary Web Developer with a passion to create engaging web interfaces.'],
    typeSpeed: 20,
  });

  var typed = new Typed('#h2', {
    strings: ['Hi, I am Rigved.'],
    typeSpeed: 20,
  });

let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }
  
  function validate(){
    var username = document.getElementById('uname');
    if(username.value.trim() == ''){-
        alert('username can not be blank')
        username.style.border = '1px solid red';
        document.getElementById('lbluser') .style.visibility = 'visible';
        return false;
    }
    else if(username.value.trim().length < 4){
        alert('username can not be blank')
        username.style.border = '1px solid red';
        document.getElementById('lbluser') .style.visibility = 'visible';
        return false;
    }
    else{
        true;
    }
}