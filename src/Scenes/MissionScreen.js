class MissionScreen extends Phaser.Scene {
    constructor() {
        super("MissionScreen");
    }

    create(){

        this.container = this.add.container(500,295);
        this.window = this.add.image(0,0,'window');
        this.window.setScale(0.95,0.7);

        this.texteDialogueBox = this.add.text(0,0, mission.paroleSanta, {fill:"black"});
        this.texteDialogueBox.font = "Arial";
        this.texteDialogueBox.setFontSize(30);
        this.texteDialogueBox.setOrigin(0.5, 0.5);

        this.container.add(this.window);
        this.container.add(this.texteDialogueBox);
        this.clavSpace = this.input.keyboard.addKey('SPACE')
    }

    update(){

        if(this.clavSpace.isDown){
            this.scene.start('PereNoel');
        }
    }
}