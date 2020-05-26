class PereNoelScene extends Phaser.Scene {
    constructor() {
        super("PereNoel");
    }


    create(){
        this.add.text(20,20,"Pere Noel");

        console.log('%c%s', 'color: #8400ff', "Pere Noel");
        
    }
}