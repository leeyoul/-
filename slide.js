
function resizeApply() {
    var minWidth = 1024;     
    var wrap =  document.getElementById("wrap");


    if (window.innerWidth < minWidth) { 
        wrap.style.width = "100%";
        wrap.style.flexDirection ="column";
        } else {
        wrap.style.width = "1024px";
        wrap.style.flexDirection ="row"; 

        var textbox =  document.getElementsByClassName("textbox")["textbox"];
        var imgbox =  document.getElementsByClassName("imgbox")["imgbox"];

        textbox.addEventListener("mouseover", mouseOver);
        textbox.addEventListener("mouseout", mouseOut);
            function mouseOver() {
                textbox.style.height = "200px";
                imgbox.style.width ="60%"
            }
            function mouseOut() {
                textbox.style.height = "145px";
                imgbox.style.width ="33.33333333333333%";
            }

        }
}
         
window.onload = function() { 
   window.addEventListener('resize', function() 
   {resizeApply(); }); 
}

