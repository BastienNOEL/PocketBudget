class PereNoelScene extends Phaser.Scene {
    constructor() {
        super("PereNoel");
    }


    create() {

        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;
        this.boolInZoneInteraction2 = false;

        this.mur = this.add.tileSprite(0, 0, game.config.width * 2, game.config.height * 2, "murBois");
        this.mur.setOrigin(0, 0);
        this.mur.setScrollFactor(0);
        this.mur.setScale(0.5, 2.5);

        var platforms = this.physics.add.staticGroup({
            key: 'ground',
            repeat: 11,
            setXY: {
                x: 60,
                y: 650,
                stepX: 127
            }
        });

        var sol = this.add.image(500, 575, 'solBois');

        this.cheminee = this.add.image(500, 425, 'cheminee');
        this.cheminee.setScale(0.1, 0.1);

        this.sapinNoel = this.add.image(200, 315, 'sapinNoel');
        this.sapinNoel.setScale(0.4, 0.4);

        this.santa = this.physics.add.sprite(900, 407, 'santa');
        this.santa.setScale(0.5, 0.5);
        this.physics.add.collider(this.santa, platforms);
        this.santa.setCollideWorldBounds(true);


        this.player = this.physics.add.sprite(posXpn, posYpn, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.8, 0.8);
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

        this.textSortie = this.add.text(dataInteractions.arrayScenes[1][0][1][0], dataInteractions.arrayScenes[1][0][1][1], dataInteractions.arrayScenes[1][0][1][2], {
            fill: "white"
        });
        this.textSortie.visible = false;
        this.textTalkSanta = this.add.text(dataInteractions.arrayScenes[1][1][1][0], dataInteractions.arrayScenes[1][1][1][1], dataInteractions.arrayScenes[1][1][1][2], {
            fill: "white"
        });
        this.textTalkSanta.visible = false;
        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.scene.launch('Gui');

    }

    update() {
        this.movePlayer();
        this.changeScene();
        this.talkSanta();
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

        if (this.player.x < dataInteractions.arrayScenes[1][0][0][1] && this.player.y > 423) {
            this.textSortie.visible = true;
            this.boolInZoneInteraction1 = true;


            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {
                posXpn = this.player.x;
                posYpn = this.player.y;
                this.scene.start("Travel");
            }
        } else {
            this.textSortie.visible = false;
            this.boolInZoneInteraction1 = false;

        }
    }

    talkSanta() {


        if (this.player.x > dataInteractions.arrayScenes[1][1][0][0] && this.player.y > 423) {

            this.boolInZoneInteraction2 = true;
            this.textTalkSanta.visible = true;


            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {

                mission.newMission();
                posXpn = this.player.x;
                posYpn = this.player.y;
                this.scene.start("MissionScreen")
                this.scene.stop('Gui');


            }

        } else {
            this.textTalkSanta.visible = false;
            this.boolInZoneInteraction2 = false;


        }

    }

    checkInZoneInteraction() {
        if (this.boolInZoneInteraction1 == true || this.boolInZoneInteraction2 == true) {
            this.gui.interactBtn.visible = true;
        } else {
            this.gui.interactBtn.visible = false;

        }
    }
}