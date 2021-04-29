class Screen1{
    constructor(){
        this.arraySize = 5;
        this.x = 500;
        this.y = 350;

        this.xAdd = this.x + 225;
        this.yAdd = 350;
        this.xDif = this.x - 225;
        this.yDif = 350;
        this.xButton = 500;
        this.yButton = 450;

        this.click = false;
        this.error = false;
    }

    draw(){
        rectMode(CENTER);
        noStroke();
        //Rectangle with numbers
        fill(220);
        rect(this.x, this.y, 350, 80);
        fill(80);
        textSize(50);
        textAlign(CENTER);
        text(this.arraySize, this.x, this.y+15);

        //Add button
        fill(161, 224, 35);
        rect(this.xAdd, this.yAdd, 80, 80);
        fill(80);
        textSize(50);
        text("+", this.xAdd, this.yAdd+15);

        //Difference button
        fill(224, 35, 35);
        rect(this.xDif, this.yDif, 80, 80);
        fill(80);
        textSize(50);
        text("-", this.xDif, this.yDif+15);

        //Continue button
        fill(150);
        rect(this.xButton, this.yButton, 250, 70);
        fill(80);
        textSize(30);
        text("CONTINUE", this.xButton, this.yButton+15);

        
    }

    clickButtons(){
        this.error = false;
        this.click = false;

        //Add
        if(mouseX > this.xAdd-40 && mouseX < this.xAdd+40 && mouseY > this.yAdd-40 && this.yAdd+40){
            this.arraySize++;
        }

        //Difference
        if(mouseX > this.xDif-40 && mouseX < this.xDif+40 && mouseY > this.yDif-40 && this.yDif+40){
            this.arraySize--;
        }

        //Continue
        if(mouseX > this.xButton-250/2 && mouseX < this.xButton+250/2 && 
            mouseY > this.yButton-250/2 && this.yButton+250/2 && this.error === false){
            this.click = true;
        }

        //Error
         if(this.arraySize < 0 || this.arraySize > 10){
            window.alert("error");
            this.error = true;
        }
    }

    getClick(){
        return this.click;
    }

    getArraySize(){
        return this.arraySize;
    }    
}