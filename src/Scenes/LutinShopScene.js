//Cette scene represente l'écran des échange de décorations avec le lutin marchand

class LutinShopScene extends Phaser.Scene {
    constructor() {
        super("LutinShop");
    }

    create() {

        this.indexPage = localStorage.getItem('indexPage');


        this.xValue = 150;
        this.yValue = 320;
        this.counterX = 1;
        this.counterElemInOnePage = 1;
        this.echapButton = this.input.keyboard.addKey('ESC');


        this.arrayPages = [];
        this.arrayOnePage = [];
        this.arrayButtonsOnePage = [];
        this.arrayTxtButtonsOnePage = [];

        this.arrayNameObject = [];
        this.arrayPriceObject = [];
        this.arrayDescriptionObject = [];


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


        this.boutonSuivant = new Button({
            'scene': this,
            'key': 'flecheDroite',
            'x': 550,
            'y': 500
        });
        this.boutonSuivant.setScale(0.2, 0.2);
        this.boutonSuivant.on('pointerdown', this.pageSuivante, this);

        this.txtContainerIndexPage = this.add.container(500, 500);

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

            this.boutonObjet.visible = false; // test

            this.arrayButtonsOnePage.push(this.boutonObjet);
            this.arrayTxtButtonsOnePage.push(dataShop.arrayObjetDeco[i][0]);
            this.arrayNameObject.push(dataShop.arrayObjetDeco[i][0]);
            this.arrayPriceObject.push(dataShop.arrayObjetDeco[i][2]);
            this.arrayDescriptionObject.push(dataShop.arrayObjetDeco[i][3]);

            if (this.counterElemInOnePage == 8) {
                this.arrayOnePage.push(this.arrayButtonsOnePage);
                this.arrayOnePage.push(this.arrayTxtButtonsOnePage);
                this.arrayPages.push(this.arrayOnePage);

                this.arrayButtonsOnePage = [];
                this.arrayTxtButtonsOnePage = [];

                this.arrayOnePage = [];

                this.counterElemInOnePage = 0;
            }

            this.counterElemInOnePage++;
        }

        this.arrayOnePage.push(this.arrayButtonsOnePage);
        this.arrayOnePage.push(this.arrayTxtButtonsOnePage);

        this.arrayPages.push(this.arrayOnePage);

        if (localStorage.getItem('Maison') == "VENDU") {
            for (var j = 0; j < this.arrayPages[this.indexPage - 1][0].length; j++) {
                this.arrayPages[this.indexPage - 1][0][j].visible = true;
            }
            if (parseInt(localStorage.getItem('lvPlayer')) <= 29) {

                this.arrayPages[3][0][5].visible = false;
                this.arrayPages[3][1][5] = "";

            }
        } else {
            this.arrayPages[this.indexPage - 1][0][0].visible = true;
        }


        this.num = 0;
        for (var i = 0; i < this.arrayPages.length; i++) {

            for (var j = 0; j < this.arrayPages[i][0].length; j++) {
                if (localStorage.getItem(dataShop.arrayObjetDeco[this.num][0]) == "VENDU") {
                    this.arrayPages[i][0][j].setTint(0xFBFF00);
                }
                this.num++;
            }
        }

        this.txtContainerB0 = this.add.container(150, 320);
        this.txtContainerB1 = this.add.container(380, 320);
        this.txtContainerB2 = this.add.container(610, 320);
        this.txtContainerB3 = this.add.container(840, 320);
        this.txtContainerB4 = this.add.container(150, 420);
        this.txtContainerB5 = this.add.container(380, 420);
        this.txtContainerB6 = this.add.container(610, 420);
        this.txtContainerB7 = this.add.container(840, 420);

        this.arrayLocalTxtBouton = [];

