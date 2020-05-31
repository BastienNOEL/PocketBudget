//cette scene fait le lien entre le magasin et le pere noel

class TravelScene extends Phaser.Scene {
    constructor() {
        super("Travel");

    }

    create() {


        this.bg1 = this.add.tileSprite(0, 0, game.config.width*2, game.config.height*2, "BG1");
        this.bg1.setOrigin(0, 0);
        this.bg1.setScrollFactor(0);
        this.bg1.setScale(0.6,0.6);

        this.bg2 = this.add.tileSprite(0, 0, game.config.width*2, game.config.height*2, "BG2");
        this.bg2.setOrigin(0, 0);
        this.bg2.setScrollFactor(0);
        this.bg2.setScale(0.6,0.6);

        this.bg3 = this.add.tileSprite(0, 0, game.config.width*2, game.config.height*2, "BG3");
        this.bg3.setOrigin(0, 0);
        this.bg3.setScrollFactor(0);
        this.bg3.setScale(0.6,0.6);

        this.bg4 = this.add.tileSprite(0, 0, game.config.width*2, game.config.height*2 , "BG4");
        this.bg4.setOrigin(0, 0);
        this.bg4.setScrollFactor(0);
        this.bg4.setScale(0.63,0.63);


        this.ground = this.add.tileSprite(0, 0, game.config.width * 3, 125, "ground");
        this.ground.setOrigin(0, 0);
        this.ground.setScrollFactor(0);
        this.ground.y = 500;
        this.physics.add.existing(this.ground, true);


        this.zoneLvl = this.add.container(930, 60);

        this.lvStar = this.add.image(0,0,'starLvl');
        this.lvStar.setScale(0.5,0.5);

        this.txtLvl = this.add.text(0,0,sessionStorage.getItem('lvPlayer'),{
            fill : "black",
            font : "40px Arial" 
        })
        this.txtLvl.setOrigin(0.5, 0.5);

        this.zoneLvl.add(this.lvStar);
        this.zoneLvl.add(this.txtLvl);


        this.igloo1 = this.add.image(870, 450, 'igloo1');
        this.igloo1.setScale(0.5, 0.5);

        this.maison = this.add.image(200, 307, 'maison');
        this.maison.setScale(0.3, 0.3);

        this.player = this.physics.add.sprite(posXTravel, posYTravel, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.5, 0.5);
        this.player.body.setGravityY(300)
        this.physics.add.collider(this.player, this.ground);


        this.cursors = this.input.keyboard.createCursorKeys();
        this.clavSpace = this.input.keyboard.addKey('SPACE');

        this.tig1 = this.add.text(800, 348, "Appuyez sur ESPACE", {fill:"black"});
        this.tig1.visible = false;
        this.texteEntrerMaison = this.add.text(150, 327, "Appuyez sur ESPACE", {fill:"black"});
        this.texteEntrerMaison.visible = false;

        this.myCam = this.cameras.main;
        this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

        this.myCam.startFollow(this.player);

    }

    update() {
        this.movePlayer();
        this.changeScene();
        this.moveGui();
        this.scrollBackground();

    }

    movePlayer() {
        if (this.cursors.left.isDown && this.player.x > 0) {
            this.player.setVelocityX(-300);
        } else if (this.cursors.right.isDown && this.player.x < game.config.width * 3) {
            this.player.setVelocityX(300);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }

    moveGui(){

        if(this.player.x >500 && this.player.x < 2500  ){
            this.zoneLvl.x = this.player.x + 430;
        }
    }

    scrollBackground(){
        this.bg1.tilePositionX = this.myCam.scrollX * .2;
        this.bg2.tilePositionX = this.myCam.scrollX * .4;
        this.bg3.tilePositionX = this.myCam.scrollX * .6;
        this.bg4.tilePositionX = this.myCam.scrollX * .8;

        this.ground.tilePositionX = this.myCam.scrollX;
    }

    changeScene() {
        if ((this.player.x > 725 && this.player.x < 845) && this.player.y > 423) {
            this.tig1.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("Boutique");
                posYTravel = this.player.y;
                posXTravel = this.player.x;
            }
        } else {
            this.tig1.visible = false;
        }

        if ((this.player.x < 350 && this.player.x > 200) && this.player.y > 423) {
            this.texteEntrerMaison.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("PereNoel");
                posYTravel = this.player.y;
                posXTravel = this.player.x;
            }
        } else {
            this.texteEntrerMaison.visible = false;
        }
    }


}