const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");
const premiumPrice = document.getElementById("premium-price")

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `10,999 ₹ <span> / year </span>`;
        proPrice.innerHTML = `19,999 ₹<span> / year </span>`;
        premiumPrice.innerHTML = `27,999 ₹ <span> / year </span>`
    }else{
        starterPrice.innerHTML = `999 ₹ <span> / month </span>`;
        proPrice.innerHTML = `1999 ₹ <span> / month </span>`;
        premiumPrice.innerHTML =  `2999 ₹ <span> / month </span>`;
    }
})