        if (localStorage.getItem('Maison') == "VENDU") {
            for (var i = 0; i < 8; i++) {

                if (localStorage.getItem(this.arrayPages[this.indexPage - 1][1][i]) != "VENDU") {

                    this.txtBouton = this.add.text(0, 0, localStorage.getItem(this.arrayPages[this.indexPage - 1][1][i]), {
                        fill: "black",
                        font: '20px Arial'
                    });
                    this.txtBouton.setOrigin(0.5, 0.5);
                    this.arrayLocalTxtBouton.push(this.txtBouton);
                } else {
                    this.txtBouton = this.add.text(0, 0, localStorage.getItem(this.arrayPages[this.indexPage - 1][1][i]), {
                        fill: "white",
                        font: '40px Arial'
                    });
                    this.txtBouton.setOrigin(0.5, 0.5);
                    this.arrayLocalTxtBouton.push(this.txtBouton);
                }
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

        } else {
            this.txtBouton = this.add.text(0, 0, localStorage.getItem(this.arrayPages[this.indexPage - 1][1][0]), {
                fill: "black",
                font: '20px Arial'
            });
            this.txtBouton.setOrigin(0.5, 0.5);
            this.arrayLocalTxtBouton.push(this.txtBouton);
            this.txtContainerB0.add(this.txtBouton);

        }


        if (localStorage.getItem('Maison') == "VENDU") {
            if (dataShop.arrayObjetDeco.length <= 8) {
                this.boutonSuivant.visible = false;
                this.txtIndexPage.visible = false;
            }

            if (this.indexPage > 1) {
                this.boutonPrecedent.visible = true;
            } else {
                this.boutonPrecedent.visible = false;
            }

            if (this.indexPage < this.arrayPages.length) {
                this.boutonSuivant.visible = true;
            } else {
                this.boutonSuivant.visible = false;
            }

        } else {
            this.boutonPrecedent.visible = false;
            this.boutonSuivant.visible = false;
            this.txtIndexPage.visible = false;
        }


        // zone bleu
        this.MyStarCoin = this.add.image(0, 0, 'starCoin');
        this.MyStarCoin.setScale(0.06, 0.06);

        this.txtCoin = this.add.text(0, 0, localStorage.getItem('nbStarCoin'), {
            fill: "black",
            font: "20px Arial"
        })
        this.txtCoin.setOrigin(0.5, 0.5);

        this.maZone.add(this.MyStarCoin);
        this.maZone.add(this.txtCoin);


        //zone rouge
        this.zonePrixTxt = this.add.container(325, 195);
        this.txtNameObject = this.add.text(0, 0, "Nom objet selectionné", {
            fill: "white",
            font: "50px Arial",
        })
        this.txtNameObject.setOrigin(0.5, 0.5);
        this.zonePrixTxt.add(this.txtNameObject);
        this.zonePrixTxt.visible = false;

        this.zonePrixStarCoin = this.add.container(700, 195);
        this.starCoinPrice = this.add.image(0, 0, 'starCoin');
        this.starCoinPrice.setScale(0.06, 0.06);
        this.txtCoinPrice = this.add.text(0, 0, localStorage.getItem('nbStarCoin'), {
            fill: "black",
            font: "20px Arial"
        })
        this.txtCoinPrice.setOrigin(0.5, 0.5);
        this.zonePrixStarCoin.add(this.starCoinPrice);
        this.zonePrixStarCoin.add(this.txtCoinPrice);
        this.zonePrixStarCoin.visible = false;

        //zone verte
        this.txtDescriptionObjet = this.add.text(0, 0, "", {
            fill: "black",
            font: "25px Arial",
        })
        if (localStorage.getItem('Maison') != "VENDU") {
            this.txtDescriptionObjet.text = "Bien le bonjour ! Je vends une sympathique maison, si tu veux plus\nd'informations n'hésite pas à cliquer sur le bouton bleu !";
        } else if ((localStorage.getItem('???') != "VENDU") && (parseInt(localStorage.getItem('lvPlayer')) > 29)) {
            this.txtDescriptionObjet.text = "J'ai une offre très spéciale aujourd'hui !\nSeuls les meilleurs coursiers du Père Noël peuvent y accéder !"
        } else {
            this.txtDescriptionObjet.text = "Quoi de neuf aujourd'hui ?"
        }
        this.txtDescriptionObjet.setOrigin(0.5, 0.5);
        this.zoneTexte.add(this.txtDescriptionObjet);
        this.txtDescriptionObjet.visible = true;


        this.lutinFace = this.add.image(960, 70, 'LutinMarchandFace');
        this.lutinFace.setScale(0.2, 0.2);
        this.lutinFace.visible = true;

    }

    update() {
        if (this.echapButton.isDown) {
            this.backTravel();
        }
        if (1 < this.indexPage && this.indexPage < this.arrayPages.length) {
            this.boutonSuivant.visible = true;
            this.boutonPrecedent.visible = true;
        }
    }

