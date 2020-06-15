// Cette classe servira pour faire l'écran titre

class TitleScene extends Phaser.Scene {
    constructor() {
        super("Title");
    }


    create() {

        this.bg1 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2-1");
        this.bg1.setOrigin(0, 0);
        this.bg1.setScrollFactor(0);
        this.bg1.setScale(0.5, 0.5);

        this.bg2 = this.add.tileSprite(0, -25, game.config.width * 2, game.config.height * 2, "BG2-2");
        this.bg2.setOrigin(0, 0);
        this.bg2.setScrollFactor(0);
        this.bg2.setScale(0.5, 0.5);

        this.snow1 = this.add.tileSprite(0, -50, game.config.width * 3.5, game.config.height * 2, "BG2-Snow");
        this.snow1.setOrigin(0, 0);
        this.snow1.setScrollFactor(0);
        this.snow1.setScale(0.33, 0.33);

        this.bg3 = this.add.tileSprite(0, -10, game.config.width * 2, game.config.height * 2, "BG2-3");
        this.bg3.setOrigin(0, 0);
        this.bg3.setScrollFactor(0);
        this.bg3.setScale(0.5, 0.5);

        this.snow2 = this.add.tileSprite(0, -100, game.config.width * 3, game.config.height * 2, "BG2-Snow");
        this.snow2.setOrigin(0, 0);
        this.snow2.setScrollFactor(0);
        this.snow2.setScale(0.43, 0.43);

        this.bg4 = this.add.tileSprite(0, -10, game.config.width * 2, game.config.height * 2, "BG2-4");
        this.bg4.setOrigin(0, 0);
        this.bg4.setScrollFactor(0);
        this.bg4.setScale(0.53, 0.53);

        this.bg5 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2-5");
        this.bg5.setOrigin(0, 0);
        this.bg5.setScrollFactor(0);
        this.bg5.setScale(0.58, 0.58);

        this.snow3 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2-Snow");
        this.snow3.setOrigin(0, 0);
        this.snow3.setScrollFactor(0);
        this.snow3.setScale(0.53, 0.53);

        this.bg6 = this.add.tileSprite(0, -25, game.config.width * 2, game.config.height * 2, "BG2-6");
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

        this.btnSave = new Button({
            'scene': this,
            'key': 'buttonSave',
            'x': 50,
            'y': 550
        });
        this.btnSave.on('pointerdown', this.savingData, this);
        this.btnSave.setScale(0.3,0.3);


        this.btnImportSave = new Button({
            'scene': this,
            'key': 'buttonImportSave',
            'x': 125,
            'y': 550
        });
        this.btnImportSave.on('pointerdown', this.importingData, this);
        this.btnImportSave.setScale(0.5,0.5);

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

    savingData(){
        saveData();
    }

    importingData(){
        importSave.click();
    }

    scrollBackground() {
        this.bg1.tilePositionX -= 0.2;
        this.bg2.tilePositionX -= 0.4;
        this.bg3.tilePositionX -= 0.6;
        this.bg4.tilePositionX -= 0.9;
        this.bg5.tilePositionX -= 1.2;
        this.bg6.tilePositionX -= 1.5;

        this.snow1.tilePositionY -= 0.8;
        this.snow1.tilePositionX -= 1.6;

        this.snow2.tilePositionY -= 1;
        this.snow2.tilePositionX -= 2;

        this.snow3.tilePositionY -= 1.2;
        this.snow3.tilePositionX -= 2.4;
        
    }

}