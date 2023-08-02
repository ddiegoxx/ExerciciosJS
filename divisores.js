const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);


    for(let i = 1; i<=numero;i++){
        if(numero%i==0){
            resp.innerText += `${i} `
        }
    }
})