    /* permet de changer de page dans le catalogue des objets */
    pageSuivante() {

        for (var i = 0; i < this.arrayPages[this.indexPage - 1][0].length; i++) {
            this.arrayPages[this.indexPage - 1][0][i].visible = false;
            this.arrayLocalTxtBouton[i].text = localStorage.getItem(this.arrayPages[this.indexPage][1][i]);

            if (localStorage.getItem(this.arrayPages[this.indexPage][1][i]) == "VENDU") {
                this.arrayLocalTxtBouton[i].setColor("white");
                this.arrayLocalTxtBouton[i].setFont("50px Arial");
            } else {
                this.arrayLocalTxtBouton[i].setColor("black");
                this.arrayLocalTxtBouton[i].setFont("20px Arial");
            }
        }

        for (var i = 0; i < this.arrayPages[this.indexPage][0].length; i++) {
            this.arrayPages[this.indexPage][0][i].visible = true;

            if (parseInt(localStorage.getItem('lvPlayer')) <= 29) {
                this.arrayPages[3][0][5].visible = false;
            }
        }

        this.indexPage++;
        localStorage.setItem('indexPage', this.indexPage);
        this.txtIndexPage.text = this.indexPage;
        this.boutonPrecedent.visible = true;

        if (this.indexPage == this.nbPages) {
            this.boutonSuivant.visible = false;
        }
    }

    /* permet de revenir en arriere dans le catalogue des objets */
    pagePrecedente() {

        for (var i = 0; i < this.arrayPages[this.indexPage - 1][0].length; i++) {
            this.arrayPages[this.indexPage - 1][0][i].visible = false;
        }


        for (var i = 0; i < this.arrayPages[this.indexPage - 2][0].length; i++) {
            this.arrayPages[this.indexPage - 2][0][i].visible = true;
            this.arrayLocalTxtBouton[i].text = localStorage.getItem(this.arrayPages[this.indexPage - 2][1][i]);


            if (parseInt(localStorage.getItem('lvPlayer')) <= 29) {
                this.arrayPages[3][0][5].visible = false;
            }

            if (localStorage.getItem(this.arrayPages[this.indexPage - 2][1][i]) == "VENDU") {
                this.arrayLocalTxtBouton[i].setColor("white");
                this.arrayLocalTxtBouton[i].setFont("50px Arial"); //= "50px Arial"; 
            } else {
                this.arrayLocalTxtBouton[i].setColor("black");
                this.arrayLocalTxtBouton[i].setFont("20px Arial"); //= "20px Arial"; 
            }
        }

        this.indexPage--;
        localStorage.setItem('indexPage', this.indexPage);
        this.txtIndexPage.text = this.indexPage;
        this.boutonSuivant.visible = true;

        if (this.indexPage == 1) {
            this.boutonPrecedent.visible = false;
        }
    }

    /* verifie si une trasction est possible, et si c'est le cas l'effectue lorsque le joueur clique sur le bouton de validation */
    validerTransaction() {

        console.log("vous appuyez sur le bouton de validation");
        if (localStorage.getItem(dataShop.arrayObjetDeco[localStorage.getItem("indexObjetSelectionne")][0]) != "VENDU") {

            if (this.arrayPriceObject[localStorage.getItem("indexObjetSelectionne")] <= localStorage.getItem("nbStarCoin")) {

                localStorage.setItem("nbStarCoin", localStorage.getItem("nbStarCoin") - this.arrayPriceObject[localStorage.getItem("indexObjetSelectionne")]);
                this.txtCoin.text = localStorage.getItem("nbStarCoin");

                localStorage.setItem(dataShop.arrayObjetDeco[localStorage.getItem("indexObjetSelectionne")][0], "VENDU");

                this.scene.restart();
                console.log('%c%s', 'color: #4507f1', "achat reussi");
            } else {
                console.log('%c%s', 'color: #cc0036', "achat impossible, pas assez de pieces ");
                this.txtDescriptionObjet.text = "Tu n'as pas assez de pièces étoiles pour faire cet achat !"

            }
        } else {
            console.log('%c%s', 'color: #cc0036', "achat impossible, deja acheté");
        }
    }

    /* revien a la scene "Travel" */
    backTravel() {
        localStorage.setItem('indexPage', 1);
        this.scene.start("Travel");
    }
}