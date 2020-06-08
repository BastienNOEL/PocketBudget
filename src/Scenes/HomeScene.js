class HomeScene extends Phaser.Scene {
    constructor() {
        super("Home");

    }
    create() {

        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;

        this.murs = this.physics.add.staticGroup({
            key: 'murBois',
            setScale: {
                x: 1,
                y: 2.3
            },
            repeat: 13,
            setXY: {
                x: 0,
                y: 250,
                stepX: 150
            }
        });


        this.ground = this.add.tileSprite(0, 0, game.config.width * 2, 100, "planche");
        this.ground.setOrigin(0, -0.5);
        this.ground.setScrollFactor(0);
        this.ground.y = 450;
        this.physics.add.existing(this.ground, true);
        this.ground.setScale(16, 1);


        this.porteBlanche = this.add.image(150, 368, "porteBlanche");
        this.porteBlanche.setScale(0.1, 0.1);

        this.couronne = this.add.image(150, 120, "couronne");
        this.couronne.setScale(0.3, 0.3);

        this.cloches = this.add.image(325, 200, "cloches");
        this.cloches.setScale(0.3, 0.3);

        this.tableau = this.add.image(790, 150, 'tableau');
        this.tableau.setScale(0.25, 0.25);

        this.cheminee = this.add.image(800, 395, 'cheminee');
        this.cheminee.setScale(0.1, 0.1);

        this.fenetre = this.add.image(1200, 225, 'fenetre');
        this.fenetre.setScale(0.25, 0.25);

        this.canape = this.add.image(1200, 443, 'canape');
        this.canape.setScale(0.35, 0.25);

        this.porteVitree = this.add.image(1550, 368, "porteVitree");
        this.porteVitree.setScale(0.1, 0.1);

        this.tableauSnowMen = this.add.image(1550, 125, "tableauSnowMen");
        this.tableauSnowMen.setScale(0.3, 0.3);

        this.escaliers = this.add.image(1970, 201, "escaliers");
        this.escaliers.setScale(0.8, 1.2);

        this.sucre = this.add.image(1850, 200, "sucre");
        this.sucre.setScale(0.1, 0.1);

        this.chaussette = this.add.image(1780, 300, "chaussette");
        this.chaussette.setScale(0.15, 0.15);

        this.player = this.physics.add.sprite(posXHome, posYHome, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.7, 0.7);
        this.player.body.setGravityY(300)
        this.physics.add.collider(this.player, this.ground);

        this.sapinNoel = this.add.image(500, 310, 'sapinNoel');
        this.sapinNoel.setScale(0.4, 0.4);

        this.murGauche = this.add.image(50, 237, "tronc");
        this.murGauche.setScale(0.2, 0.6);

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

        this.textSortie = this.add.text(dataInteractions.arrayScenes[2][0][1][0], dataInteractions.arrayScenes[2][0][1][1], dataInteractions.arrayScenes[2][0][1][2], {
            fill: "white"
        });
        this.textSortie.visible = false;

        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 2, game.config.height);
        this.myCam.startFollow(this.player);

        this.scene.launch('Gui');
    }


    update() {
        this.movePlayer();
        this.changeScene();
        this.checkInZoneInteraction();
        this.scrollCam();
    }

    movePlayer() {
        if (this.cursors.left.isDown && this.player.x > 100) {
            this.player.setVelocityX(-400);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown && this.player.x < game.config.width * 2) {
            this.player.setVelocityX(400);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }


    changeScene() {

        if (this.player.x < dataInteractions.arrayScenes[2][0][0][1] && this.player.y > 423) {
            this.textSortie.visible = true;
            this.boolInZoneInteraction1 = true;

            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {

                posXHome = this.player.x;
                posYHome = this.player.y;
                this.scene.start("Travel");

            }
        } else {
            this.textSortie.visible = false;
            this.boolInZoneInteraction1 = false;

        }
    }

    checkInZoneInteraction() {
        if (this.boolInZoneInteraction1 == true) {
            this.gui.interactBtn.visible = true;
        } else {
            this.gui.interactBtn.visible = false;

        }
    }

    scrollCam() {
        this.ground.tilePositionX = this.myCam.scrollX * 0.0625;
    }
}