class BedroomScene extends Phaser.Scene {
    constructor() {
        super("Bedroom");
    }

    create() {

        console.log('%c%s', 'color: #99614d', "BEDROOM");

        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;

        this.mur = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "murBois");
        this.mur.setOrigin(0, 0);
        this.mur.setScrollFactor(0);
        this.mur.setScale(0.5, 2.5);

        var platforms = this.physics.add.staticGroup({
            key: 'ground',
            repeat: 11,
            setXY: {
                x: 60,
                y: 625,
                stepX: 127
            }
        });

        var sol = this.add.image(500, 575, 'solBois');

        this.murDroiteBack = this.add.image(910, 238, "tronc");
        this.murDroiteBack.setScale(0.2, 0.64);

        this.murGaucheBack = this.add.image(145, 238, "tronc");
        this.murGaucheBack.setScale(0.2, 0.64);

        this.fenetre = this.add.image(500, 200, "Fenêtre Ronde");
        this.fenetre.setScale(0.25, 0.25);

        this.tapis = this.add.image(500, 562, "Tapis de chambre");
        this.tapis.setScale(1.65, 0.6);

        this.lit = this.add.image(500, 480, "Lit");
        this.lit.setScale(0.8, 0.8);

        this.livres = this.add.image(275, 300, "Livres");
        this.livres.setScale(0.1, 0.1);

        this.plante = this.add.image(225, 435, "Plante en pot");
        this.plante.setScale(0.4, 0.4);

        this.poster = this.add.image(725, 225, "Poster de Noël");
        this.poster.setScale(0.1, 0.1);

        this.lampe = this.add.image(275, 200, "Lampe Murale");
        this.lampe.setScale(0.25, 0.25);

        this.contrebasse = this.add.image(750, 430, "Contrebasse");
        this.contrebasse.setScale(0.3, 0.3);

        this.chaise = this.add.image(880, 470, "Chaise à bascule");
        this.chaise.setScale(0.5, 0.5);

        this.player = this.physics.add.sprite(posXBedroom, posYBedroom, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.7, 0.7);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.player, this.santa);

        this.anims.create({
            key: 'right',
            frames: [{
                key: 'player',
                frame: 0
            }],
            frameRate: 10,
        });


        this.anims.create({
            key: 'left',
            frames: [{
                key: 'player',
                frame: 1
            }],
            frameRate: 10,
        });

        this.cursors = this.input.keyboard.createCursorKeys();


        this.murDroitePlafond = this.add.image(850, 150, "tronc");
        this.murDroitePlafond.setScale(0.2, 0.9);
        this.murDroitePlafond.setRotation(1.88);

        this.murDroiteFront = this.add.image(1000, 237, "tronc");
        this.murDroiteFront.setScale(0.2, 0.9);


        this.murGauchePlafond = this.add.image(200, 80, "tronc");
        this.murGauchePlafond.setScale(0.2, 0.9);
        this.murGauchePlafond.setRotation(-1.88);

        this.murGaucheFront = this.add.image(50, 237, "tronc");
        this.murGaucheFront.setScale(0.2, 0.9);

        this.toitureGauche = this.add.graphics();
        this.toitureGauche.fillStyle(0x000000);
        this.toitureGauche.fillTriangle(0, 0, 0, 150, 500, 0);

        this.toitureDroite = this.add.graphics();
        this.toitureDroite.fillStyle(0x000000);
        this.toitureDroite.fillTriangle(1000, 0, 1000, 150, 500, 0);

        this.textDescente = this.add.text(dataInteractions.arrayScenes[3][0][1][0], dataInteractions.arrayScenes[3][0][1][1], dataInteractions.arrayScenes[3][0][1][2], {
            fill: "white"
        });
        this.textDescente.visible = false;

        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.scene.launch('Gui');

    }

    update() {
        this.movePlayer();
        this.changeScene();
        this.checkInZoneInteraction();
    }


    movePlayer() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-500);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(500);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }

    }

    changeScene() {

        if (this.player.x < dataInteractions.arrayScenes[3][0][0][1] && this.player.y > 423) {
            this.textDescente.visible = true;
            this.boolInZoneInteraction1 = true;

            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {

                posXBedroom = this.player.x;
                posYBedroom = this.player.y;
                this.scene.start("Home");

            }
        } else {
            this.textDescente.visible = false;
            this.boolInZoneInteraction1 = false;

        }
    }

    checkInZoneInteraction() {
        if (this.boolInZoneInteraction1 == true || this.boolInZoneInteraction2) {
            this.gui.interactBtn.visible = true;
        } else {
            this.gui.interactBtn.visible = false;

        }
    }
}