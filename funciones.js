let ButtonValue;

disminuirNumero  = () =>{
    ButtonValue= parseInt(document.getElementById("number").innerHTML)-1;
    document.getElementById("number").innerHTML = ButtonValue;
    return;

}
restablecerNumero =()=>{
    document.getElementById("number").innerHTML= 0;
    

}   
aumentarNumero =() =>{ 
    ButtonValue= parseInt(document.getElementById("number").innerHTML)+1;
    document.getElementById("number").innerHTML = ButtonValue;
    return;

}