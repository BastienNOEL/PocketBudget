//cette scene fait le lien entre le magasin et le pere noel

class TravelScene extends Phaser.Scene {
    constructor() {
        super("Travel");

    }

    create() {


        this.bg1 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG1");
        this.bg1.setOrigin(0, 0);
        this.bg1.setScrollFactor(0);
        this.bg1.setScale(0.6, 0.6);

        this.bg2 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG2");
        this.bg2.setOrigin(0, 0);
        this.bg2.setScrollFactor(0);
        this.bg2.setScale(0.6, 0.6);

        this.bg3 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG3");
        this.bg3.setOrigin(0, 0);
        this.bg3.setScrollFactor(0);
        this.bg3.setScale(0.6, 0.6);

        this.bg4 = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "BG4");
        this.bg4.setOrigin(0, 0);
        this.bg4.setScrollFactor(0);
        this.bg4.setScale(0.63, 0.63);


        this.ground = this.add.tileSprite(0, 0, game.config.width * 3, 125, "ground");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);
        this.ground.y = 500;
        this.physics.add.existing(this.ground, true);

        this.igloo1 = this.add.image(870, 450, 'igloo1');
        this.igloo1.setScale(0.5, 0.5);

        this.containerPanneauBoutique = this.add.container(680, 453);
        this.panneauBoutique = this.add.image(0, 0, 'panneau');
        this.textePanneauBoutique = this.add.text(0, 0, "Boutique", {
            fill: "black",
            font: "19px Arial",
        });
        this.textePanneauBoutique.setOrigin(0.5, 0.9);

        this.containerPanneauBoutique.add(this.panneauBoutique);
        this.containerPanneauBoutique.add(this.textePanneauBoutique);


        this.maisonSanta = this.add.image(200, 307, 'maison');
        this.maisonSanta.setScale(0.3, 0.3);

        this.containerPanneauSanta = this.add.container(430, 453);
        this.panneauSanta = this.add.image(0, 0, 'panneau');
        this.textePanneauSanta = this.add.text(0, 0, "Père\nNoël", {
            fill: "black",
            font: "17px Arial",
        });
        this.textePanneauSanta.setOrigin(0.5, 0.7);

        this.containerPanneauSanta.add(this.panneauSanta);
        this.containerPanneauSanta.add(this.textePanneauSanta);

        this.maMaison = this.add.image(1300, 307, 'maison');
        this.maMaison.setScale(0.3, 0.3);

        this.containerPanneauMaMaison = this.add.container(1300, 300);
        this.panneauMaMaison = this.add.image(0, 0, 'panneauEntree');
        this.panneauMaMaison.setScale(0.5, 0.5);
        this.textePanneauMaMaison = this.add.text(0, 0, "Chez Moi!", {
            fill: "#000000",
            font: "20px Arial",
        });
        this.textePanneauMaMaison.setOrigin(0.5, 0.5);

        this.containerPanneauMaMaison.add(this.panneauMaMaison);
        this.containerPanneauMaMaison.add(this.textePanneauMaMaison);

        this.lutinMarchand = this.add.image(1650, 430, 'lutinMarchand');
        this.lutinMarchand.setScale(0.15, 0.15);


        this.player = this.physics.add.sprite(posXTravel, posYTravel, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.5, 0.5);
        this.player.body.setGravityY(300)
        this.physics.add.collider(this.player, this.ground);


        this.cursors = this.input.keyboard.createCursorKeys();
        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.txtInteractionBoutique = this.add.text(800, 348, "Appuyez sur ESPACE", {
            fill: "black"
        });
        this.txtInteractionBoutique.visible = false;

        this.txtInteractionMaisonSanta = this.add.text(150, 327, "Appuyez sur ESPACE", {
            fill: "black"
        });
        this.txtInteractionMaisonSanta.visible = false;

        this.txtInteractionMaMaison = this.add.text(1250, 327, "Appuyez sur ESPACE", {
            fill: "black"
        });
        this.txtInteractionMaMaison.visible = false;

        this.txtInteractionLutinMarchand = this.add.text(1550, 327, "Appuyez sur ESPACE", {
            fill: "black"
        });
        this.txtInteractionLutinMarchand.visible = false;

        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

        this.myCam.startFollow(this.player);

        this.scene.launch('Gui');

    }

    update() {
        this.movePlayer();
        this.changeScene();
        this.scrollBackground();



    }

    movePlayer() {
        if (this.cursors.left.isDown && this.player.x > 0) {
            this.player.setVelocityX(-300);
        } else if (this.cursors.right.isDown && this.player.x < game.config.width * 3) {
            this.player.setVelocityX(300);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

    scrollBackground() {
        this.bg1.tilePositionX = this.myCam.scrollX * .2;
        this.bg2.tilePositionX = this.myCam.scrollX * .4;
        this.bg3.tilePositionX = this.myCam.scrollX * .6;
        this.bg4.tilePositionX = this.myCam.scrollX * .8;

        this.ground.tilePositionX = this.myCam.scrollX;
    }

    changeScene() {
        if ((this.player.x > 725 && this.player.x < 845) && this.player.y > 423) {
            this.txtInteractionBoutique.visible = true;
            if (this.clavSpace.isDown) {
                this.scene.start("Boutique");
                posYTravel = this.player.y;
                posXTravel = this.player.x;
                this.scene.stop('Gui');
            }
        } else {
            this.txtInteractionBoutique.visible = false;
        }

        if ((this.player.x < 350 && this.player.x > 200) && this.player.y > 423) {
            this.txtInteractionMaisonSanta.visible = true;
            if (this.clavSpace.isDown) {
                this.scene.start("PereNoel");
                posYTravel = this.player.y;
                posXTravel = this.player.x;
                this.scene.stop('Gui');
            }
        } else {
            this.txtInteractionMaisonSanta.visible = false;
        }

        if ((this.player.x > 1300 && this.player.x < 1450) && this.player.y > 423) {

            this.txtInteractionMaMaison.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("Home");
                posYTravel = this.player.y;
                posXTravel = this.player.x;
                this.scene.stop('Gui');
            }
        } else {
            this.txtInteractionMaMaison.visible = false;
        }

        if ((this.player.x > 1550 && this.player.x < 1750) && this.player.y > 423) {

            this.txtInteractionLutinMarchand.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("LutinShop");
                posYTravel = this.player.y;
                posXTravel = this.player.x;
                this.scene.stop('Gui');
            }
        } else {
            this.txtInteractionLutinMarchand.visible = false;
        }
    }


}