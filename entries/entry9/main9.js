
 var see = document.querySelector(".see");
 var isUserMotion = false;
 
 function move(e) {
   if (e.clientX || e.touches) {
     isUserMotion = true;
     see.style.setProperty(
       "--x",
       (e.clientX || e.touches[0].clientX) + "px"
     );
     see.style.setProperty(
       "--y",
       (e.clientY || e.touches[0].clientY) + "px"
     );
   }
 }
 
 if (window.PointerEvent) {
   see.addEventListener("pointermove", move);
 } else {
   see.addEventListener("touchmove", move);
   see.addEventListener("mousemove", move);
 }
 