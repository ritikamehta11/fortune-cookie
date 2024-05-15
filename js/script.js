window.onload = function(){
    // alert("hello");
    // var cookie = document.getElementById("cookie-div");
    var cookie1= document.getElementById("cookie-1");
    var cookie2= document.getElementById("cookie-2");
    var message = document.getElementById("message");
    // message.style.display = "none";
    // cookie2.style.display = "none";
    cookie1.addEventListener("click",function(){
        cookie1.style.display = "none";
        message.style.display = "block";
        cookie2.style.display = "block";

    });

    cookie2.addEventListener("click",function(){
        message.style.width= "500px" ;
        // message.classList.remove("message");
        message.style.height= "max-content" ;

        message.style.right= "40%" ;
        message.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a aperiam voluptatibus reprehenderit. Nemo laboriosam porro culpa beatae fuga nulla tenetur quaerat eaque, corrupti veritatis autem similique accusantium, quas necessitatibus?";
       

    });
};
 
//get random messages object
//add pictures instead of block elements