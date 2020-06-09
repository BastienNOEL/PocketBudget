class DonneesLutinShop {

    constructor() {

        this.arrayObjetDeco = new Array(17);

        this.arrayNomObjet = new Array(this.arrayObjetDeco.length);
        this.arrayParamBoutonObjet = new Array(this.arrayObjetDeco.length);
        this.arrayPrixObjet = new Array(this.arrayObjetDeco.length);
        this.arrayDescriptionObjet = new Array(this.arrayObjetDeco.length);

        this.initTableaux();
        this.createDatas();

    }

    createDatas() {

        for (var i = 0; i < this.arrayObjetDeco.length; i++) {
            this.arrayZoneBouton = new Array(5);

            this.arrayZoneBouton[0] = this.arrayNomObjet[i];
            this.arrayZoneBouton[1] = this.arrayParamBoutonObjet[i];
            this.arrayZoneBouton[2] = this.arrayPrixObjet[i];
            this.arrayZoneBouton[3] = this.arrayDescriptionObjet[i];

            this.arrayObjetDeco[i] = this.arrayZoneBouton;
        }
    }


    initTableaux() {

        for (var i = 0; i < this.arrayObjetDeco.length; i++) {

            this.remplirArrayNomObjet(i);
            this.remplirArrayParamBoutonObjet(i);
            this.remplirArrayPrixObjet(i);
            this.remplirArrayDescriptionObjet(i);
        }
    }

    remplirArrayParamBoutonObjet(numCase) {

        this.arrayParamBoutonObjet[numCase] = [function () {

            console.log('%c%s', 'color: #d90000', "bouton " + numCase);

            localStorage.setItem('indexObjetSelectionne', numCase);

            this.txtNameObject.text = this.arrayNameObject[numCase];
            this.txtCoinPrice.text = this.arrayPriceObject[numCase];
            this.txtDescriptionObjet.text = this.arrayDescriptionObject[numCase];

            if (localStorage.getItem(dataShop.arrayObjetDeco[localStorage.getItem("indexObjetSelectionne")][0]) != "VENDU") {

                this.zonePrixTxt.visible = true;
                this.zonePrixStarCoin.visible = true;
                this.txtDescriptionObjet.visible = true;
            } else {
                this.zonePrixTxt.visible = false;
                this.zonePrixStarCoin.visible = false;
                this.txtDescriptionObjet.visible = false;
            }

        }];

    }

    remplirArrayNomObjet(numCase) {

        //this.arrayNomObjet[numCase] = "Objet" + numCase;

        switch (numCase) {
            case 0:
                this.arrayNomObjet[numCase] = "Maison";
                break;
            case 1:
                this.arrayNomObjet[numCase] = "Sapin";
                break;
            case 2:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 3:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 4:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 5:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 6:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 7:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 8:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 9:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 10:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 11:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 12:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 13:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 14:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 15:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;
            case 16:
                this.arrayNomObjet[numCase] = "Objet" + numCase;
                break;

            default:
                console.log("ERREUR remplirArrayNomObje(" + numCase + ")");
        }


    }

    remplirArrayPrixObjet(numCase) {

        switch (numCase) {
            case 0:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 1:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 2:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 3:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 4:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 5:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 6:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 7:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 8:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 9:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 10:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 11:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 12:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 13:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 14:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 15:
                this.arrayPrixObjet[numCase] = 1;
                break;
            case 16:
                this.arrayPrixObjet[numCase] = 1;
                break;

            default:
                console.log("ERREUR remplirArrayPrixObjet(" + numCase + ")");
        }

    }

    remplirArrayDescriptionObjet(numCase) {

        switch (numCase) {
            case 0:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 1:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 2:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 3:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 4:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 5:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 6:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 7:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 8:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 9:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 10:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 11:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 12:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 13:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 14:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 15:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;
            case 16:
                this.arrayDescriptionObjet[numCase] = "description objet" + numCase;
                break;

            default:
                console.log("ERREUR remplirArrayDescriptionObjet(" + numCase + ")");
        }

    }
}