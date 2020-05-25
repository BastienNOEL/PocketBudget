//cette scene fait le lien entre le magasin et le pere noel

class TravelScene extends Phaser.Scene {
    constructor() {
        super("Travel");
    }

}

console.log('%c%s', 'color: #07a71d', "Travel.js");

const config2 = {
    width: 1000,
    height: 600,
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
}

var game = new Phaser.Game(config2);

function preload() {
    this.load.image('BG', 'assets/img/BG/BG.png');
    this.load.image('ground', 'assets/img/Tiles/2.png');
    this.load.image('player', 'assets/img/Object/SnowMan.png');
    this.load.image('igloo1', 'assets/img/Object/Igloo1.png');
    this.load.image('igloo2', 'assets/img/Object/Igloo2.png');

}

function create() {
    bg = this.add.image(500, 250, 'BG');
    bg.setScale(0.6, 0.6);

    platforms = this.physics.add.staticGroup({
        key: 'ground',
        repeat: 11,
        setXY: {
            x: 60,
            y: 540,
            stepX: 127
        }
    });

    player = this.physics.add.sprite(500, 300, 'player');
    player.setBounce(0.2);
    player.setScale(0.5, 0.5);
    player.body.setGravityY(300)
    player.setCollideWorldBounds(true);
    this.physics.add.collider(player, platforms);

    igloo1 = this.physics.add.sprite(870, 427, 'igloo1');
    igloo1.setScale(0.5, 0.5);
    this.physics.add.collider(igloo1, platforms);
    this.physics.add.collider(igloo1, player);
    igloo1.setCollideWorldBounds(true);

    igloo2 = this.physics.add.sprite(130, 427, 'igloo2');
    igloo2.setScale(0.5, 0.5);
    this.physics.add.collider(igloo2, platforms);
    this.physics.add.collider(igloo2, player);
    igloo2.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-300);

        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(300);

        player.anims.play('right', true);
    } else {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
    }

}