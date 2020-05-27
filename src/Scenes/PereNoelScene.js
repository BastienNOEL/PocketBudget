class PereNoelScene extends Phaser.Scene {
    constructor() {
        super("PereNoel");
    }


    create() {
        var i;
        var j= 0;
        for(i=0;i<3;i++){
           var murs = this.physics.add.staticGroup({
                key: 'murBois',
                repeat: 3,
                setXY: {
                    x: 150,
                    y: 105 + j,
                    stepX: 300
                }              
            });
            j=j+195;          
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

        this.cheminee = this.add.image(500,425,'cheminee');
        this.cheminee.setScale(0.1,0.1);

        this.sapinNoel = this.add.image(200,315,'sapinNoel');
        this.sapinNoel.setScale(0.4,0.4);

        this.santa = this.physics.add.sprite(900,407,'santa');
        this.santa.setScale(0.15,0.15);
        this.physics.add.collider(this.santa, platforms);
        this.santa.setCollideWorldBounds(true);


        this.player = this.physics.add.sprite(100, 502, 'player');
        this.player.setBounce(0.2);
        this.player.setScale(0.8, 0.8);
        this.player.body.setGravityY(300)
        this.player.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, platforms);
        this.physics.add.collider(this.player, this.santa);

        this.container = this.add.container(500,100);

        this.dialogueBox = this.add.image(0,0,'dialogueBox');
        this.dialogueBox.setScale(0.8,0.3);

        this.texteDialogueBox = this.add.text(0,0, "hello world", {fill:"black"});
        this.texteDialogueBox.font = "Arial";
        this.texteDialogueBox.setFontSize(30);
        this.texteDialogueBox.setOrigin(0.5, 0.5);

        this.container.add(this.dialogueBox);
        this.container.add(this.texteDialogueBox);

        this.container.visible = false;
        
        this.cursors = this.input.keyboard.createCursorKeys();

        this.textSortie = this.add.text(25, 325, "Appuyez sur ESPACE", {fill:"white"});
        this.textSortie.visible = false;
        this.textTalkSanta = this.add.text(600, 325, "Appuyez sur ESPACE", {fill:"white"});
        this.textTalkSanta.visible = false;
        this.clavSpace = this.input.keyboard.addKey('SPACE');

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
        
        if (this.player.x < 300  && this.player.y > 423) {
            this.textSortie.visible = true;

            if (this.clavSpace.isDown) {
                this.scene.start("Travel");
            }
        } else {
            this.textSortie.visible = false;
        }
    }

    talkSanta(){

        
        if (this.player.x > 600  && this.player.y > 423) {
            this.textTalkSanta.visible = true;

            if (this.clavSpace.isDown) {
                
                this.container.visible = true;
               
            } else{
                this.container.visible = false;
            }
           
        } else {
            this.textTalkSanta.visible = false;

        }

    }
}