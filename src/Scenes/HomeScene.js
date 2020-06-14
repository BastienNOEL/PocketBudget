class HomeScene extends Phaser.Scene {
    constructor() {
        super("Home");

    }
    create() {


        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;
        this.boolInZoneInteraction2 = false;
        this.boolInZoneInteraction3 = false;

        //arriere plan
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

        //deco deja en place
        this.porteBlanche = this.add.image(150, 368, "porteBlanche");
        this.porteBlanche.setScale(0.1, 0.1);

        this.porteVitree = this.add.image(1550, 368, "porteVitree");
        this.porteVitree.setScale(0.1, 0.1);

        this.escaliers = this.add.image(1970, 201, "escaliers");
        this.escaliers.setScale(0.8, 1.2);

        this.makeVisible();

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

        this.textEtage = this.add.text(dataInteractions.arrayScenes[2][1][1][0], dataInteractions.arrayScenes[2][1][1][1], dataInteractions.arrayScenes[2][1][1][2], {
            fill: "white"
        });
        this.textEtage.visible = false;

        this.textPorteVitree = this.add.text(dataInteractions.arrayScenes[2][2][1][0], dataInteractions.arrayScenes[2][2][1][1], dataInteractions.arrayScenes[2][2][1][2], {
            fill: "white"
        });
        this.textPorteVitree.visible = false;
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

        // etage
        if ((this.player.x > dataInteractions.arrayScenes[2][1][0][0] && this.player.x < dataInteractions.arrayScenes[2][1][0][1]) && this.player.y > 423) {
            this.textEtage.visible = true;
            this.boolInZoneInteraction2 = true;

            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {

                posXHome = this.player.x;
                posYHome = this.player.y;
                this.scene.start("Bedroom");

            }
        } else {
            this.textEtage.visible = false;
            this.boolInZoneInteraction2 = false;

        }

         // DinnerRoom
         if ((this.player.x > dataInteractions.arrayScenes[2][2][0][0] && this.player.x < dataInteractions.arrayScenes[2][2][0][1]) && this.player.y > 423) {
            this.textPorteVitree.visible = true;
            this.boolInZoneInteraction3 = true;

            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {

                posXHome = this.player.x;
                posYHome = this.player.y;
                this.scene.start("DinnerRoom");

            }
        } else {
            this.textPorteVitree.visible = false;
            this.boolInZoneInteraction3 = false;

        }
    }

    checkInZoneInteraction() {
        if (this.boolInZoneInteraction1 == true || this.boolInZoneInteraction2 == true || this.boolInZoneInteraction3 == true) {
            this.gui.interactBtn.visible = true;
        } else {
            this.gui.interactBtn.visible = false;

        }

    }

    scrollCam() {
        this.ground.tilePositionX = this.myCam.scrollX * 0.0625;
    }

    makeVisible() {

        this.arrayOfImages = new Array();
        var i = 0;
        for (i; i < dataDeco.arrayRooms[0][0].length; i++) {

            var nameKey = dataDeco.arrayRooms[0][0][i][2];

            this.objetDeco = this.add.image(dataDeco.arrayRooms[0][0][i][0], dataDeco.arrayRooms[0][0][i][1], dataDeco.arrayRooms[0][0][i][2]);
            this.objetDeco.setScale(dataDeco.arrayRooms[0][0][i][3], dataDeco.arrayRooms[0][0][i][4]);
            this.objetDeco.visible =false;
            this.arrayOfImages[i] = [nameKey, this.objetDeco];

        }

        this.player = this.physics.add.sprite(posXHome, posYHome, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.7, 0.7);
        this.player.body.setGravityY(300)
        this.physics.add.collider(this.player, this.ground);

        for (var j = 0; j < dataDeco.arrayRooms[0][1].length; j++) {

            var nameKey = dataDeco.arrayRooms[0][1][j][2];

            this.objetDeco = this.add.image(dataDeco.arrayRooms[0][1][j][0], dataDeco.arrayRooms[0][1][j][1], dataDeco.arrayRooms[0][1][j][2]);
            this.objetDeco.setScale(dataDeco.arrayRooms[0][1][j][3], dataDeco.arrayRooms[0][1][j][4]);
            this.objetDeco.visible =false;
            this.arrayOfImages[i + j] = [nameKey, this.objetDeco];

        }

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