class HomeScene extends Phaser.Scene {
    constructor() {
        super("Home");

    }
    create() {

        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;

        this.mur = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "murBois");
        this.mur.setOrigin(0, 0);
        this.mur.setScrollFactor(0);
        this.mur.setScale(0.5, 2.5);

        this.ground = this.add.tileSprite(0, 0, game.config.width * 2, 100, "planche");
        this.ground.setOrigin(0, -0.5);
        this.ground.setScrollFactor(0);
        this.ground.y = 450;
        this.physics.add.existing(this.ground, true);
        this.ground.setScale(16, 1);

        this.player = this.physics.add.sprite(posXHome, posYHome, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.7, 0.7);
        this.player.body.setGravityY(300)
        this.physics.add.collider(this.player, this.ground);

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
        if (this.cursors.left.isDown && this.player.x > 0) {
            this.player.setVelocityX(-500);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown && this.player.x < game.config.width * 2) {
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
        this.mur.tilePositionX = this.myCam.scrollX;
    }
}