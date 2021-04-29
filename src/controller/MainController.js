class MainController{
    constructor(){
        this.screen1 = new Screen1();
        this.logic = new Logic();

        this.screen = 1;
        this.error = false;
    }

    draw(){
        //this.screen1.draw();
        this.logic.draw();
        switch(screen){
            case 1:
                
            break;
            case 2:
                console.log("screen 2");
            break;
        }
    }
        
    clickButtons(){
      this.screen1.clickButtons();
    }
}

