//cette scene servira a précharger des éléments

class LoadScene extends Phaser.Scene {
    constructor() {
        super("Load");
    }


    preload() {

        // ce bloque de code en commentaire permet de connaitre en temps réel l'asset qui est en train de se charger //
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

        //barre de chargement
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


        //// Chemins vers tous les assets du jeu ////

        //boutons + GUI + Menus
        this.load.image("buttonPlay", "assets/img/Buttons/boutonJouer.png");
        this.load.image("buttonSave", "assets/img/Buttons/save.png");
        this.load.image("buttonImportSave", "assets/img/Buttons/importSave.png");
        this.load.image("buttonPause", "assets/img/Buttons/pause.png");
        this.load.image("buttonReplay", "assets/img/Buttons/replay.png");
        this.load.image("redCross", "assets/img/Buttons/redCross.png");
        this.load.image("buttonHome", "assets/img/Buttons/btnHome.png");
        
        this.load.image('window', 'assets/img/Gui/Window.png');
        this.load.image('starLvl', 'assets/img/Gui/Star.png');
        this.load.image('starCoin', 'assets/img/Gui/starCoin.png');
        this.load.image('LutinFace', 'assets/img/Gui/LutinFace.png');
        this.load.image('LutinMarchandFace', 'assets/img/Gui/FaceLutinMarchand.png');

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

        //backgrounds
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

        //sol
        this.load.image('ground', 'assets/img/Sol/solNeige.png');
        this.load.spritesheet('player',
            'assets/img/Object/snowManSheet.png', {
                frameWidth: 195,
                frameHeight: 210
            }
        );
        
        //Travel
        this.load.image('igloo1', 'assets/img/Object/Igloo1.png');
        this.load.image('maison', 'assets/img/Object/maison.png');
        this.load.image('panneau', 'assets/img/Object/panneau.png');
        this.load.image('panneauEntree', 'assets/img/Object/panneauEntree2.png');
        this.load.image('lutinMarchand', 'assets/img/Object/lutinMarchand.png');
        this.load.image('lutinMarchand2', 'assets/img/Object/lutinMarchand2.png');
        this.load.image('bulleDialogueGauche', 'assets/img/Object/bulleDialogueGauche.png');

        //Interieurs (santa + maison)
        this.load.image('santa', 'assets/img/Object/pereNoel.png');
        this.load.image('murBois', 'assets/img/Object/woodenWall.png');
        this.load.image('solBois', 'assets/img/Object/solEnBois.png');
        this.load.image('planche', 'assets/img/Sol/planche.png');
        this.load.image('tronc', 'assets/img/Object/troncArbre.png');
        this.load.image('porteBlanche', 'assets/img/Object/doorWhite.png');
        this.load.image('porteVitree', 'assets/img/Object/door.png');
        this.load.image('tableauSantaNight', 'assets/img/Object/tableauSanta.png');
        this.load.image('escaliers', 'assets/img/Object/escaliers.png');

        //Decorations //

        //salon
        this.load.image('Cheminée', 'assets/img/Object/cheminee.png');
        this.load.image('Sapin de noël', 'assets/img/Object/sapinDeNoel.png');
        this.load.image('Couronne de Noël', 'assets/img/Object/couronneNoel.png');
        this.load.image('Fenêtre', 'assets/img/Object/fenetreVueVillage.png');
        this.load.image('Canapé', 'assets/img/Object/canape.png');
        this.load.image('Tableau du Village', 'assets/img/Object/tableau.png');
        this.load.image('Tableau de famille', 'assets/img/Object/snowManTableau.png');
        this.load.image('Sucre d\'orge', 'assets/img/Object/sucreOrge.png');
        this.load.image('Chaussette de noël', 'assets/img/Object/chaussetteNoel.png');
        this.load.image('Cloches', 'assets/img/Object/clochesMurales.png');
       
        //chambre
        this.load.image('Fenêtre Ronde', 'assets/img/Object/circleWindow.png');   
        this.load.image('Lit', 'assets/img/Object/Bed.png');
        this.load.image('Livres', 'assets/img/Object/livres.png');
        this.load.image('Tapis de chambre', 'assets/img/Object/tapisRouge.png');
        this.load.image('Contrebasse', 'assets/img/Object/contrebasse.png');
        this.load.image('Chaise à bascule', 'assets/img/Object/chaiseBascule.png');
        this.load.image('Plante en pot', 'assets/img/Object/plante.png');   
        this.load.image('Poster de Noël', 'assets/img/Object/posterSantaAndSnowman.jpg');   
        this.load.image('Lampe Murale', 'assets/img/Object/lampeMurale.png');   

        //salle à manger
        this.load.image('Table', 'assets/img/Object/table.png');   
        this.load.image('Lustre', 'assets/img/Object/lustre.png');   
        this.load.image('Tapis Blanc', 'assets/img/Object/tapisBlanc.png');   
        this.load.image('Bibliothèque', 'assets/img/Object/bibliotheque.png');   
        this.load.image('Tourne-Disque', 'assets/img/Object/tourneDisque.png');   
        this.load.image('Table Basse', 'assets/img/Object/tableBasse.png');   
        this.load.image('Plante Grimpante', 'assets/img/Object/planteGrimpante.png');   
        this.load.image('Vieille Horloge', 'assets/img/Object/oldClock.png');   
        this.load.image('Cadre Aurore Boréale', 'assets/img/Object/tableauBoreal.png');   
        this.load.image('Cadre Lac Enneigé', 'assets/img/Object/tableauLac.png');   

    }

    create() {
        this.scene.start("Title");
    }
}