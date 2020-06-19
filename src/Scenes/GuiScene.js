class GuiScene extends Phaser.Scene {
    constructor() {
        super("Gui");

    }

    create() {

        this.searchSceneActive();

        this.boolMovingRight = false;
        this.boolMovingLeft = false;
        this.boolInputInterctif = false;

        this.minX;
        this.maxX;



        this.zoneLvl = this.add.container(930, 60);

        this.lvStar = this.add.image(0, 0, 'starLvl');
        this.lvStar.setScale(0.5, 0.5);

        this.txtLvl = this.add.text(0, 0, localStorage.getItem('lvPlayer'), {
            fill: "black",
            font: "40px Arial"
        })
        this.txtLvl.setOrigin(0.5, 0.5);

        this.zoneLvl.add(this.lvStar);
        this.zoneLvl.add(this.txtLvl);


        if (localStorage.getItem('nbStarCoin') > 0) {
            this.zoneCoin = this.add.container(800, 65);

            this.starCoin = this.add.image(0, 0, 'starCoin');
            this.starCoin.setScale(0.06, 0.06);

            this.txtCoin = this.add.text(0, 0, localStorage.getItem('nbStarCoin'), {
                fill: "black",
                font: "20px Arial"
            })
            this.txtCoin.setOrigin(0.5, 0.5);

            this.zoneCoin.add(this.starCoin);
            this.zoneCoin.add(this.txtCoin);
        }


        this.btnPause = new Button({
            'scene': this,
            'key': 'buttonPause',
            'x': 50,
            'y': 50
        });
        this.btnPause.on('pointerdown', function () {
            this.scene.pause(this.nameSceneActive);
            this.scene.launch('Pause');
            this.btnPause.visible = false;
            this.btnPlay.visible = true;
            this.btnCross.visible = true;
        }, this);
        this.btnPause.setScale(0.5, 0.5);


        this.btnPlay = new Button({
            'scene': this,
            'key': 'buttonReplay',
            'x': 50,
            'y': 50
        });
        this.btnPlay.on('pointerdown', function () {
            this.scene.resume(this.nameSceneActive);
            this.scene.stop('Pause');
            this.btnPlay.visible = false;
            this.btnPause.visible = true;
            this.btnCross.visible = false;
        }, this);
        this.btnPlay.setScale(0.5, 0.5);
        this.btnPlay.visible = false;

        this.btnCross = new Button({
            'scene': this,
            'key': 'redCross',
            'x': 500,
            'y': 80
        });
        this.btnCross.on('pointerdown', function () {
            this.scene.resume(this.nameSceneActive);
            this.scene.stop('Pause');
            this.btnPlay.visible = false;
            this.btnPause.visible = true;
            this.btnCross.visible = false;
        }, this);
        this.btnCross.visible = false;

        this.goRight = new Button({
            'scene': this,
            'key': 'goRight',
            'x': 930,
            'y': 550
        });
        this.goRight.setScale(0.7, 0.7);
        this.goRight.on('pointerdown', this.goRightFunction, this);
        this.goRight.on('pointerup', this.endGoRightFunction, this);

        this.goLeft = new Button({
            'scene': this,
            'key': 'goLeft',
            'x': 70,
            'y': 550
        });
        this.goLeft.setScale(0.7, 0.7);
        this.goLeft.on('pointerdown', this.goLeftFunction, this);
        this.goLeft.on('pointerup', this.endGoLeftFunction, this);

        this.interactBtn = new Button({
            'scene': this,
            'key': 'interactBtn',
            'x': 830,
            'y': 550
        });
        this.interactBtn.setScale(0.7, 0.7);
        this.interactBtn.on('pointerdown', this.interact, this);
        this.interactBtn.on('pointerup', this.endInteract, this);
        this.interactBtn.visible = false;


    }

    update() {
        this.mooving();
    }

    searchSceneActive() {

        this.sceneEnCours;
        this.nameSceneActive;

        if (this.scene.isActive('Travel') == true) {
            this.sceneEnCours = this.scene.get('Travel').player;
            this.nameSceneActive = "Travel";
            this.maxX = game.config.width * 2.7;
            this.minX = 0;
        } else if (this.scene.isActive('PereNoel') == true) {
            this.sceneEnCours = this.scene.get('PereNoel').player;
            this.nameSceneActive = "PereNoel";
            this.maxX = game.config.width;
            this.minX = 0;
        } else if (this.scene.isActive('Home') == true) {
            this.sceneEnCours = this.scene.get('Home').player;
            this.nameSceneActive = "Home";
            this.maxX = game.config.width * 2;
            this.minX = 100;
        } else if (this.scene.isActive('DinnerRoom') == true) {
            this.sceneEnCours = this.scene.get('DinnerRoom').player;
            this.nameSceneActive = "DinnerRoom";
            this.maxX = game.config.width;
            this.minX = 100;
        } else if (this.scene.isActive('Bedroom') == true) {
            this.sceneEnCours = this.scene.get('Bedroom').player;
            this.nameSceneActive = "Bedroom";
            if (localStorage.getItem("Lit") == "VENDU") {
                this.maxX = 245;

            } else {
                this.maxX = game.config.width;

            }
            this.minX = 0;
        }
    }


    mooving() {
        if (this.boolMovingRight == true && this.sceneEnCours.x < this.maxX) {
            if (this.scene.isActive('PereNoel') == true) {
                this.sceneEnCours.setVelocityX(500);
            } else if ((this.scene.isActive('Home') == true) || (this.scene.isActive('Bedroom') == true) || (this.scene.isActive('DinnerRoom') == true)) {
                this.sceneEnCours.setVelocityX(400);
            } else {
                this.sceneEnCours.setVelocityX(300);
            }
            this.sceneEnCours.anims.play('right', true);
        } else if (this.boolMovingLeft == true && this.sceneEnCours.x > this.minX) {
            if (this.scene.isActive('PereNoel') == true) {
                this.sceneEnCours.setVelocityX(-500);
            } else if ((this.scene.isActive('Home') == true) || (this.scene.isActive('Bedroom') == true) || (this.scene.isActive('DinnerRoom') == true)) {
                this.sceneEnCours.setVelocityX(-400);
            } else {
                this.sceneEnCours.setVelocityX(-300);
            }
            this.sceneEnCours.anims.play('left', true);

        }
    }

    goRightFunction() {
        this.boolMovingRight = true;
    }

    endGoRightFunction() {
        this.boolMovingRight = false;
    }

    goLeftFunction() {
        this.boolMovingLeft = true;
    }

    endGoLeftFunction() {
        this.boolMovingLeft = false;
    }

    interact() {

        this.boolInputInterctif = true;
        console.log('%c%s', 'color: #aa00ff', "vous appuyez sur le bouton d'interaction");

    }

    endInteract() {
        this.boolInputInterctif = false;
    }
}