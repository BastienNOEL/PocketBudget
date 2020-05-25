//cette scene fait le lien entre le magasin et le pere noel


class TravelScene extends Phaser.Scene {
    constructor() {
        super("Travel");

    }

    create() {
        var bg = this.add.image(500, 250, 'BG');
        bg.setScale(0.6, 0.6);

        var platforms = this.physics.add.staticGroup({
            key: 'ground',
            repeat: 11,
            setXY: {
                x: 60,
                y: 540,
                stepX: 127
            }
        });

        this.player = this.physics.add.sprite(500, 300, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.5, 0.5);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);

        this.igloo1 = this.physics.add.sprite(870, 427, 'igloo1');
        this.igloo1.setScale(0.5, 0.5);
        this.physics.add.collider(this.igloo1, platforms);
        this.physics.add.collider(this.igloo1, this.player);
        this.igloo1.setCollideWorldBounds(true);

        this.igloo2 = this.physics.add.sprite(130, 427, 'igloo2');
        this.igloo2.setScale(0.5, 0.5);
        this.physics.add.collider(this.igloo2, platforms);
        this.physics.add.collider(this.igloo2, this.player);
        this.igloo2.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update() {

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-300);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(300);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

}

console.log('%c%s', 'color: #07a71d', "Travel.js");