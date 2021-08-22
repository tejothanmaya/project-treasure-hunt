class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(displayWidth-700,displayHeight-600);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(displayWidth-700,displayHeight-500);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(displayWidth-300,displayHeight-500);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(displayWidth-300,displayHeight-400);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(displayWidth-700,displayHeight-400);
        this.access3.style('background', 'white');  

        //Debug the code to create the third button.
        this.button3 = createButton('button3');
        this.button3.position(displayWidth-700,displayHeight-300);
        this.button3.style('background', 'lightgrey'); 
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        // On mousePressed, check the input condition. 
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
        if(score === 1){
            textSize(25);
            fill("yellow");
            text("1st_answer  -  Correct!!!!!",displayWidth-1000,displayHeight-700);
        }
        if(score === 2){
            textSize(25);
            fill("yellow");
            text("2nd_answer  -  Correct!!!!!",displayWidth-1000,displayHeight-400);
        }
    }
}