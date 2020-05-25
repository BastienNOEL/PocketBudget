// Cette classe servira pour faire l'écran titre

class TitleScene extends Phaser.Scene {
    constructor() {
        super("Title");
    }

    create(){
        this.add.text(20,20,"Title");
        this.scene.start("Travel");
    }
}