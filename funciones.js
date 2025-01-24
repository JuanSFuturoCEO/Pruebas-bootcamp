let ButtonValue;

disminuirNumero  = () =>{
    ButtonValue= parseInt(document.getElementById("number").innerHTML)-1;
    document.getElementById("number").innerHTML = ButtonValue;
    return;

}
restablecerNumero =()=>{
    document.getElementById("number").innerHTML= 0;
    // aqui no es nesesario colocar el return xq ya se coloca el 0 por si solo xddd

}   
aumentarNumero =() =>{ 
    ButtonValue= parseInt(document.getElementById("number").innerHTML)+1;
    document.getElementById("number").innerHTML = ButtonValue;
    return;

}