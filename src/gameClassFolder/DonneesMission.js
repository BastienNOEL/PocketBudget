class DonneesMission {

    constructor() {

        this.arrayMissions = new Array(2);

        this.arrayOfArrayArgentRecu = [this.arrayMissions.length];
        this.arrayPrix = [this.arrayMissions.length];
        this.arrayConsigne = [this.arrayMissions.length];
        this.arrayTxtSantaGiveMission = [this.arrayMissions.length];
        this.arrayTxtSantaFinishMission = [this.arrayMissions.length];
        this.arrayTxtSantaInMission = [this.arrayMissions.length];

        this.remplirTableaux();
        this.creerDonnees();

    }

    creerDonnees() {

        var j = this.arrayMissions.length;

        for (var i = 0; i < j; i++) {

            this.arrayParamMission = new Array(6);
          
            this.arrayArgentRecu = new Array(7);
            this.arrayArgentRecu[0] = this.arrayOfArrayArgentRecu[i][0];
            this.arrayArgentRecu[1] = this.arrayOfArrayArgentRecu[i][1];
            this.arrayArgentRecu[2] = this.arrayOfArrayArgentRecu[i][2];
            this.arrayArgentRecu[3] = this.arrayOfArrayArgentRecu[i][3];
            this.arrayArgentRecu[4] = this.arrayOfArrayArgentRecu[i][4];
            this.arrayArgentRecu[5] = this.arrayOfArrayArgentRecu[i][5];
            this.arrayArgentRecu[6] = this.arrayOfArrayArgentRecu[i][6];

            this.arrayParamMission[0] = this.arrayArgentRecu;
            this.arrayParamMission[1] = this.arrayPrix[i];
            this.arrayParamMission[2] = this.arrayConsigne[i];
            this.arrayParamMission[3] = this.arrayTxtSantaGiveMission[i];
            this.arrayParamMission[4] = this.arrayTxtSantaFinishMission[i];
            this.arrayParamMission[5] = this.arrayTxtSantaInMission[i];

            this.arrayMissions[i] = this.arrayParamMission;

        }

    }

    remplirTableaux() {

        for (var i = 0; i < this.arrayMissions.length; i++) {

            this.remplirArrayOfArrayArgentRecu(i);
            this.remplirArrayPrix(i);
            this.remplirArrayConsigne(i);
            this.remplirArrayTxtSantaGiveMission(i);
            this.remplirArrayTxtSantaFinishMission(i);
            this.remplirArrayTxtSantaInMission(i);

        }
    }

    remplirArrayOfArrayArgentRecu(numCase) {

        switch (numCase) {
            case 0:
                this.arrayOfArrayArgentRecu[numCase] = [0,0,2, 1, 0, 0, 0];
                break;
            case 1:
                this.arrayOfArrayArgentRecu[numCase] = [0,0,2, 1, 1, 0, 0];
                break;

            default:
                console.log("ERREUR");
        }

    }

    remplirArrayPrix(numCase) {

        switch (numCase) {
            case 0:
                this.arrayPrix[numCase] = 15;
                break;
            case 1:
                this.arrayPrix[numCase] = 25;
                break;

            default:
                console.log("ERREUR");
        }

    }

    remplirArrayConsigne(numCase) {

        switch (numCase) {
            case 0:
                this.arrayConsigne[numCase] = "Clique sur un billet de la zone bleu pour le mettre dans la zone jaune.\nQuand tu pense avoir mis le bon nombre de billet, valide avec le\nbouton rouge.\nClique sur les fleches pour revenir en arrière.";
                break;
            case 1:
                this.arrayConsigne[numCase] = "25€ S'il vous plaît.";
                break;

            default:
                console.log("ERREUR");
        }

    }

    remplirArrayTxtSantaGiveMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaGiveMission[numCase] = "Prends cet argent et va me chercher du bois dans l'igloo.";
                break;
            case 1:
                this.arrayTxtSantaGiveMission[numCase] = "J'ai besoins que tu aille me chercher une clochette dans la boutique\navec cet argent.";
                break;

            default:
                console.log("ERREUR");
        }


    }

    remplirArrayTxtSantaFinishMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour ton aide! Reviens me voir quand tu peut!";
                break;
            case 1:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour cette clochette! Reviens me voir quand tu peut!";
                break;

            default:
                console.log("ERREUR");
        }

    }

    remplirArrayTxtSantaInMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaInMission[numCase] = "La boutique se trouve dans l'igloo.";
                break;
            case 1:
                this.arrayTxtSantaInMission[numCase] = "Va voir dans l'igloo pour acheter la clochette.";
                break;

            default:
                console.log("ERREUR");
        }

    }

}