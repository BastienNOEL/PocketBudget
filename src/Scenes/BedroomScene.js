//cette scene correspond à la chambre du joueur

class BedroomScene extends Phaser.Scene {
    constructor() {
        super("Bedroom");
    }

    create() {

        console.log('%c%s', 'color: #99614d', "BEDROOM");


        if(localStorage.getItem('Lit') == "VENDU"){
            this.maxXBedroom = 245;
        } else {
            this.maxXBedroom = 1000;

        }

        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;

        this.mur = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "murBois");
        this.mur.setOrigin(0, 0);
        this.mur.setScrollFactor(0);
        this.mur.setScale(0.5, 2.5);

        this.platforms = this.physics.add.staticGroup({
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

        this.makeVisible();

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


    /* gere les deplacements du joueur */
    movePlayer() {

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-500);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown && this.player.x < this.maxXBedroom) {
            this.player.setVelocityX(500);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }

    }

    /* permet de changer de pièce de la maison */
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

    /* affiche le bouton d'interaction si necessaire */
    checkInZoneInteraction() {
        if (this.boolInZoneInteraction1 == true || this.boolInZoneInteraction2) {
            this.gui.interactBtn.visible = true;
        } else {
            this.gui.interactBtn.visible = false;

        }
    }



    /* rend visible tous les objets acheté par le joueur */
    makeVisible() {

        this.arrayOfImages = new Array();
        var i = 0;
        for (i; i < dataDeco.arrayRooms[1][0].length; i++) {

            var nameKey = dataDeco.arrayRooms[1][0][i][2];

            this.objetDeco = this.add.image(dataDeco.arrayRooms[1][0][i][0], dataDeco.arrayRooms[1][0][i][1], dataDeco.arrayRooms[1][0][i][2]);
            this.objetDeco.setScale(dataDeco.arrayRooms[1][0][i][3], dataDeco.arrayRooms[1][0][i][4]);
            this.objetDeco.visible = false;
            this.arrayOfImages[i] = [nameKey, this.objetDeco];

        }

        this.player = this.physics.add.sprite(posXBedroom, posYBedroom, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.7, 0.7);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.platforms);

        
        for (var key in LoadDatas.arrayKey) {

            if (localStorage.getItem(LoadDatas.arrayKey[key]) == "VENDU") {

                for (var n = 0; n < this.arrayOfImages.length; n++) {

                    if (this.arrayOfImages[n][0] == LoadDatas.arrayKey[key]) {
                        this.arrayOfImages[n][1].visible = true;
                    }
                }
            }
        }
    }
}