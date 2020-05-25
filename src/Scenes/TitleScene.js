// Cette classe servira pour faire l'écran titre

class TitleScene extends Phaser.Scene {
    constructor() {
        super("Title");
    }


    create() {

        console.log('%c%s', 'color: #8400ff', "Title scene");

        var bgTitre = this.add.image(500, 300, 'bgTitre');
        bgTitre.setScale(0.6, 0.6);

        var button = new Button({
            'scene': this,
            'key': 'buttons',
            'up': 0,
            'over': 1,
            'down': 2,
            'x': 500,
            'y': 300
        });
        button.on('pointerdown', this.onPressed, this);

    }

    onPressed() {
        this.scene.start("Travel");
    }

}