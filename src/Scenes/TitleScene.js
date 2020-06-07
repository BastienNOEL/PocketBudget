// Cette classe servira pour faire l'écran titre

class TitleScene extends Phaser.Scene {
    constructor() {
        super("Title");
    }


    create() {

        console.log('%c%s', 'color: #8400ff', "Title scene");

        this.bg1 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2.1");
        this.bg1.setOrigin(0, 0);
        this.bg1.setScrollFactor(0);
        this.bg1.setScale(0.5, 0.5);

        this.bg2 = this.add.tileSprite(0, -25, game.config.width * 2, game.config.height * 2, "BG2.2");
        this.bg2.setOrigin(0, 0);
        this.bg2.setScrollFactor(0);
        this.bg2.setScale(0.5, 0.5);

        this.bg3 = this.add.tileSprite(0, -10, game.config.width * 2, game.config.height * 2, "BG2.3");
        this.bg3.setOrigin(0, 0);
        this.bg3.setScrollFactor(0);
        this.bg3.setScale(0.5, 0.5);

        this.bg4 = this.add.tileSprite(0, -10, game.config.width * 2, game.config.height * 2, "BG2.4");
        this.bg4.setOrigin(0, 0);
        this.bg4.setScrollFactor(0);
        this.bg4.setScale(0.53, 0.53);

        this.bg5 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2.5");
        this.bg5.setOrigin(0, 0);
        this.bg5.setScrollFactor(0);
        this.bg5.setScale(0.58, 0.58);

        this.snow = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2.Snow");
        this.snow.setOrigin(0, 0);
        this.snow.setScrollFactor(0);
        this.snow.setScale(0.53, 0.53);

        this.bg6 = this.add.tileSprite(0, -25, game.config.width * 2, game.config.height * 2, "BG2.6");
        this.bg6.setOrigin(0, 0);
        this.bg6.setScrollFactor(0);
        this.bg6.setScale(0.58, 0.58);





        var button = new Button({
            'scene': this,
            'key': 'buttonPlay',
            'x': 500,
            'y': 470
        });
        button.on('pointerdown', this.onPressed, this);

        this.keyObj = this.input.keyboard.addKey('Enter');
        this.isDown = this.keyObj.isDown;

    }

    update() {
        if (this.keyObj.isDown) {
            this.scene.start("Travel");
        }

        this.scrollBackground();

    }

    onPressed() {
        this.scene.start("Travel");
    }

    scrollBackground() {
        this.bg1.tilePositionX -= 0.2;
        this.bg2.tilePositionX -= 0.4;
        this.bg3.tilePositionX -= 0.6;
        this.bg4.tilePositionX -= 0.9;
        this.bg5.tilePositionX -= 1.2;
        this.bg6.tilePositionX -= 1.5;

        this.snow.tilePositionY -= 1.2;
        this.snow.tilePositionX -= 2.4;

    }

}