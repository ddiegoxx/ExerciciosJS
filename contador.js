const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let x="";

    for(let i = numero; i>=0;i--){
        x += i;
        resp.innerText = x = `${x} \n`
    }
})