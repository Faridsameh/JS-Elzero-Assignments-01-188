

let title = "Elzero", description = "Elzero Web School", date = "25/10";

let container = `

<div class="card"> 
    <h3>${title}</h3>
    <p>${description}</p>
    <span>${date}</span>
</div> 
`
document.write(container.repeat(4));


let d = "-100";
let e = 20;
let f = 30;
let g = true; 

//console.log(-d * e); //2000
console.log(-d + ++e * ++g + ++f); // 173

100 