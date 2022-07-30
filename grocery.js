var action=document.querySelectorAll(".action");
action.forEach(btn);
function btn(button)
{
     button.addEventListener("click",calculatePrice)
}
function calculatePrice()
{
  let a=this.parentNode.parentNode;
  let b=a.querySelector("td .price")
  let c=b.value;

  
  console.log(c);
let d=this.parentNode.previousElementSibling.firstChild;
let e=d.value;
console.log(e);
let f=c*e;
let s=this.parentNode.nextElementSibling.firstChild;
s.innerText=f;
}
