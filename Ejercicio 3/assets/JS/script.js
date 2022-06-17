
let ingresar = document.querySelector('#ingresar');

ingresar.addEventListener("click", function(){
    let select1 = document.querySelector('#select-1').value;
    let select2 = document.querySelector('#select-2').value;
    let select3 = document.querySelector('#select-3').value;
    let password = select1.toString() + select2.toString() + select3.toString();
    let aviso = document.querySelector('#aviso');
    if (password === '911'){
        aviso.innerHTML = "Password 1 correcto. Acceso validado"
        aviso.style.color='green'
    }
    else if (password === '714'){
        aviso.innerHTML = "Password 2 correcto. Acceso validado"
        aviso.style.color='green'
    } else {
        aviso.innerHTML = "El password es incorrecto."
        aviso.style.color='red'
    }
})

