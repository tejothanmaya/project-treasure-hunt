class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,displayWidth/2-700,displayHeight-500);
        if(actualCode === enteredCode.toUpperCase()) 
            return true
        else
            return false
    }

}
