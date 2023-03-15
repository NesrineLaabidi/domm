
var like= document.getElementsByClassName('fa-solid fa-heart');
for(let el of like){
    el.addEventListener("click",function(){

        if(el.style.color=== "white") {el.style.color="red"}
        else {el.style.color="white"}
    })
}
// var decrementbutton = document.getElementById('dec');
// var incrementbutton = document.getElementById('inc');
// // console.log(incrementbutton)
// for (var i = 0; i < incrementbutton.length ; i++ ){
//     var button = incrementbutton[i];
//     button.addEventListener('click',function(event){
//         var buttonclicked = event.target;
//         console.log(buttonclicked);
//     })


// for (var i = 0; i < decrementbutton.length ; i++ ){
//     var button = incrementbutton[i];
//     button.addEventListener('click',function(event){
//         var buttonclicked = event.target;
//         console.log(buttonclicked);
//     })

// }


// function increment() {
//     document.getElementsByClassName('quantity-selector__button');
//  }
//  function decrement() {
//     document.getElementsByClassName('quantity-selector__button').stepDown();
//  }


// var inc= Array.from(document.getElementById('inc')); 
// for (let el of inc){
// el.addEventListener("click",function(){
//    let t= (el.nextElementSibling).value;
//    let s=parseInt(t);
//         s++;
//     (el.nextElementSibling).value = s;
  
// });
// }
// function increment() {
//     document.getElementById('demoInput').stepUp();
//  }
//  function decrement() {
//     document.getElementById('demoInput').stepDown();
//  }

var dec= Array.from(document.getElementsByClassName('minus-btn'));
for (let el of dec){
el.addEventListener("click",function(){
   let t= (el.previousElementSibling).value;
   let s=parseInt(t);
    if (s > 0) {
        s--;
            } 
    (el.previousElementSibling).value = s;
sum ()
sum2()
});
}

var inc= Array.from(document.getElementsByClassName('plus-btn')); 
for (let el of inc){
el.addEventListener("click",function(){
   let t= (el.nextElementSibling).value;
   let s=parseInt(t);
        s++;
    (el.nextElementSibling).value = s;
    sum ()
    sum2()
});
}

function sum(){
    var qte = Array.from(document.getElementsByClassName("quantity"));

    var price = Array.from(document.getElementsByClassName("price"));

    var total = 0;
    for(let i=0; i<price.length; i++){
        total+= parseInt(qte[i].value) * parseInt(price[i].innerText);

        console.log(parseInt(qte[i].value));
        console.log(parseInt(price[i].innerText));
    } 

    console.log(total);

    
return(document.querySelector("#total").innerText="TOTAL=   "+total + "£");
}

function sum(){
    var qte = Array.from(document.getElementsByClassName("quantity"));
    var price = Array.from(document.getElementsByClassName("price"));
    var total = 0;

    for(let i=0; i<price.length; i++){
        total += parseInt(qte[i].value) * parseInt(price[i].innerText);
        console.log(parseInt(qte[i].value));
        console.log(parseInt(price[i].innerText));
    } 

    console.log(total);

    var grandTotal = total;

    return(document.querySelector("#total").innerText="TOTAL: "+grandTotal + "$");
}

function sum2(){
    var qte = Array.from(document.getElementsByClassName("quantity"));
    var price = Array.from(document.getElementsByClassName("price"));
    var total = 0;

    for(let i=0; i<price.length; i++){
        total += parseInt(qte[i].value) * parseInt(price[i].innerText);
        console.log(parseInt(qte[i].value));
        console.log(parseInt(price[i].innerText));
    } 

    console.log(total);

    var shippingFee = 10; // frais de livraison fixe
    var grandTotal = total + shippingFee;

    return(document.querySelector("#total-c").innerText=+grandTotal + "$");
}



var del= Array.from(document.getElementsByClassName('delete-btn'))

for (let el of del){
    el.addEventListener("click",function(){
        var r = confirm("Are you sure to delete this item?");
        if (r == true) {
        const parent = el.closest(".product-list__row");
        while (parent.firstChild) {
            parent.firstChild.remove()
        };
        sum()
        sum2()
    }
});
}