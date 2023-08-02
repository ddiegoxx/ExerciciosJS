const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    let x=0;

    for(let i =1; i<numero;i++){
        if(numero%i == 0){
            x += i
        }
    }
    console.log(x)
    if(x==numero){
        resp.innerText = `é perfeito \n`
    }else{
        resp.innerText = `não é perfeito \n`
    }
})