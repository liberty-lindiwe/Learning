 const hamburger = document.querySelector(".hamburger");
 const navLinks = document.querySelector(".nav-links");
 const links =  document.querySelectorAll(".nav-links li");
 const linkbutton = document.querySelectorAll(".nav-links li a");

  


 hamburger.addEventListener('click',function(){
     navLinks.classList.toggle("open");
     links.forEach(function(link){
         link.classList.toggle("fade");
     });    
 });

 

 





