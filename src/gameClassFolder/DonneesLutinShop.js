class DonneesLutinShop {

    constructor() {

        this.arrayObjetDeco = new Array(16);

        this.arrayNomObjet = new Array(this.arrayObjetDeco.length);
        this.arrayParamBoutonObjet = new Array(this.arrayObjetDeco.length);

        this.initTableaux();
        this.createDatas();
        
    }

    createDatas() {

        for (var i = 0; i < this.arrayObjetDeco.length; i++) {
            this.arrayZoneBouton = new Array(2);

            this.arrayZoneBouton[0] = this.arrayNomObjet[i];
            this.arrayZoneBouton[1] = this.arrayParamBoutonObjet[i];


            this.arrayObjetDeco[i] = this.arrayZoneBouton;
        }
    }


    initTableaux() {

        for (var i = 0; i < this.arrayObjetDeco.length; i++) {

            this.remplirArrayNomObjet(i);
            this.remplirArrayParamBoutonObjet(i);

        }
    }

    remplirArrayNomObjet(numCase) {

        this.arrayNomObjet[numCase] = "Objet" + numCase;
        /*
                switch (numCase) {
                    case 0:
                        this.arrayNomObjet[numCase] = "Objet" + numCase;
                        break;
                    case 1:
                        this.arrayNomObjet[numCase] = "Objet" + numCase;
                        break;

                    default:
                        console.log("ERREUR remplirArrayNomObje(" + numCase + ")");
                }
                */

    }

    remplirArrayParamBoutonObjet(numCase) {

        switch (numCase) {
            case 0:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #d90000', "bouton 0 ");
                }];
                break;
            case 1:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 1");
                }];
                break;

            case 2:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 2");
                }];
                break;

            case 3:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 3");
                }];
                break;

            case 4:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 4");
                }];
                break;

            case 5:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 5");
                }];
                break;

            case 6:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 6");
                }];
                break;

            case 7:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 7");
                }];
                break;

            case 8:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 8");
                }];
                break;

            case 9:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 9");
                }];
                break;
            case 10:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 10");
                }];
                break;
            case 11:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 11");
                }];
                break;
            case 12:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 12");
                }];
                break;
            case 13:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 13");
                }];
                break;
            case 14:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 14");
                }];
                break;
            case 15:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 15");
                }];
                break;
            case 16:
                this.arrayParamBoutonObjet[numCase] = [function () {

                    console.log('%c%s', 'color: #00b300', "click sur bouton 16");
                }];
                break;

            default:
                console.log("ERREUR remplirArrayParamBoutonObjet(" + numCase + ")");
        }

    }
}