class BoutiqueScene extends Phaser.Scene {
    constructor() {
        super("Boutique");
    }


    create() {

        this.pileAction = new Array();

        this.nbPieceComptoir1 = 0;
        this.nbPieceComptoir2 = 0;
        this.nbBilletComptoir5 = 0;
        this.nbBilletComptoir10 = 0;
        this.nbBilletComptoir20 = 0;
        this.nbBilletComptoir50 = 0;
        this.nbBilletComptoir100 = 0;


        this.nbPieceBourse1 = localStorage.getItem('P1');
        this.nbPieceBourse2 = localStorage.getItem('P2');
        this.nbBilletBourse5 = localStorage.getItem('B5');
        this.nbBilletBourse10 = localStorage.getItem('B10');
        this.nbBilletBourse20 = localStorage.getItem('B20');
        this.nbBilletBourse50 = localStorage.getItem('B50');
        this.nbBilletBourse100 = localStorage.getItem('B100');



        this.prixMissionAffiche = localStorage.getItem('PrixMissionAffiche');
        this.prixMissionAttendu = localStorage.getItem('PrixMissionAttendu');


        this.valeurDepose = 0;

        this.maBourse = this.add.container(500, 453);
        this.comptoir = this.add.container(500, 230);
        this.zonePrix = this.add.container(101, 81);
        this.zoneConsigne = this.add.container(597, 77);

        this.rectVert = this.add.image(0, 0, 'recVert');
        this.rectRouge = this.add.image(0, 0, 'recRouge');
        this.rectBleu = this.add.image(0, 0, 'recBleu');
        this.rectJaune = this.add.image(0, 0, 'recJaune');

        this.lutin = this.add.image(950, 103, 'LutinFace');
        this.lutin.setScale(0.15,0.15);


        this.boutonRetour = new Button({
            'scene': this,
            'key': 'flecheGauche',
            'x': -450,
            'y': 80
        });
        this.boutonRetour.setScale(0.5, 0.5);
        this.boutonRetour.on('pointerdown', this.backTravel, this);

        this.txtBoutique = this.add.text(-390, -70, localStorage.getItem('BoutiqueTexte'), {
            fill: "black",
            font: '25px Arial',
        });
        this.txtBoutiqueErreur = "\nTu t'es trompé, recommence. Tentative numéro " + localStorage.getItem('nbTentatives');

        if (localStorage.getItem('nbTentatives') > 1 && localStorage.getItem('RetourMission') == "false") {
            this.txtBoutique.setText(localStorage.getItem('BoutiqueTexte') + this.txtBoutiqueErreur);
        } else if (localStorage.getItem('RetourMission') == "true") {
            this.txtBoutique.setText("Va voir le Père Noël pour avoir de l'argent.");
        }

        this.maBourse.add(this.rectBleu);
        this.maBourse.add(this.boutonRetour);
        this.comptoir.add(this.rectJaune);
        this.zonePrix.add(this.rectRouge);
        this.zoneConsigne.add(this.rectVert);
        this.zoneConsigne.add(this.txtBoutique);


        this.rectBleu.setScale(1.35, 0.7);
        this.rectJaune.setScale(2.4, 0.6);
        this.rectRouge.setScale(0.15, 0.45);
        this.rectVert.setScale(0.62, 0.27);


        if (localStorage.getItem('MissionEnCours') == "true") {


            this.btnValider = new Button({
                'scene': this,
                'key': 'valider',
                'x': 425,
                'y': 100
            });
            this.btnValider.setScale(0.5, 0.5);
            this.btnValider.on('pointerdown', this.testValidite, this);

            this.btnCancel = new Button({
                'scene': this,
                'key': 'cancelArrow',
                'x': 325,
                'y': 95
            });
            this.btnCancel.setScale(0.15, 0.15);
            this.btnCancel.on('pointerdown', this.cancelAction, this);

            this.btnReset = new Button({
                'scene': this,
                'key': 'resetArrow',
                'x': 225,
                'y': 95
            });
            this.btnReset.setScale(0.08, 0.08);
            this.btnReset.on('pointerdown', function () {
                this.scene.restart();
            }, this);

            this.txtPrix = this.add.text(-50, -50, "Prix : \n" + this.prixMissionAffiche, {
                fill: "white",
                font: '50px Arial'

            });

            this.comptoirP1 = this.add.image(-425, 0, 'piece1');
            this.comptoirP1.setScale(0.3, 0.3);
            this.comptoirP1.visible = false;

            this.comptoirP2 = this.add.image(-315, 0, 'piece2');
            this.comptoirP2.setScale(0.3, 0.3);
            this.comptoirP2.visible = false;

            this.comptoirB5 = this.add.image(-190, 0, 'billet5');
            this.comptoirB5.setScale(0.055, 0.055);
            this.comptoirB5.visible = false;

            this.comptoirB10 = this.add.image(-40, 0, 'billet10');
            this.comptoirB10.setScale(0.05, 0.05);
            this.comptoirB10.visible = false;

            this.comptoirB20 = this.add.image(110, 0, 'billet20');
            this.comptoirB20.setScale(0.05, 0.05);
            this.comptoirB20.visible = false;

            this.comptoirB50 = this.add.image(260, 0, 'billet50');
            this.comptoirB50.setScale(0.05, 0.05);
            this.comptoirB50.visible = false;

            this.comptoirB100 = this.add.image(410, 0, 'billet100');
            this.comptoirB100.setScale(0.025, 0.025);
            this.comptoirB100.visible = false;



            this.txtBoursePiece1 = this.add.text(-435, -140, "x" + this.nbPieceBourse1, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBoursePiece1.visible = false;

            this.txtBoursePiece2 = this.add.text(-325, -140, "x" + this.nbPieceBourse2, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBoursePiece2.visible = false;

            this.txtBourseBill5 = this.add.text(-190, -140, "x" + this.nbBilletBourse5, {
                fill: 'black',
                font: '25px Arial'
            });
            this.txtBourseBill5.visible = false;
            this.txtBourseBill10 = this.add.text(-40, -140, "x" + this.nbBilletBourse10, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBourseBill10.visible = false;
            this.txtBourseBill20 = this.add.text(110, -140, "x" + this.nbBilletBourse20, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBourseBill20.visible = false;
            this.txtBourseBill50 = this.add.text(260, -140, "x" + this.nbBilletBourse50, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBourseBill50.visible = false;
            this.txtBourseBill100 = this.add.text(410, -140, "x" + this.nbBilletBourse100, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBourseBill100.visible = false;




            this.txtCountPiece1 = this.add.text(-435, -75, "x" + this.nbPieceComptoir1, {
                fill: "black",
                font: '25px Arial'

            });
            this.txtCountPiece1.visible = false;

            this.txtCountPiece2 = this.add.text(-325, -75, "x" + this.nbPieceComptoir2, {
                fill: "black",
                font: '25px Arial'

            });
            this.txtCountPiece2.visible = false;

            this.txtCountBill5 = this.add.text(-190, -60, "x" + this.nbBilletComptoir5, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtCountBill5.visible = false;
            this.txtCountBill10 = this.add.text(-40, -60, "x" + this.nbBilletComptoir10, {
                fill: "black",
                font: '25px Arial'
            });
            this.txtCountBill10.visible = false;
            this.txtCountBill20 = this.add.text(110, -60, "x" + this.nbBilletComptoir20, {
                fill: "black",
                font: '25px Arial'

            });
            this.txtCountBill20.visible = false;
            this.txtCountBill50 = this.add.text(260, -60, "x" + this.nbBilletComptoir50, {
                fill: "black",
                font: '25px Arial'

            });
            this.txtCountBill50.visible = false;
            this.txtCountBill100 = this.add.text(410, -60, "x" + this.nbBilletComptoir100, {
                fill: "black",
                font: '25px Arial'

            });
            this.txtCountBill100.visible = false;



            if (localStorage.getItem('P1') > 0) {

                this.p1 = new Button({
                    'scene': this,
                    'key': 'piece1',
                    'x': -425,
                    'y': -65
                });
                this.p1.setScale(0.3, 0.3);
                this.p1.on('pointerdown', function (pointer) {
                    console.log('clique sur piece 1');
                    this.comptoirP1.visible = true;
                    this.nbPieceComptoir1++;
                    this.txtCountPiece1.visible = true;
                    this.txtCountPiece1.text = "x" + this.nbPieceComptoir1;
                    this.nbPieceBourse1--;
                    this.txtBoursePiece1.text = "x" + this.nbPieceBourse1;

                    if (this.nbPieceBourse1 == 0) {
                        this.txtBoursePiece1.visible = false;
                    }

                    if (this.nbPieceComptoir1 == localStorage.getItem('P1')) {
                        this.p1.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 1;
                    this.pileAction.push(1);
                }, this);
                this.txtBoursePiece1.visible = true;

                this.maBourse.add(this.p1);

            }

            if (localStorage.getItem('P2') > 0) {

                this.p2 = new Button({
                    'scene': this,
                    'key': 'piece2',
                    'x': -315,
                    'y': -65
                });
                this.p2.setScale(0.3, 0.3);
                this.p2.on('pointerdown', function (pointer) {
                    console.log('clique sur piece 1');
                    this.comptoirP2.visible = true;
                    this.nbPieceComptoir2++;
                    this.txtCountPiece2.visible = true;
                    this.txtCountPiece2.text = "x" + this.nbPieceComptoir2;
                    this.nbPieceBourse2--;
                    this.txtBoursePiece2.text = "x" + this.nbPieceBourse2;

                    if (this.nbPieceBourse2 == 0) {
                        this.txtBoursePiece2.visible = false;
                    }

                    if (this.nbPieceComptoir2 == localStorage.getItem('P2')) {
                        this.p2.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 2;
                    this.pileAction.push(2);
                }, this);
                this.txtBoursePiece2.visible = true;

                this.maBourse.add(this.p2);

            }

            if (localStorage.getItem('B5') > 0) {

                this.b5 = new Button({
                    'scene': this,
                    'key': 'billet5',
                    'x': -180,
                    'y': -80
                });



                this.b5.setScale(0.055, 0.055);
                this.b5.on('pointerdown', function (pointer) {
                    console.log('clique sur billet 5');
                    this.comptoirB5.visible = true;
                    this.nbBilletComptoir5++;
                    this.txtCountBill5.visible = true;
                    this.txtCountBill5.text = "x" + this.nbBilletComptoir5;
                    this.nbBilletBourse5--;
                    this.txtBourseBill5.text = "x" + this.nbBilletBourse5;

                    if (this.nbBilletBourse5 == 0) {
                        this.txtBourseBill5.visible = false;
                    }
                    if (this.nbBilletComptoir5 == localStorage.getItem('B5')) {
                        this.b5.visible = false;
                    }

                    this.valeurDepose = this.valeurDepose + 5;
                    this.pileAction.push(5);
                }, this);
                this.txtBourseBill5.visible = true;

                this.maBourse.add(this.b5);

            }

            if (localStorage.getItem('B10') > 0) {

                this.b10 = new Button({
                    'scene': this,
                    'key': 'billet10',
                    'x': -30,
                    'y': -80
                });
                this.b10.setScale(0.05, 0.05);
                this.b10.on('pointerdown', function (pointer) {
                    console.log('clique sur billet 10');
                    this.comptoirB10.visible = true;
                    this.nbBilletComptoir10++;
                    this.txtCountBill10.visible = true;
                    this.txtCountBill10.text = "x" + this.nbBilletComptoir10;
                    this.nbBilletBourse10--;
                    this.txtBourseBill10.text = "x" + this.nbBilletBourse10;

                    if (this.nbBilletBourse10 == 0) {
                        this.txtBourseBill10.visible = false;
                    }

                    if (this.nbBilletComptoir10 == localStorage.getItem('B10')) {
                        this.b10.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 10;
                    this.pileAction.push(10);
                }, this);
                this.txtBourseBill10.visible = true;

                this.maBourse.add(this.b10);

            }

            if (localStorage.getItem('B20') > 0) {

                this.b20 = new Button({
                    'scene': this,
                    'key': 'billet20',
                    'x': 120,
                    'y': -80
                });
                this.b20.setScale(0.05, 0.05);
                this.b20.on('pointerdown', function (pointer) {
                    console.log('clique sur billet 20');
                    this.comptoirB20.visible = true;
                    this.nbBilletComptoir20++;
                    this.txtCountBill20.visible = true;
                    this.txtCountBill20.text = "x" + this.nbBilletComptoir20;
                    this.nbBilletBourse20--;
                    this.txtBourseBill20.text = "x" + this.nbBilletBourse20;

                    if (this.nbBilletBourse20 == 0) {
                        this.txtBourseBill20.visible = false;
                    }

                    if (this.nbBilletComptoir20 == localStorage.getItem('B20')) {
                        this.b20.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 20;
                    this.pileAction.push(20);
                }, this);
                this.txtBourseBill20.visible = true;

                this.maBourse.add(this.b20);

            }

            if (localStorage.getItem('B50') > 0) {

                this.b50 = new Button({
                    'scene': this,
                    'key': 'billet50',
                    'x': 270,
                    'y': -80
                });
                this.b50.setScale(0.05, 0.05);
                this.b50.on('pointerdown', function (pointer) {
                    console.log('clique sur billet 50');
                    this.comptoirB50.visible = true;
                    this.nbBilletComptoir50++;
                    this.txtCountBill50.visible = true;
                    this.txtCountBill50.text = "x" + this.nbBilletComptoir50;
                    this.nbBilletBourse50--;
                    this.txtBourseBill50.text = "x" + this.nbBilletBourse50;

                    if (this.nbBilletBourse50 == 0) {
                        this.txtBourseBill50.visible = false;
                    }

                    if (this.nbBilletComptoir50 == localStorage.getItem('B50')) {
                        this.b50.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 50;
                    this.pileAction.push(50);
                }, this);
                this.txtBourseBill50.visible = true;

                this.maBourse.add(this.b50);

            }

            if (localStorage.getItem('B100') > 0) {

                this.b100 = new Button({
                    'scene': this,
                    'key': 'billet100',
                    'x': 420,
                    'y': -80
                });
                this.b100.setScale(0.027, 0.027);
                this.b100.on('pointerdown', function (pointer) {
                    console.log('clique sur billet 100');
                    this.comptoirB100.visible = true;
                    this.nbBilletComptoir100++;
                    this.txtCountBill100.visible = true;
                    this.txtCountBill100.text = "x" + this.nbBilletComptoir100;
                    this.nbBilletBourse100--;
                    this.txtBourseBill100.text = "x" + this.nbBilletBourse100;

                    if (this.nbBilletBourse100 == 0) {
                        this.txtBourseBill100.visible = false;
                    }

                    if (this.nbBilletComptoir100 == localStorage.getItem('B100')) {
                        this.b100.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 100;
                    this.pileAction.push(100);
                }, this);
                this.txtBourseBill100.visible = true;

                this.maBourse.add(this.b100);

            }




            this.maBourse.add(this.btnValider);
            this.maBourse.add(this.btnCancel);
            this.maBourse.add(this.btnReset);
            this.maBourse.add(this.txtBoursePiece1);
            this.maBourse.add(this.txtBoursePiece2);
            this.maBourse.add(this.txtBourseBill5);
            this.maBourse.add(this.txtBourseBill10);
            this.maBourse.add(this.txtBourseBill20);
            this.maBourse.add(this.txtBourseBill50);
            this.maBourse.add(this.txtBourseBill100);


            this.comptoir.add(this.comptoirP1);
            this.comptoir.add(this.comptoirP2);
            this.comptoir.add(this.comptoirB5);
            this.comptoir.add(this.comptoirB10);
            this.comptoir.add(this.comptoirB20);
            this.comptoir.add(this.comptoirB50);
            this.comptoir.add(this.comptoirB100);

            this.comptoir.add(this.txtCountPiece1);
            this.comptoir.add(this.txtCountPiece2);
            this.comptoir.add(this.txtCountBill5);
            this.comptoir.add(this.txtCountBill10);
            this.comptoir.add(this.txtCountBill20);
            this.comptoir.add(this.txtCountBill50);
            this.comptoir.add(this.txtCountBill100);


            this.zonePrix.add(this.txtPrix);

        }

        this.echapButton = this.input.keyboard.addKey('ESC');

    }

    update() {
        if (this.echapButton.isDown) {
            this.backTravel();
        }
    }

    backTravel() {
        if (this.valeurDepose == this.prixMissionAffiche) {
            localStorage.setItem('BoutiqueTexte', "Va voir le Père Noël pour avoir de l'argent.");
        }
        this.scene.start("Travel");
    }

    cancelAction() {

        if (this.pileAction.length > 0) {


            if (this.pileAction[this.pileAction.length - 1] == 1) {

                if (this.nbPieceComptoir1 <= 1) {
                    this.comptoirP1.visible = false;
                    this.txtCountPiece1.visible = false;
                }
                this.nbPieceComptoir1--;
                this.txtCountPiece1.setText("x" + this.nbPieceComptoir1);

                this.nbPieceBourse1++;
                this.txtBoursePiece1.setText("x" + this.nbPieceBourse1);

                if (this.nbPieceBourse1 > 0) {
                    this.txtBoursePiece1.visible = true;
                    this.p1.visible = true;
                }
                this.valeurDepose = this.valeurDepose - 1;

            }

            if (this.pileAction[this.pileAction.length - 1] == 2) {

                if (this.nbPieceComptoir2 <= 1) {
                    this.comptoirP2.visible = false;
                    this.txtCountPiece2.visible = false;
                }
                this.nbPieceComptoir2--;
                this.txtCountPiece2.setText("x" + this.nbPieceComptoir2);

                this.nbPieceBourse2++;
                this.txtBoursePiece2.setText("x" + this.nbPieceBourse2);

                if (this.nbPieceBourse2 > 0) {
                    this.txtBoursePiece2.visible = true;
                    this.p2.visible = true;
                }
                this.valeurDepose = this.valeurDepose - 2;

            }

            if (this.pileAction[this.pileAction.length - 1] == 5) {

                if (this.nbBilletComptoir5 <= 1) {
                    this.comptoirB5.visible = false;
                    this.txtCountBill5.visible = false;
                }
                this.nbBilletComptoir5--;
                this.txtCountBill5.setText("x" + this.nbBilletComptoir5);

                this.nbBilletBourse5++;
                this.txtBourseBill5.setText("x" + this.nbBilletBourse5);

                if (this.nbBilletBourse5 > 0) {
                    this.txtBourseBill5.visible = true;
                    this.b5.visible = true;
                }

                this.valeurDepose = this.valeurDepose - 5;

            }


            if (this.pileAction[this.pileAction.length - 1] == 10) {

                if (this.nbBilletComptoir10 <= 1) {
                    this.comptoirB10.visible = false;
                    this.txtCountBill10.visible = false;
                }
                this.nbBilletComptoir10--;
                this.txtCountBill10.setText("x" + this.nbBilletComptoir10);

                this.nbBilletBourse10++;
                this.txtBourseBill10.setText("x" + this.nbBilletBourse10);

                if (this.nbBilletBourse10 > 0) {
                    this.txtBourseBill10.visible = true;
                    this.b10.visible = true;
                }

                this.valeurDepose = this.valeurDepose - 10;
            }

            if (this.pileAction[this.pileAction.length - 1] == 20) {

                if (this.nbBilletComptoir20 <= 1) {
                    this.comptoirB20.visible = false;
                    this.txtCountBill20.visible = false;
                }
                this.nbBilletComptoir20--;
                this.txtCountBill20.setText("x" + this.nbBilletComptoir20);

                this.nbBilletBourse20++;
                this.txtBourseBill20.setText("x" + this.nbBilletBourse20);

                if (this.nbBilletBourse20 > 0) {
                    this.txtBourseBill20.visible = true;
                    this.b20.visible = true;
                }

                this.valeurDepose = this.valeurDepose - 20;

            }

            if (this.pileAction[this.pileAction.length - 1] == 50) {

                if (this.nbBilletComptoir50 <= 1) {
                    this.comptoirB50.visible = false;
                    this.txtCountBill50.visible = false;
                }
                this.nbBilletComptoir50--;
                this.txtCountBill50.setText("x" + this.nbBilletComptoir50);

                this.nbBilletBourse50++;
                this.txtBourseBill50.setText("x" + this.nbBilletBourse50);

                if (this.nbBilletBourse50 > 0) {
                    this.txtBourseBill50.visible = true;
                    this.b50.visible = true;
                }

                this.valeurDepose = this.valeurDepose - 50;

            }

            if (this.pileAction[this.pileAction.length - 1] == 100) {

                if (this.nbBilletComptoir100 <= 1) {
                    this.comptoirB100.visible = false;
                    this.txtCountBill100.visible = false;
                }
                this.nbBilletComptoir100--;
                this.txtCountBill100.setText("x" + this.nbBilletComptoir100);

                this.nbBilletBourse100++;
                this.txtBourseBill100.setText("x" + this.nbBilletBourse100);

                if (this.nbBilletBourse100 > 0) {
                    this.txtBourseBill100.visible = true;
                    this.b100.visible = true;
                }

                this.valeurDepose = this.valeurDepose - 100;

            }


            this.pileAction.pop();


        }
    }

    testValidite() {

        if (this.valeurDepose == this.prixMissionAttendu) {

            console.log('%c%s', 'color: #097721', "Transaction Réussi");

            if (localStorage.getItem('P1') > 0) {
                this.p1.visible = false;
            }

            if (localStorage.getItem('P2') > 0) {
                this.p2.visible = false;
            }

            if (localStorage.getItem('B5') > 0) {
                this.b5.visible = false;
            }
            if (localStorage.getItem('B10') > 0) {
                this.b10.visible = false;
            }
            if (localStorage.getItem('B20') > 0) {
                this.b20.visible = false;
            }
            if (localStorage.getItem('B50') > 0) {
                this.b50.visible = false;
            }
            if (localStorage.getItem('B100') > 0) {
                this.b100.visible = false;
            }


            this.comptoirP1.visible = false;
            this.comptoirP2.visible = false;
            this.comptoirB5.visible = false;
            this.comptoirB10.visible = false;
            this.comptoirB20.visible = false;
            this.comptoirB50.visible = false;
            this.comptoirB100.visible = false;

            this.txtBoursePiece1.visible = false;
            this.txtBoursePiece2.visible = false;
            this.txtBourseBill5.visible = false;
            this.txtBourseBill10.visible = false;
            this.txtBourseBill20.visible = false;
            this.txtBourseBill50.visible = false;
            this.txtBourseBill100.visible = false;

            this.txtCountPiece1.visible = false;
            this.txtCountPiece2.visible = false;
            this.txtCountBill5.visible = false;
            this.txtCountBill10.visible = false;
            this.txtCountBill20.visible = false;
            this.txtCountBill50.visible = false;
            this.txtCountBill100.visible = false;



            this.txtPrix.visible = false;

            this.btnValider.visible = false;
            this.btnCancel.visible = false;
            this.btnReset.visible = false;

            this.txtBoutique.setText("Tu as réussi!\nTu peut sortir en cliquant sur la flèche en bas à gauche,\nou en appuyant sur la touche \"échap\" de ton clavier.")

            localStorage.setItem('MissionEnCours', false);
            if(localStorage.getItem('FirstMission') == "true"){
                localStorage.setItem('FirstMission' , false);
            }
            localStorage.setItem('RetourMission', true);

        } else {

            this.scene.restart();
            this.Tvalue = parseInt(localStorage.getItem("nbTentatives"));
            localStorage.setItem('nbTentatives', this.Tvalue + 1);
            console.log('%c%s', 'color: #097721', "Tentative = " + localStorage.getItem("nbTentatives"));

        }

    }


}