class LutinShopScene extends Phaser.Scene {
    constructor() {
        super("LutinShop");
    }

    create() {

        this.dataShop = new DonneesLutinShop;

        this.zoneTexte = this.add.container(500, 70);
        this.zonePrix = this.add.container(400, 200);
        this.maZone = this.add.container(878, 195);
        this.zoneAchat = this.add.container(500, 395);

        this.rectVert = this.add.image(0, 0, 'recVert');
        this.rectRouge = this.add.image(0, 0, 'recRouge');
        this.rectBleu = this.add.image(0, 0, 'recBleu');
        this.rectJaune = this.add.image(0, 0, 'recJaune');


        this.rectVert.setScale(0.75, 0.2);
        this.rectRouge.setScale(0.595, 0.4);
        this.rectBleu.setScale(0.28, 0.318);
        this.rectJaune.setScale(2.35, 1);


        this.zoneTexte.add(this.rectVert);
        this.zonePrix.add(this.rectRouge);
        this.maZone.add(this.rectBleu);
        this.zoneAchat.add(this.rectJaune);


        this.boutonRetour = new Button({
            'scene': this,
            'key': 'flecheGauche',
            'x': 40,
            'y': 560
        });
        this.boutonRetour.setScale(0.35, 0.35);
        this.boutonRetour.on('pointerdown', this.backTravel, this);

        this.btnValider = new Button({
            'scene': this,
            'key': 'valider',
            'x': 930,
            'y': 560
        });
        this.btnValider.setScale(0.5, 0.5);
        this.btnValider.on('pointerdown', this.validerTransaction, this);


        this.boutonPrecedent = new Button({
            'scene': this,
            'key': 'flecheGauche',
            'x': 450,
            'y': 500
        });
        this.boutonPrecedent.setScale(0.2, 0.2);
        this.boutonPrecedent.on('pointerdown', this.pagePrecedente, this);
        this.boutonPrecedent.visible = false;

        this.boutonSuivant = new Button({
            'scene': this,
            'key': 'flecheDroite',
            'x': 550,
            'y': 500
        });
        this.boutonSuivant.setScale(0.2, 0.2);
        this.boutonSuivant.on('pointerdown', this.pageSuivante, this);


        this.txtContainerIndexPage = this.add.container(500, 500);

        this.indexPage = 1;
        this.txtIndexPage = this.add.text(0, 0, this.indexPage, {
            fill: "black",
            font: '40px Arial',
        });
        this.txtIndexPage.setOrigin(0.5, 0.5);

        this.txtContainerIndexPage.add(this.txtIndexPage);


        this.arrayTexteButtons = [];
        this.arrayButtons = [];


        /// OBJETS 

        this.xValue = 150; // 150 / 380 / 610 / 840
        this.yValue = 320;

        this.counter = 1;

        for (var i = 0; i < this.dataShop.arrayObjetDeco.length; i++) {


            if ((i) % 8 == 0) {
                this.yValue = 320;
            } else if ((i) % 4 == 0) {
                this.yValue = 420;
            }

            if (this.counter == 1) {
                this.xValue = 150;
            } else if (this.counter == 2) {
                this.xValue = 380;
            } else if (this.counter == 3) {
                this.xValue = 610;
            } else if (this.counter == 4) {
                this.xValue = 840;
            }

            this.counter++;

            if (this.counter == 5) {
                this.counter = 1;
            }

            this.boutonObjet = new Button({
                'scene': this,
                'key': 'recBleuMarine',
                'x': this.xValue,
                'y': this.yValue,
            });
            this.boutonObjet.setScale(0.2, 0.15);
            this.boutonObjet.on('pointerdown', this.dataShop.arrayObjetDeco[i][1][0], this);

            if (i <= 7) {
                this.boutonObjet.visible = true;
            } else {
                this.boutonObjet.visible = false;

            }
            this.arrayTexteButtons.push(this.dataShop.arrayObjetDeco[i][0]);
            this.arrayButtons.push(this.boutonObjet);

        }



        ///////////

        this.txtContainerB0 = this.add.container(150, 320);
        this.txtContainerB1 = this.add.container(380, 320);
        this.txtContainerB2 = this.add.container(610, 320);
        this.txtContainerB3 = this.add.container(840, 320);
        this.txtContainerB4 = this.add.container(150, 420);
        this.txtContainerB5 = this.add.container(380, 420);
        this.txtContainerB6 = this.add.container(610, 420);
        this.txtContainerB7 = this.add.container(840, 420);

        this.arrayLocalTxtBouton = [];


        this.txtBouton0 = this.add.text(0, 0, this.arrayTexteButtons[0], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton0.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton0);

        this.txtBouton1 = this.add.text(0, 0, this.arrayTexteButtons[1], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton1.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton1);


        this.txtBouton2 = this.add.text(0, 0, this.arrayTexteButtons[2], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton2.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton2);


        this.txtBouton3 = this.add.text(0, 0, this.arrayTexteButtons[3], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton3.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton3);


        this.txtBouton4 = this.add.text(0, 0, this.arrayTexteButtons[4], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton4.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton4);


        this.txtBouton5 = this.add.text(0, 0, this.arrayTexteButtons[5], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton5.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton5);


        this.txtBouton6 = this.add.text(0, 0, this.arrayTexteButtons[6], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton6.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton6);


        this.txtBouton7 = this.add.text(0, 0, this.arrayTexteButtons[7], {
            fill: "black",
            font: '25px Arial'
        });
        this.txtBouton7.setOrigin(0.5, 0.5);
        this.arrayLocalTxtBouton.push(this.txtBouton7);



        this.txtContainerB0.add(this.txtBouton0);
        this.txtContainerB1.add(this.txtBouton1);
        this.txtContainerB2.add(this.txtBouton2);
        this.txtContainerB3.add(this.txtBouton3);
        this.txtContainerB4.add(this.txtBouton4);
        this.txtContainerB5.add(this.txtBouton5);
        this.txtContainerB6.add(this.txtBouton6);
        this.txtContainerB7.add(this.txtBouton7);


        this.nbPages = Math.ceil(this.arrayTexteButtons.length / 8);

        console.log('%c%s', 'color: #ffa640', this.nbPages);

        this.beginLoop = 0;

        this.echapButton = this.input.keyboard.addKey('ESC');
    }



