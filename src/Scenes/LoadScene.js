//cette scene servira a précharger des éléments

class LoadScene extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    create(){
        this.add.text(20,20,"Loading Game...");
        this.scene.start("Title");
    }
}