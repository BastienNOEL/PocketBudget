class LutinShopScene extends Phaser.Scene {
    constructor() {
        super("LutinShop");
    }

    create() {

        this.xValue = 150;
        this.yValue = 320;
        this.counterX = 1;
        this.counterElemInOnePage = 1;

        this.arrayPages = [];
        this.arrayOnePage = [];
        this.arrayButtonsOnePage = [];
        this.arrayTxtButtonsOnePage = [];

        this.nbPages = Math.ceil(dataShop.arrayObjetDeco.length / 8);


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

        for (var i = 0; i < dataShop.arrayObjetDeco.length; i++) {


            if ((i) % 8 == 0) {
                this.yValue = 320;
            } else if ((i) % 4 == 0) {
                this.yValue = 420;
            }

            if (this.counterX == 1) {
                this.xValue = 150;
            } else if (this.counterX == 2) {
                this.xValue = 380;
            } else if (this.counterX == 3) {
                this.xValue = 610;
            } else if (this.counterX == 4) {
                this.xValue = 840;
            }

            this.counterX++;

            if (this.counterX == 5) {
                this.counterX = 1;
            }

            this.boutonObjet = new Button({
                'scene': this,
                'key': 'recBleuMarine',
                'x': this.xValue,
                'y': this.yValue,
            });
            this.boutonObjet.setScale(0.2, 0.15);
            this.boutonObjet.on('pointerdown', dataShop.arrayObjetDeco[i][1][0], this);

            if (i <= 7) {
                this.boutonObjet.visible = true;
            } else {
                this.boutonObjet.visible = false;

            }

            this.arrayButtonsOnePage.push(this.boutonObjet);
            this.arrayTxtButtonsOnePage.push(dataShop.arrayObjetDeco[i][0]);

            if (this.counterElemInOnePage == 8) {
                this.arrayOnePage.push(this.arrayButtonsOnePage);
                this.arrayOnePage.push(this.arrayTxtButtonsOnePage);
                this.arrayPages.push(this.arrayOnePage);

                this.arrayButtonsOnePage = [];
                this.arrayTxtButtonsOnePage = [];
                this.arrayOnePage = [];
            }

            this.counterElemInOnePage++;

            if (this.counterElemInOnePage == 9) {
                this.counterElemInOnePage = 1;
            }
        }

        this.arrayOnePage.push(this.arrayButtonsOnePage);
        this.arrayOnePage.push(this.arrayTxtButtonsOnePage);
        this.arrayPages.push(this.arrayOnePage);

        this.txtContainerB0 = this.add.container(150, 320);
        this.txtContainerB1 = this.add.container(380, 320);
        this.txtContainerB2 = this.add.container(610, 320);
        this.txtContainerB3 = this.add.container(840, 320);
        this.txtContainerB4 = this.add.container(150, 420);
        this.txtContainerB5 = this.add.container(380, 420);
        this.txtContainerB6 = this.add.container(610, 420);
        this.txtContainerB7 = this.add.container(840, 420);

        this.arrayLocalTxtBouton = [];

        for (var i = 0; i < this.arrayPages[0][1].length; i++) {

            this.txtBouton = this.add.text(0, 0, this.arrayPages[0][1][i], {
                fill: "black",
                font: '25px Arial'
            });
            this.txtBouton.setOrigin(0.5, 0.5);
            this.arrayLocalTxtBouton.push(this.txtBouton);

            switch (i) {
                case 0:
                    this.txtContainerB0.add(this.txtBouton);
                    break;
                case 1:
                    this.txtContainerB1.add(this.txtBouton);
                    break;
                case 2:
                    this.txtContainerB2.add(this.txtBouton);
                    break;
                case 3:
                    this.txtContainerB3.add(this.txtBouton);
                    break;
                case 4:
                    this.txtContainerB4.add(this.txtBouton);
                    break;
                case 5:
                    this.txtContainerB5.add(this.txtBouton);
                    break;
                case 6:
                    this.txtContainerB6.add(this.txtBouton);
                    break;
                case 7:
                    this.txtContainerB7.add(this.txtBouton);
                    break;

                default:
                    console.log("ERREUR remplissage de txtContainer" + i);
            }
        }

        this.echapButton = this.input.keyboard.addKey('ESC');

    }



    update() {
        if (this.echapButton.isDown) {
            this.backTravel();
        }
    }


    pageSuivante() {

        for (var i = 0; i < this.arrayPages[this.indexPage - 1][0].length; i++) {
            this.arrayPages[this.indexPage - 1][0][i].visible = false;
            this.arrayLocalTxtBouton[i].text = this.arrayPages[this.indexPage][1][i];
        }

        for (var i = 0; i < this.arrayPages[this.indexPage][0].length; i++) {
            this.arrayPages[this.indexPage][0][i].visible = true;
        }

        this.indexPage++;
        this.txtIndexPage.text = this.indexPage;
        this.boutonPrecedent.visible = true;

        if (this.indexPage == this.nbPages) {
            this.boutonSuivant.visible = false;
        }
    }

    pagePrecedente() {

        for (var i = 0; i < this.arrayPages[this.indexPage - 1][0].length; i++) {
            this.arrayPages[this.indexPage - 1][0][i].visible = false;
        }

        for (var i = 0; i < this.arrayPages[this.indexPage - 2][0].length; i++) {
            this.arrayPages[this.indexPage - 2][0][i].visible = true;
            this.arrayLocalTxtBouton[i].text = this.arrayPages[this.indexPage - 2][1][i];
        }

        this.indexPage--;
        this.txtIndexPage.text = this.indexPage;
        this.boutonSuivant.visible = true;

        if (this.indexPage == 1) {
            this.boutonPrecedent.visible = false;
        }
    }

    validerTransaction() {

        console.log("vous appuyez sur le bouton de validation");
    }

    backTravel() {
        this.scene.start("Travel");
    }

}