class GuiScene extends Phaser.Scene {
    constructor() {
        super("Gui");

    }

    create() {

        this.searchScenActive();

        this.boolMovingRight = false;
        this.boolMovingLeft = false;


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


        this.goRight = new Button({
            'scene': this,
            'key': 'goRight',
            'x': 950,
            'y': 565
        });
        this.goRight.setScale(0.8, 0.8);
        this.goRight.on('pointerdown', this.goRightFunction, this);
        this.goRight.on('pointerup', this.endGoRightFunction, this);

        this.goLeft = new Button({
            'scene': this,
            'key': 'goLeft',
            'x': 50,
            'y': 565
        });
        this.goLeft.setScale(0.8, 0.8);
        this.goLeft.on('pointerdown', this.goLeftFunction, this);
        this.goLeft.on('pointerup', this.endGoLeftFunction, this);

    }

    update() {
        this.mooving();
    }

    searchScenActive() {

        this.sceneEnCours;

        if (this.scene.isActive('Travel') == true) {
            this.sceneEnCours = this.scene.get('Travel').player;
        } else if (this.scene.isActive('PereNoel') == true) {
            this.sceneEnCours = this.scene.get('PereNoel').player;
        } else if (this.scene.isActive('Home') == true) {
            this.sceneEnCours = this.scene.get('Home').player;
        }
    }


    mooving() {
        if (this.boolMovingRight == true) {
            this.sceneEnCours.setVelocityX(300);
        } else if (this.boolMovingLeft == true) {
            this.sceneEnCours.setVelocityX(-300);
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
}