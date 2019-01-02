function opennav(){
    var navigation = document.querySelector('.nav');
    if(navigation.style.left == "-500px"){
        navigation.style.left = "0";
    }
    else{
        navigation.style.left ="-500px";
    }
    
}
