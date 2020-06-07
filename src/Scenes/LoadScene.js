//cette scene servira a précharger des éléments

class LoadScene extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    preload() {

        /*
                this.load.on('progress', function (value) {
                    console.log(value);
                });

                this.load.on('fileprogress', function (file) {
                    //console.log(file.src);
                    assetText.setText('Loading asset: ' + file.key);
                });

                this.load.on('complete', function () {
                    console.log('complete');
                });
        */
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(340, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Chargement...',
            style: {
                font: '20px Arial',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);


        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px Arial',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px Arial',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xFF0000, 1);
            progressBar.fillRect(350, 280, 300 * value, 30);
            percentText.setText(parseInt(value * 100) + '%');

        });


        ////
        this.load.image("buttonPlay", "assets/img/Buttons/boutonJouer.png");

        this.load.image('BG1-1', 'assets/img/Background/bg1/Sky.png');
        this.load.image('BG1-2', 'assets/img/Background/bg1/background.png');
        this.load.image('BG1-3', 'assets/img/Background/bg1/Middle.png');
        this.load.image('BG1-4', 'assets/img/Background/bg1/Foreground.png');
        this.load.image('BG1-Snow', 'assets/img/Background/bg1/Snow.png');

        this.load.image('BG2-1', 'assets/img/Background/bg2/Sky.png');
        this.load.image('BG2-2', 'assets/img/Background/bg2/Mountains.png');
        this.load.image('BG2-3', 'assets/img/Background/bg2/Middle.png');
        this.load.image('BG2-4', 'assets/img/Background/bg2/Foreground.png');
        this.load.image('BG2-4', 'assets/img/Background/bg2/Foreground.png');
        this.load.image('BG2-5', 'assets/img/Background/bg2/Ground_01.png');
        this.load.image('BG2-6', 'assets/img/Background/bg2/Ground_02.png');

        this.load.image('BG2-Snow', 'assets/img/Background/bg2/Snow.png');

        this.load.image('ground', 'assets/img/Sol/solNeige.png');
        this.load.spritesheet('player',
            'assets/img/Object/snowManSheet.png', {
                frameWidth: 195,
                frameHeight: 210
            }
        );
        this.load.image('igloo1', 'assets/img/Object/Igloo1.png');
        this.load.image('maison', 'assets/img/Object/maison.png');
        this.load.image('panneau', 'assets/img/Object/panneau.png');
        this.load.image('panneauEntree', 'assets/img/Object/panneauEntree2.png');
        this.load.image('lutinMarchand', 'assets/img/Object/lutinMarchand.png');
        this.load.image('lutinMarchand2', 'assets/img/Object/lutinMarchand2.png');


        this.load.image('murBois', 'assets/img/Object/woodenWall.png');
        this.load.image('solBois', 'assets/img/Object/solEnBois.png');
        this.load.image('cheminee', 'assets/img/Object/cheminee.png');
        this.load.image('sapinNoel', 'assets/img/Object/sapinDeNoel.png');
        this.load.image('santa', 'assets/img/Object/pereNoel.png');

        this.load.image('window', 'assets/img/Gui/Window.png');
        this.load.image('starLvl', 'assets/img/Gui/Star.png');
        this.load.image('starCoin', 'assets/img/Gui/starCoin.png');


        this.load.image('recBleu', 'assets/img/ZonesCouleur/rectangleBleu.png');
        this.load.image('recBleuMarine', 'assets/img/ZonesCouleur/rectangleBleuMarine.png');
        this.load.image('recRouge', 'assets/img/ZonesCouleur/rectangleRouge.png');
        this.load.image('recVert', 'assets/img/ZonesCouleur/rectangleVert.png');
        this.load.image('recJaune', 'assets/img/ZonesCouleur/rectangleJaune.png');

        this.load.image('billet5', 'assets/img/argent/billet5.png');
        this.load.image('billet10', 'assets/img/argent/billet10.png');
        this.load.image('billet20', 'assets/img/argent/billet20.png');
        this.load.image('billet50', 'assets/img/argent/billet50.png');
        this.load.image('billet100', 'assets/img/argent/billet100.jpg');
        this.load.image('piece1', 'assets/img/argent/1euro.png');
        this.load.image('piece2', 'assets/img/argent/2euros.png');


        this.load.image('flecheGauche', 'assets/img/Buttons/Backward.png');
        this.load.image('flecheDroite', 'assets/img/Buttons/Forward.png');
        this.load.image('valider', 'assets/img/Buttons/btnOk.png');
        this.load.image('cancelArrow', 'assets/img/Buttons/cancelArrow.png');
        this.load.image('resetArrow', 'assets/img/Buttons/resetArrow.png');
        this.load.image('goLeft', 'assets/img/Buttons/goLeft.png');
        this.load.image('goRight', 'assets/img/Buttons/goRight.png');
        this.load.image('interactBtn', 'assets/img/Buttons/playBtn.png');


    }

    create() {
        this.scene.start("Title");
    }
}