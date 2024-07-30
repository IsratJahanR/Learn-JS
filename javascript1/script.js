function my_function(){
var content = document.getElementById("pid")

content.innerHTML="you have clicked on button";
}
function change_img()
{
    var img = document.querySelector("#image")
    img.src="images/img2.jpg"
}
function addToWishlist()
{
    var iid=document.getElementById('heart');
    if(iid.style.color == 'green')
    {
        iid.style.color='red';
    }
    else iid.style.color='green';
}
//for adding heading into para
// var para = document.createElement("h1");
// var text = document.createTextNode("This is new heading")
// para.appendChild(text);

// var para_div = document.querySelector("#pid");
// para_div.appendChild(para);

// // for removing heading from para
// var heading2 = document.getElementsByTagName("h1")[0];
// para_div.removeChild(heading2)


// pr_id.addEventListener("click",function(){
//     alart("this is on add event listner");
// })


// var foo =  document.getElementsByTagName("p");
// alert(foo[0].innerHTML);

var bigImage = document.getElementById("lead-image");
//alert(bigImage.getAttribute("src"));

//bigImage.setAttribute("src","images/img2.jpg")

//document.getElementById("pr-id").style.backgroundColor ="#fff";
//document.getElementById("intro").style.color = "#fff";
//var content_d3 = document.getElementsByClassName("d3");
//ontent_d3.innerHTML = <p id="pr_id">Lorem ipsum dolor sit amet .</p>

//alert(content_d3[0].innerHTML)

var cc=document.querySelector(".container");
var ccc=document.querySelector("#pid");
alert(ccc.innerHTML);