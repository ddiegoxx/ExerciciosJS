const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let x = "";
    let p = true;

    for(let i = 2; i<=numero;i++){
        if(numero%i==0){
            p = false;
            x = "não é primo"
        }
    }
    if(p){
        x = "é primo"
    }

    resp.innerText = `${numero} ${x} `
    
})