//cette scene servira a précharger des éléments

class LoadScene extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    preload() {
    
        
        this.load.image('bgTitre', 'assets/img/BG/bgTitre.png');
        this.load.image("buttonPlay", "assets/img/Buttons/boutonJouer.png");

        this.load.image('BG1', 'assets/img/BG/Sky.png');
        this.load.image('BG2', 'assets/img/BG/background.png');
        this.load.image('BG3', 'assets/img/BG/Middle.png');
        this.load.image('BG4', 'assets/img/BG/Foreground.png');


        this.load.image('ground', 'assets/img/Tiles/2.png');
        this.load.image('player', 'assets/img/Object/SnowMan.png');
        this.load.image('igloo1', 'assets/img/Object/Igloo1.png');
        this.load.image('maison', 'assets/img/Object/maison.png');

        this.load.image('murBois', 'assets/img/Object/woodenWall.png');
        this.load.image('solBois', 'assets/img/Object/solEnBois.png');
        this.load.image('cheminee', 'assets/img/Object/cheminee.png');
        this.load.image('sapinNoel', 'assets/img/Object/sapinDeNoel.png');
        this.load.image('santa', 'assets/img/Object/Santa.png');

        this.load.image('dialogueBox', 'assets/img/Object/DialogueBox.png');
        this.load.image('window', 'assets/img/Gui/Window.png');
        this.load.image('starLvl', 'assets/img/Gui/Star.png');


        this.load.image('recBleu' , 'assets/img/Object/rectangleBleu.png');
        this.load.image('recRouge' , 'assets/img/Object/rectangleRouge.png');
        this.load.image('recVert' , 'assets/img/Object/rectangleVert.png');
        this.load.image('recJaune' , 'assets/img/Object/rectangleJaune.png');

        this.load.image('billet5' , 'assets/img/argent/billet5.png');
        this.load.image('billet10' , 'assets/img/argent/billet10.png');
        this.load.image('billet20' , 'assets/img/argent/billet20.png');
        this.load.image('billet50' , 'assets/img/argent/billet50.png');
        this.load.image('billet100' , 'assets/img/argent/billet100.jpg');

        this.load.image('flecheGauche', 'assets/img/Buttons/Backward.png');
        this.load.image('valider', 'assets/img/Buttons/btnOk.png');
        this.load.image('cancelArrow', 'assets/img/Buttons/cancelArrow.png');
        this.load.image('resetArrow', 'assets/img/Buttons/resetArrow.png');

        sessionStorage.setItem('B100', 0);
        sessionStorage.setItem('B50', 0);
        sessionStorage.setItem('B20', 0);
        sessionStorage.setItem('B10', 0);
        sessionStorage.setItem('B5', 0);

    }

    create(){
        this.add.text(20,20,"Loading Game...");

        console.log('%c%s', 'color: #8400ff', "Loading game");
        this.scene.start("Title");

    }
}