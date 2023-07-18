let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let button = document.querySelector("button")
let  span  = document.querySelector("span")

async function getData () {
    const respone = await fetch("https://quotable.io/random")
    const data = await respone.json()
    h1.innerText = data.content
    h2.innerText = data.author
    span.innerText = data.tags
    
}



button.addEventListener("click",getData)

setInterval(()=>{
    getData();
}, 3000)