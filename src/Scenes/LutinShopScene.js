class LutinShopScene extends Phaser.Scene {
    constructor() {
        super("LutinShop");
    }

    create() {

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

        this.boutonObjet0 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 150,
            'y': 320
        });
        this.boutonObjet0.setScale(0.2, 0.15);
        this.boutonObjet0.on('pointerdown', function () {

            console.log('%c%s', 'color: #d90000', "bouton 0 ");
        }, this);
        this.arrayTexteButtons.push("Bouton0");
        this.arrayButtons.push(this.boutonObjet0);


        this.boutonObjet1 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 380,
            'y': 320
        });
        this.boutonObjet1.setScale(0.2, 0.15);
        this.boutonObjet1.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 1");
        }, this);
        this.arrayTexteButtons.push("Bouton1");
        this.arrayButtons.push(this.boutonObjet1);


        this.boutonObjet2 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 610,
            'y': 320
        });
        this.boutonObjet2.setScale(0.2, 0.15);
        this.boutonObjet2.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 2");
        }, this);
        this.arrayTexteButtons.push("Bouton2");
        this.arrayButtons.push(this.boutonObjet2);


        this.boutonObjet3 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 840,
            'y': 320
        });
        this.boutonObjet3.setScale(0.2, 0.15);
        this.boutonObjet3.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 3");
        }, this);
        this.arrayTexteButtons.push("Bouton3");
        this.arrayButtons.push(this.boutonObjet3);



        ///

        this.boutonObjet4 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 150,
            'y': 420
        });
        this.boutonObjet4.setScale(0.2, 0.15);
        this.boutonObjet4.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 4");
        }, this);
        this.arrayTexteButtons.push("Bouton4");
        this.arrayButtons.push(this.boutonObjet4);


        this.boutonObjet5 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 380,
            'y': 420
        });
        this.boutonObjet5.setScale(0.2, 0.15);
        this.boutonObjet5.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 5");
        }, this);
        this.arrayTexteButtons.push("Bouton5");
        this.arrayButtons.push(this.boutonObjet5);


        this.boutonObjet6 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 610,
            'y': 420
        });
        this.boutonObjet6.setScale(0.2, 0.15);
        this.boutonObjet6.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 6");
        }, this);
        this.arrayTexteButtons.push("Bouton6");
        this.arrayButtons.push(this.boutonObjet6);


        this.boutonObjet7 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 840,
            'y': 420
        });
        this.boutonObjet7.setScale(0.2, 0.15);
        this.boutonObjet7.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 7");
        }, this);
        this.arrayTexteButtons.push("Bouton7");
        this.arrayButtons.push(this.boutonObjet7);

        this.boutonObjet8 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 150,
            'y': 320
        });
        this.boutonObjet8.setScale(0.2, 0.15);
        this.boutonObjet8.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 8");
        }, this);
        this.arrayTexteButtons.push("Bouton8");
        this.arrayButtons.push(this.boutonObjet8);
        this.boutonObjet8.visible = false;

        ////

        this.boutonObjet9 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 380,
            'y': 320
        });
        this.boutonObjet9.setScale(0.2, 0.15);
        this.boutonObjet9.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 9");
        }, this);
        this.arrayTexteButtons.push("Bouton9");
        this.arrayButtons.push(this.boutonObjet9);
        this.boutonObjet9.visible = false;

        this.boutonObjet10 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 610,
            'y': 320
        });
        this.boutonObjet10.setScale(0.2, 0.15);
        this.boutonObjet10.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 10");
        }, this);
        this.arrayTexteButtons.push("Bouton10");
        this.arrayButtons.push(this.boutonObjet10);
        this.boutonObjet10.visible = false;

        this.boutonObjet11 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 840,
            'y': 320
        });
        this.boutonObjet11.setScale(0.2, 0.15);
        this.boutonObjet11.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 11");
        }, this);
        this.arrayTexteButtons.push("Bouton11");
        this.arrayButtons.push(this.boutonObjet11);
        this.boutonObjet11.visible = false;

        this.boutonObjet12 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 150,
            'y': 420
        });
        this.boutonObjet12.setScale(0.2, 0.15);
        this.boutonObjet12.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 12");
        }, this);
        this.arrayTexteButtons.push("Bouton12");
        this.arrayButtons.push(this.boutonObjet12);
        this.boutonObjet12.visible = false;

        this.boutonObjet13 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 380,
            'y': 420
        });
        this.boutonObjet13.setScale(0.2, 0.15);
        this.boutonObjet13.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 13");
        }, this);
        this.arrayTexteButtons.push("Bouton13");
        this.arrayButtons.push(this.boutonObjet13);
        this.boutonObjet13.visible = false;

        this.boutonObjet14 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 610,
            'y': 420
        });
        this.boutonObjet14.setScale(0.2, 0.15);
        this.boutonObjet14.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 14");
        }, this);
        this.arrayTexteButtons.push("Bouton14");
        this.arrayButtons.push(this.boutonObjet14);
        this.boutonObjet14.visible = false;

        this.boutonObjet15 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 840,
            'y': 420
        });
        this.boutonObjet15.setScale(0.2, 0.15);
        this.boutonObjet15.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 15");
        }, this);
        this.arrayTexteButtons.push("Bouton15");
        this.arrayButtons.push(this.boutonObjet15);
        this.boutonObjet15.visible = false;
/*
        this.boutonObjet16 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 150,
            'y': 320
        });
        this.boutonObjet16.setScale(0.2, 0.15);
        this.boutonObjet16.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 16");
        }, this);
        this.arrayTexteButtons.push("Bouton16");
        this.arrayButtons.push(this.boutonObjet16);
        this.boutonObjet16.visible = false;

        this.boutonObjet17 = new Button({
            'scene': this,
            'key': 'recBleuMarine',
            'x': 380,
            'y': 320
        });
        this.boutonObjet17.setScale(0.2, 0.15);
        this.boutonObjet17.on('pointerdown', function () {

            console.log('%c%s', 'color: #00b300', "click sur bouton 17");
        }, this);
        this.arrayTexteButtons.push("Bouton17");
        this.arrayButtons.push(this.boutonObjet17);
        this.boutonObjet17.visible = false;
*/
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