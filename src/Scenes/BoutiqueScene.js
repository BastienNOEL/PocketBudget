class BoutiqueScene extends Phaser.Scene {
    constructor() {
        super("Boutique");
    }


    create(){
        this.add.text(20,20,"Boutique");

        console.log('%c%s', 'color: #8400ff', "Boutique");
        
    }
}