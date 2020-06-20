//cette scene represente la salle a manger de la maison du joueur

class DinnerRoom extends Phaser.Scene {
    constructor() {
        super("DinnerRoom");
    }

    create() {

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


        this.murGaucheBack = this.add.image(145, 238, "tronc");
        this.murGaucheBack.setScale(0.2, 0.64);

        this.murDroiteBack = this.add.image(910, 238, "tronc");
        this.murDroiteBack.setScale(0.2, 0.64);

        this.porteVitree = this.add.image(225, 401, "porteVitree");
        this.porteVitree.setScale(0.09, 0.09);

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

        this.buchePlafond = this.add.image(500, 9, "tronc");
        this.buchePlafond.setScale(0.2, 1.2);
        this.buchePlafond.setRotation(-1.57);

        this.murDroiteFront = this.add.image(1000, 237, "tronc");
        this.murDroiteFront.setScale(0.2, 0.9);

        this.murGaucheFront = this.add.image(50, 237, "tronc");
        this.murGaucheFront.setScale(0.2, 0.9);



        this.cursors = this.input.keyboard.createCursorKeys();

        this.textSortie = this.add.text(dataInteractions.arrayScenes[4][0][1][0], dataInteractions.arrayScenes[4][0][1][1], dataInteractions.arrayScenes[4][0][1][2], {
            fill: "white"
        });
        this.textSortie.visible = false;

        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.scene.launch('Gui');

    }

    update() {
        this.movePlayer();
        this.changeScene();
        this.checkInZoneInteraction();


    }

    /* gère les deplacements du joueur */
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


    /* permet de changer de pièce */
    changeScene() {

        if (this.player.x > dataInteractions.arrayScenes[4][0][0][0] && this.player.x < dataInteractions.arrayScenes[4][0][0][1] && this.player.y > 423) {
            this.textSortie.visible = true;
            this.boolInZoneInteraction1 = true;


            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {
                posXpr = this.player.x;
                posYpr = this.player.y;
                this.scene.start("Home");
            }
        } else {
            this.textSortie.visible = false;
            this.boolInZoneInteraction1 = false;

        }
    }



    /*verifi la zone d'interaction et affiche le bouton d'interaction en consequence */
    checkInZoneInteraction() {
        if (this.boolInZoneInteraction1 == true) {
            this.gui.interactBtn.visible = true;
        } else {
            this.gui.interactBtn.visible = false;

        }
    }

    /*rend visibles tous les objets acheté par le joueur */
    makeVisible() {

        if (localStorage.getItem('Plante Grimpante') == 'VENDU') {
            this.plante2 = this.add.image(875, 225, "Plante Grimpante");
            this.plante2.setScale(0.15, 0.3);

            this.plante3 = this.add.image(110, 425, "Plante Grimpante");
            this.plante3.setScale(0.15, 0.3);

            this.plante4 = this.add.image(110, 225, "Plante Grimpante");
            this.plante4.setScale(0.15, 0.3);
        }

        this.arrayOfImages = new Array();
        var i = 0;
        for (i; i < dataDeco.arrayRooms[2][0].length; i++) {

            var nameKey = dataDeco.arrayRooms[2][0][i][2];

            if (i == 1) {
                this.sol = this.add.image(500, 575, 'solBois');
                if (localStorage.getItem('Tourne-Disque') == 'VENDU') {
                    this.tableBasse = this.add.image(900, 505, "Table Basse");
                    this.tableBasse.setScale(0.1, 0.15);
                }
            }

            this.objetDeco = this.add.image(dataDeco.arrayRooms[2][0][i][0], dataDeco.arrayRooms[2][0][i][1], dataDeco.arrayRooms[2][0][i][2]);
            this.objetDeco.setScale(dataDeco.arrayRooms[2][0][i][3], dataDeco.arrayRooms[2][0][i][4]);
            this.objetDeco.visible = false;
            this.arrayOfImages[i] = [nameKey, this.objetDeco];

        }

        this.player = this.physics.add.sprite(posXpr, posYpr, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.7, 0.7);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.platforms);

        for (var j = 0; j < dataDeco.arrayRooms[2][1].length; j++) {

            var nameKey = dataDeco.arrayRooms[2][1][j][2];

            this.objetDeco = this.add.image(dataDeco.arrayRooms[2][1][j][0], dataDeco.arrayRooms[2][1][j][1], dataDeco.arrayRooms[2][1][j][2]);
            this.objetDeco.setScale(dataDeco.arrayRooms[2][1][j][3], dataDeco.arrayRooms[2][1][j][4]);
            this.objetDeco.visible = false;
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