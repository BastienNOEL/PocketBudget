class PereNoelScene extends Phaser.Scene {
    constructor() {
        super("PereNoel");
    }


    create() {
        console.log('%c%s', 'color: #8400ff', "Pere Noel");
        var mursHaut = this.physics.add.staticGroup({
            key: 'murBois',
            repeat: 3,
            setXY: {
                x: 150,
                y: 105,
                stepX: 300

            }
        });
        var mursMiddle = this.physics.add.staticGroup({
            key: 'murBois',
            repeat: 3,
            setXY: {
                x: 150,
                y: 300,
                stepX: 300

            }
        });
        var mursBas = this.physics.add.staticGroup({
            key: 'murBois',
            repeat: 3,
            setXY: {
                x: 150,
                y: 495,
                stepX: 300

            }
        });

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

        this.cheminee = this.add.image(500,425,'cheminee');
        this.cheminee.setScale(0.1,0.1);

        this.sapinNoel = this.add.image(200,315,'sapinNoel');
        this.sapinNoel.setScale(0.4,0.4);

        this.santa = this.physics.add.sprite(900,407,'santa');
        this.santa.setScale(0.15,0.15);
        this.physics.add.collider(this.santa, platforms);
        this.santa.setCollideWorldBounds(true);


        this.player = this.physics.add.sprite(500, 300, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.8, 0.8);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.player, this.santa);
        


        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {
        this.movePlayer();
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
}