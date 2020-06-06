class HomeScene extends Phaser.Scene {
    constructor() {
        super("Home");

    }
    create() {

        this.gui = this.scene.get('Gui');
        this.boolInZoneInteraction1 = false;

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
            repeat: 6,
            setXY: {
                x: 60,
                y: 650,
                stepX: 127
            }
        });

        var sol = this.add.image(500, 575, 'solBois');

        this.player = this.physics.add.sprite(posXHome, posYHome, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.8, 0.8);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.player, this.santa);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.textSortie = this.add.text(dataInteractions.arrayScenes[2][0][1][0], dataInteractions.arrayScenes[2][0][1][1], dataInteractions.arrayScenes[2][0][1][2], {
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

    checkInZoneInteraction(){
        if(this.boolInZoneInteraction1 == true ){
            this.gui.interactBtn.visible = true;
        } else{
            this.gui.interactBtn.visible = false;

        }
    }
}