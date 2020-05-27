//cette scene fait le lien entre le magasin et le pere noel

class TravelScene extends Phaser.Scene {
    constructor() {
        super("Travel");

    }

    create() {
        console.log('%c%s', 'color: #8400ff', "Travel scene");

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

        this.igloo1 = this.physics.add.sprite(870, 427, 'igloo1');
        this.igloo1.setScale(0.5, 0.5);
        this.physics.add.collider(this.igloo1, platforms);
        this.physics.add.collider(this.igloo1, this.player);
        this.igloo1.setCollideWorldBounds(true);

        this.maison = this.physics.add.sprite(130, 285, 'maison');
        this.maison.setScale(0.3, 0.3);
        this.physics.add.collider(this.maison, platforms);
        this.physics.add.collider(this.maison, this.player);
        this.maison.setCollideWorldBounds(true);

        this.player = this.physics.add.sprite(500, 423.5, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.5, 0.5);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);


        this.cursors = this.input.keyboard.createCursorKeys();
        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.tig1 = this.add.text(800, 325, "Appuyez sur ESPACE", {fill:"black"});
        this.tig1.visible = false;
        this.texteEntrerMaison = this.add.text(150, 300, "Appuyez sur ESPACE", {fill:"black"});
        this.texteEntrerMaison.visible = false;

    }

    update() {
        this.movePlayer();
        this.changeScene();



    }

    movePlayer() {
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


    changeScene() {
        if ((this.player.x > 725 && this.player.x < 845) && this.player.y > 423) {
            this.tig1.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("Boutique");
            }
        } else {
            this.tig1.visible = false;
        }

        if ((this.player.x < 350 && this.player.x > 200) && this.player.y > 423) {
            this.texteEntrerMaison.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("PereNoel");
            }
        } else {
            this.texteEntrerMaison.visible = false;
        }
    }


}