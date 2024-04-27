const rut = document.getElementById("rut").value;
const nombre = document.getElementById("nombre").value;

if (String(rut).length <= 6 && String(rut).length <=10){
    var res = document.getElementById("rut");
    res.style.border = "1xp solid green"
    if(String(nombre).length >=3 && String(nombre).length<=30){
        /*correcto*/ 
        var res = document.getElementById("nombre").value;
        res.style.border = "1xp solid green"
        document.getElementById("resultado").innerHTML = "<div class= 'alert alert-success w-50 mx-auto text-center'>" +
        "acceso concedido </div>"
    }else{
        /* error*/
        var res = document.getElementById("nombre")
        res.style.border = "1xp solid red"
        document.getElementById("resultado").innerHTML="<div class = 'alert alert-danger w-50 mx-auto text-center'>"+
        "nombre debe tener minimo 3 caracteres y maximo 20 </div>"
         }   

}else{
    /*error rut*/
    var res = document.getElementById("rut").value;
    res.style.border="1xp solid red"
    document.getElementById("resultado").innerHTML= "<div class = 'alert alert-danger w-50 mx-auto text center'>"+
    "rut debe tener minimo 9 caracteres y maximo 10 </div>"
    }