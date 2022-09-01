class Security {
    constructor(){

        this.accessCode1 = createInput("Code1")
        this.accessCode1.position(100,77);
        this.accessCode1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,100);
        this.button1.style('background', 'lightgrey');    

        this.accessCode2 = createInput("Code2")
        this.accessCode2.position(600,77);
        this.accessCode2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(600,100);
        this.button2.style('background', 'lightgrey');

        this.accessCode3 = createInput("Code3")
        this.accessCode3.position(380,207);
        this.accessCode3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(380,230);
        this.button3.style('background', 'lightgrey');
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.accessCode1.value())){
                this.button1.hide();
                this.accessCode1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.accessCode2.value())){
                this.button2.hide();
                this.accessCode2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.accessCode3.value())){
                this.button3.hide();
                this.accessCode3.hide();
                score++;
            }
        });

    }
}