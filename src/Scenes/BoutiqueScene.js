class BoutiqueScene extends Phaser.Scene {
    constructor() {
        super("Boutique");
    }


    create() {

        console.log('%c%s', 'color: #8400ff', "Boutique");
        /*
                sessionStorage.setItem('B5', 5);
                sessionStorage.setItem('B10', 5);
                sessionStorage.setItem('B20', 5);
                sessionStorage.setItem('B50', 5);
                sessionStorage.setItem('B100', 5);
                sessionStorage.setItem('PrixMission' , 15);
                sessionStorage.setItem('MissionEnCours',true) ;
*/
      

        this.pileAction = new Array();

        this.nbBilletComptoir5 = 0;
        this.nbBilletComptoir10 = 0;
        this.nbBilletComptoir20 = 0;
        this.nbBilletComptoir50 = 0;
        this.nbBilletComptoir100 = 0;

        this.nbBilletBourse5 = sessionStorage.getItem('B5');
        this.nbBilletBourse10 = sessionStorage.getItem('B10');
        this.nbBilletBourse20 = sessionStorage.getItem('B20');
        this.nbBilletBourse50 = sessionStorage.getItem('B50');
        this.nbBilletBourse100 = sessionStorage.getItem('B100');

        this.prixMission = sessionStorage.getItem('PrixMission');

        this.valeurDepose = 0;



        this.rectBlanc = this.add.image(500, 300, 'recBlanc');

        this.maBourse = this.add.container(500, 453);
        this.comptoir = this.add.container(500, 230);
        this.zonePrix = this.add.container(100, 80);
        this.zoneConsigne = this.add.container(597, 77);

        this.rectVert = this.add.image(0, 0, 'recVert');
        this.rectRouge = this.add.image(0, 0, 'recRouge');
        this.rectBleu = this.add.image(0, 0, 'recBleu');
        this.rectJaune = this.add.image(0, 0, 'recJaune');

        this.boutonRetour = new Button({
            'scene': this,
            'key': 'flecheGauche',
            'x': -450,
            'y': 80
        });
        this.boutonRetour.setScale(0.5, 0.5);
        this.boutonRetour.on('pointerdown', this.backTravel, this);

        this.maBourse.add(this.rectBleu);
        this.maBourse.add(this.boutonRetour);
        this.comptoir.add(this.rectJaune);
        this.zonePrix.add(this.rectRouge);
        this.zoneConsigne.add(this.rectVert);


        this.rectBleu.setScale(1.35, 0.7);
        this.rectJaune.setScale(2.4, 0.6);
        this.rectRouge.setScale(0.15, 0.45);
        this.rectVert.setScale(0.62, 0.27);


        if (sessionStorage.getItem('MissionEnCours') == "true") {


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
            this.btnReset.on('pointerdown', function() {  this.scene.restart();}, this);

            this.txtPrix = this.add.text(-50, -50, "Prix : \n" + this.prixMission, {
                fill: "white",
                font: '50px Arial'

            });

            this.txtPrix = this.add.text(-50, -50, "Prix : \n" + this.prixMission, {
                fill: "white",
                font: '50px Arial'

            });

            this.comptoirB5 = this.add.image(-400, 0, 'billet5');
            this.comptoirB5.setScale(0.055, 0.055);
            this.comptoirB5.visible = false;

            this.comptoirB10 = this.add.image(-250, 0, 'billet10');
            this.comptoirB10.setScale(0.05, 0.05);
            this.comptoirB10.visible = false;

            this.comptoirB20 = this.add.image(-100, 0, 'billet20');
            this.comptoirB20.setScale(0.05, 0.05);
            this.comptoirB20.visible = false;

            this.comptoirB50 = this.add.image(50, 0, 'billet50');
            this.comptoirB50.setScale(0.05, 0.05);
            this.comptoirB50.visible = false;

            this.comptoirB100 = this.add.image(200, 0, 'billet100');
            this.comptoirB100.setScale(0.025, 0.025);
            this.comptoirB100.visible = false;


            this.txtBourseBill5 = this.add.text(-400, -130, this.nbBilletBourse5, {
                fill: "black"
            });
            this.txtBourseBill5.visible = false;
            this.txtBourseBill10 = this.add.text(-250, -130, this.nbBilletBourse10, {
                fill: "black"
            });
            this.txtBourseBill10.visible = false;
            this.txtBourseBill20 = this.add.text(-100, -130, this.nbBilletBourse20, {
                fill: "black"
            });
            this.txtBourseBill20.visible = false;
            this.txtBourseBill50 = this.add.text(50, -130, this.nbBilletBourse50, {
                fill: "black"
            });
            this.txtBourseBill50.visible = false;
            this.txtBourseBill100 = this.add.text(200, -130, this.nbBilletBourse100, {
                fill: "black"
            });
            this.txtBourseBill100.visible = false;



            this.txtCountBill5 = this.add.text(-400, -50, this.nbBilletComptoir5, {
                fill: "black"
            });
            this.txtCountBill5.visible = false;
            this.txtCountBill10 = this.add.text(-250, -50, this.nbBilletComptoir5, {
                fill: "black"
            });
            this.txtCountBill10.visible = false;
            this.txtCountBill20 = this.add.text(-100, -50, this.nbBilletComptoir5, {
                fill: "black"
            });
            this.txtCountBill20.visible = false;
            this.txtCountBill50 = this.add.text(50, -50, this.nbBilletComptoir5, {
                fill: "black"
            });
            this.txtCountBill50.visible = false;
            this.txtCountBill100 = this.add.text(200, -50, this.nbBilletComptoir5, {
                fill: "black"
            });
            this.txtCountBill100.visible = false;

            if (sessionStorage.getItem('B5') > 0) {

                this.b5 = new Button({
                    'scene': this,
                    'key': 'billet5',
                    'x': -400,
                    'y': -80
                });

                this.b5.setScale(0.055, 0.055);
                this.b5.on('pointerdown', function (pointer) {
                    console.log('click sur billet 5');
                    this.comptoirB5.visible = true;
                    this.nbBilletComptoir5++;
                    this.txtCountBill5.visible = true;
                    this.txtCountBill5.text = this.nbBilletComptoir5;
                    this.nbBilletBourse5--;
                    this.txtBourseBill5.text = this.nbBilletBourse5;

                    if (this.nbBilletBourse5 == 0) {
                        this.txtBourseBill5.visible = false;
                    }
                    if (this.nbBilletComptoir5 == sessionStorage.getItem('B5')) {
                        this.b5.visible = false;
                    }

                    this.valeurDepose = this.valeurDepose + 5;
                    this.pileAction.push(5);
                }, this);
                this.txtBourseBill5.visible = true;

                this.maBourse.add(this.b5);

            }

            if (sessionStorage.getItem('B10') > 0) {

                this.b10 = new Button({
                    'scene': this,
                    'key': 'billet10',
                    'x': -250,
                    'y': -80
                });
                this.b10.setScale(0.05, 0.05);
                this.b10.on('pointerdown', function (pointer) {
                    console.log('click sur billet 10');
                    this.comptoirB10.visible = true;
                    this.nbBilletComptoir10++;
                    this.txtCountBill10.visible = true;
                    this.txtCountBill10.text = this.nbBilletComptoir10;
                    this.nbBilletBourse10--;
                    this.txtBourseBill10.text = this.nbBilletBourse10;

                    if (this.nbBilletBourse10 == 0) {
                        this.txtBourseBill10.visible = false;
                    }

                    if (this.nbBilletComptoir10 == sessionStorage.getItem('B10')) {
                        this.b10.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 10;
                    this.pileAction.push(10);
                }, this);
                this.txtBourseBill10.visible = true;

                this.maBourse.add(this.b10);

            }

            if (sessionStorage.getItem('B20') > 0) {

                this.b20 = new Button({
                    'scene': this,
                    'key': 'billet20',
                    'x': -100,
                    'y': -80
                });
                this.b20.setScale(0.05, 0.05);
                this.b20.on('pointerdown', function (pointer) {
                    console.log('click sur billet 20');
                    this.comptoirB20.visible = true;
                    this.nbBilletComptoir20++;
                    this.txtCountBill20.visible = true;
                    this.txtCountBill20.text = this.nbBilletComptoir20;
                    this.nbBilletBourse20--;
                    this.txtBourseBill20.text = this.nbBilletBourse20;

                    if (this.nbBilletBourse20 == 0) {
                        this.txtBourseBill20.visible = false;
                    }

                    if (this.nbBilletComptoir20 == sessionStorage.getItem('B20')) {
                        this.b20.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 20;
                    this.pileAction.push(20);
                }, this);
                this.txtBourseBill20.visible = true;

                this.maBourse.add(this.b20);

            }

            if (sessionStorage.getItem('B50') > 0) {

                this.b50 = new Button({
                    'scene': this,
                    'key': 'billet50',
                    'x': 50,
                    'y': -80
                });
                this.b50.setScale(0.05, 0.05);
                this.b50.on('pointerdown', function (pointer) {
                    console.log('click sur billet 50');
                    this.comptoirB50.visible = true;
                    this.nbBilletComptoir50++;
                    this.txtCountBill50.visible = true;
                    this.txtCountBill50.text = this.nbBilletComptoir50;
                    this.nbBilletBourse50--;
                    this.txtBourseBill50.text = this.nbBilletBourse50;

                    if (this.nbBilletBourse50 == 0) {
                        this.txtBourseBill50.visible = false;
                    }

                    if (this.nbBilletComptoir50 == sessionStorage.getItem('B50')) {
                        this.b50.visible = false;
                    }
                    this.valeurDepose = this.valeurDepose + 50;
                    this.pileAction.push(50);
                }, this);
                this.txtBourseBill50.visible = true;

                this.maBourse.add(this.b50);

            }

            if (sessionStorage.getItem('B100') > 0) {

                this.b100 = new Button({
                    'scene': this,
                    'key': 'billet100',
                    'x': 200,
                    'y': -80
                });
                this.b100.setScale(0.025, 0.025);
                this.b100.on('pointerdown', function (pointer) {
                    console.log('click sur billet 100');
                    this.comptoirB100.visible = true;
                    this.nbBilletComptoir100++;
                    this.txtCountBill100.visible = true;
                    this.txtCountBill100.text = this.nbBilletComptoir100;
                    this.nbBilletBourse100--;
                    this.txtBourseBill100.text = this.nbBilletBourse100;

                    if (this.nbBilletBourse100 == 0) {
                        this.txtBourseBill100.visible = false;
                    }

                    if (this.nbBilletComptoir100 == sessionStorage.getItem('B100')) {
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
            this.maBourse.add(this.txtBourseBill5);
            this.maBourse.add(this.txtBourseBill10);
            this.maBourse.add(this.txtBourseBill20);
            this.maBourse.add(this.txtBourseBill50);
            this.maBourse.add(this.txtBourseBill100);

            this.comptoir.add(this.comptoirB5);
            this.comptoir.add(this.comptoirB10);
            this.comptoir.add(this.comptoirB20);
            this.comptoir.add(this.comptoirB50);
            this.comptoir.add(this.comptoirB100);
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
        this.scene.start("Travel");
    }

    cancelAction(){

        if(this.pileAction.length >0 ){

            if(this.pileAction[this.pileAction.length - 1] == 5){

                if(this.nbBilletComptoir5 <= 1 ){
                    this.comptoirB5.visible = false;
                    this.txtCountBill5.visible = false;
                }
                this.nbBilletComptoir5 --;
                this.txtCountBill5.setText(this.nbBilletComptoir5);

                this.nbBilletBourse5++;
                this.txtBourseBill5.setText(this.nbBilletBourse5);

                if(this.nbBilletBourse5 > 0){
                    this.txtBourseBill5.visible = true;
                    this.b5.visible = true;
                }
            }

            
            if(this.pileAction[this.pileAction.length - 1] == 10){

                if(this.nbBilletComptoir10 <= 1 ){
                    this.comptoirB10.visible = false;
                    this.txtCountBill10.visible = false;
                }
                this.nbBilletComptoir10 --;
                this.txtCountBill10.setText(this.nbBilletComptoir10);

                this.nbBilletBourse10++;
                this.txtBourseBill10.setText(this.nbBilletBourse10);

                if(this.nbBilletBourse10 > 0){
                    this.txtBourseBill10.visible = true;
                    this.b10.visible = true;
                }
            }

            if(this.pileAction[this.pileAction.length - 1] == 20){

                if(this.nbBilletComptoir20 <= 1 ){
                    this.comptoirB20.visible = false;
                    this.txtCountBill20.visible = false;
                }
                this.nbBilletComptoir20 --;
                this.txtCountBill20.setText(this.nbBilletComptoir20);

                this.nbBilletBourse20++;
                this.txtBourseBill20.setText(this.nbBilletBourse20);

                if(this.nbBilletBourse20 > 0){
                    this.txtBourseBill20.visible = true;
                    this.b20.visible = true;
                }
            }

            if(this.pileAction[this.pileAction.length - 1] == 50){

                if(this.nbBilletComptoir50 <= 1 ){
                    this.comptoirB50.visible = false;
                    this.txtCountBill50.visible = false;
                }
                this.nbBilletComptoir50 --;
                this.txtCountBill50.setText(this.nbBilletComptoir50);

                this.nbBilletBourse50++;
                this.txtBourseBill50.setText(this.nbBilletBourse50);

                if(this.nbBilletBourse50 > 0){
                    this.txtBourseBill50.visible = true;
                    this.b50.visible = true;
                }
            }

            if(this.pileAction[this.pileAction.length - 1] == 100){

                if(this.nbBilletComptoir100 <= 1 ){
                    this.comptoirB100.visible = false;
                    this.txtCountBill100.visible = false;
                }
                this.nbBilletComptoir100 --;
                this.txtCountBill100.setText(this.nbBilletComptoir100);

                this.nbBilletBourse100++;
                this.txtBourseBill100.setText(this.nbBilletBourse100);

                if(this.nbBilletBourse100 > 0){
                    this.txtBourseBill100.visible = true;
                    this.b100.visible = true;
                }
            }

            this.pileAction.pop();

        }
    }

    testValidite() {

        if (this.valeurDepose == this.prixMission) {

            console.log('%c%s', 'color: #097721', "Transaction Réussi");

            if (sessionStorage.getItem('B5') > 0) {
                this.b5.visible = false;
            }
            if (sessionStorage.getItem('B10') > 0) {
                this.b10.visible = false;
            }
            if (sessionStorage.getItem('B20') > 0) {
                this.b20.visible = false;
            }
            if (sessionStorage.getItem('B50') > 0) {
                this.b50.visible = false;
            }
            if (sessionStorage.getItem('B100') > 0) {
                this.b100.visible = false;
            }

            this.comptoirB5.visible = false;
            this.comptoirB10.visible = false;
            this.comptoirB20.visible = false;
            this.comptoirB50.visible = false;
            this.comptoirB100.visible = false;


            this.txtBourseBill5.visible = false;
            this.txtBourseBill10.visible = false;
            this.txtBourseBill20.visible = false;
            this.txtBourseBill50.visible = false;
            this.txtBourseBill100.visible = false;

            this.txtCountBill5.visible = false;
            this.txtCountBill10.visible = false;
            this.txtCountBill20.visible = false;
            this.txtCountBill50.visible = false;
            this.txtCountBill100.visible = false;

            this.txtPrix.visible = false;

            this.btnValider.visible=false;
            this.btnCancel.visible=false;
            this.btnReset.visible=false;


            sessionStorage.setItem('MissionEnCours', false);

        } else {

            this.scene.restart();
            this.Tvalue = parseInt(sessionStorage.getItem("nbTentatives"));
            sessionStorage.setItem('nbTentatives', this.Tvalue + 1);
            console.log('%c%s', 'color: #097721', "Tentative = " + sessionStorage.getItem("nbTentatives"));

        }

    }


}