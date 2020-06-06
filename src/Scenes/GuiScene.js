class GuiScene extends Phaser.Scene {
    constructor() {
        super("Gui");

    }

    create() {

        this.searchScenActive();

        this.boolMovingRight = false;
        this.boolMovingLeft = false;
        this.boolInputInterctif = false;


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
            'x': 930,
            'y': 550
        });
        this.goRight.setScale(0.7,0.7);
        this.goRight.on('pointerdown', this.goRightFunction, this);
        this.goRight.on('pointerup', this.endGoRightFunction, this);

        this.goLeft = new Button({
            'scene': this,
            'key': 'goLeft',
            'x': 70,
            'y': 550
        });
        this.goLeft.setScale(0.7,0.7);
        this.goLeft.on('pointerdown', this.goLeftFunction, this);
        this.goLeft.on('pointerup', this.endGoLeftFunction, this);

        this.interactBtn = new Button({
            'scene': this,
            'key': 'interactBtn',
            'x': 830,
            'y': 550
        });
        this.interactBtn.setScale(0.7,0.7);
        this.interactBtn.on('pointerdown', this.interact, this);
        this.interactBtn.on('pointerup', this.endInteract, this);
        this.interactBtn.visible = false;


    }

    update() {
        this.mooving();
    }

    searchScenActive() {

        this.sceneEnCours;
        this.nameSceneActive;

        if (this.scene.isActive('Travel') == true) {
            this.sceneEnCours = this.scene.get('Travel').player;
            this.nameSceneActive = "Travel";
        } else if (this.scene.isActive('PereNoel') == true) {
            this.sceneEnCours = this.scene.get('PereNoel').player;
            this.nameSceneActive = "PereNoel";
        } else if (this.scene.isActive('Home') == true) {
            this.sceneEnCours = this.scene.get('Home').player;
            this.nameSceneActive = "Home";
        }
    }


    mooving() {
        if (this.boolMovingRight == true) {
            if(this.scene.isActive('Travel') == true){
                this.sceneEnCours.setVelocityX(300);
            } else {
                this.sceneEnCours.setVelocityX(500);
            }
            this.sceneEnCours.anims.play('right', true);
        } else if (this.boolMovingLeft == true) {
            if(this.scene.isActive('Travel') == true){
                this.sceneEnCours.setVelocityX(-300);
            } else {
                this.sceneEnCours.setVelocityX(-500);
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

    interact(){

        this.boolInputInterctif = true ;
        console.log('%c%s', 'color: #aa00ff', "vous appuyez sur le bouton d'interaction");

    }

    endInteract(){
        this.boolInputInterctif = false ;
    }
}