class Logic{
    constructor(){
        this.screen1 = new Screen1();
        this.rect = [];

        for (let index = 0; index < this.screen1.getArraySize(); index++) {
            this.rect[index] = new Shape2 ((index*100)+100, 175);
        }
    }

    draw(){
        for (let index = 0; index < rect.length; index++) {
            this.rect[index].draw();
        }
     
    }
}
