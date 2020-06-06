class PereNoelScene extends Phaser.Scene {
    constructor() {
        super("PereNoel");
    }


    create() {

        this.gui = this.scene.get('Gui');

        var i;
        var j = 0;
        for (i = 0; i < 3; i++) {
            var murs = this.physics.add.staticGroup({
                key: 'murBois',
                repeat: 3,
                setXY: {
                    x: 150,
                    y: 105 + j,
                    stepX: 300
                }
            });
            j = j + 195;
        }

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


    }

    movePlayer() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-500);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(500);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }


    }


    changeScene() {

        if (this.player.x < dataInteractions.arrayScenes[1][0][0][1] && this.player.y > 423 ) {
            this.textSortie.visible = true;

            if (this.clavSpace.isDown || this.gui.boolInputInterctif == true) {
                posXpn = this.player.x;
                posYpn = this.player.y;
                this.scene.start("Travel");
            }
        } else {
            this.textSortie.visible = false;
        }
    }

    talkSanta() {


        if (this.player.x > dataInteractions.arrayScenes[1][1][0][0] && this.player.y > 423) {

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

        }

    }
}