    update() {
        if (this.echapButton.isDown) {
            this.backTravel();
        }
    }


    pageSuivante() {

        this.arriveeLoop = this.beginLoop + 8;
        var j = 0;

        for (var i = this.beginLoop; i < this.arriveeLoop; i++) {


            this.arrayButtons[i].visible = false;

            if (this.arrayButtons[i + 8] != null) {
                this.arrayButtons[i + 8].visible = true;

            }


            if (this.arrayTexteButtons[i + 8] != null) {

                this.arrayLocalTxtBouton[j].text = this.arrayTexteButtons[i + 8];

            } else {
                this.arrayLocalTxtBouton[j].visible = false;

            }

            j++;


        }



        this.indexPage++;
        this.txtIndexPage.text = this.indexPage;
        this.boutonPrecedent.visible = true;

        if (this.indexPage == this.nbPages) {
            this.boutonSuivant.visible = false;
        }

        this.beginLoop = this.beginLoop + 8;


    }

    pagePrecedente() {


        this.arriveeLoop = this.beginLoop - 8;
        var j = 7;

        for (var i = this.beginLoop - 1; i > this.arriveeLoop - 1; i--) {

            console.log('%c%s', 'color: #051eac', "i = " + i);

            if (this.arrayButtons[i + 8] != null) {
                this.arrayButtons[i + 8].visible = false;

            }

            if (this.arrayButtons[i] != null) {
                this.arrayButtons[i].visible = true;

            }


            if (this.arrayTexteButtons[i] != null) {

                this.arrayLocalTxtBouton[j].text = this.arrayTexteButtons[i];

            } else {
                this.arrayLocalTxtBouton[j].visible = false;

            }

            j--;


        }

        this.indexPage--;
        this.txtIndexPage.text = this.indexPage;
        this.boutonSuivant.visible = true;

        if (this.indexPage == 1) {
            this.boutonPrecedent.visible = false;
        }

        this.beginLoop = this.beginLoop - 8;

    }

    validerTransaction() {

    }

    backTravel() {
        this.scene.start("Travel");
    }

}