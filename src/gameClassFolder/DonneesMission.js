class DonneesMission {

    constructor() {

        this.arrayMissions = new Array(5);

        this.arrayOfArrayArgentRecu = [this.arrayMissions.length];
        this.arrayPrixAffiche = [this.arrayMissions.length];
        this.arrayPrixAttendu = [this.arrayMissions.length];
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

            this.arrayParamMission = new Array(7);

            this.arrayArgentRecu = new Array(7);
            this.arrayArgentRecu[0] = this.arrayOfArrayArgentRecu[i][0];
            this.arrayArgentRecu[1] = this.arrayOfArrayArgentRecu[i][1];
            this.arrayArgentRecu[2] = this.arrayOfArrayArgentRecu[i][2];
            this.arrayArgentRecu[3] = this.arrayOfArrayArgentRecu[i][3];
            this.arrayArgentRecu[4] = this.arrayOfArrayArgentRecu[i][4];
            this.arrayArgentRecu[5] = this.arrayOfArrayArgentRecu[i][5];
            this.arrayArgentRecu[6] = this.arrayOfArrayArgentRecu[i][6];

            this.arrayParamMission[0] = this.arrayArgentRecu;
            this.arrayParamMission[1] = this.arrayPrixAffiche[i];
            this.arrayParamMission[2] = this.arrayConsigne[i];
            this.arrayParamMission[3] = this.arrayTxtSantaGiveMission[i];
            this.arrayParamMission[4] = this.arrayTxtSantaFinishMission[i];
            this.arrayParamMission[5] = this.arrayTxtSantaInMission[i];
            this.arrayParamMission[6] = this.arrayPrixAttendu[i];

            this.arrayMissions[i] = this.arrayParamMission;

        }

    }

    remplirTableaux() {

        for (var i = 0; i < this.arrayMissions.length; i++) {

            this.remplirArrayOfArrayArgentRecu(i);
            this.remplirArrayPrixAffiche(i);
            this.remplirArrayConsigne(i);
            this.remplirArrayTxtSantaGiveMission(i);
            this.remplirArrayTxtSantaFinishMission(i);
            this.remplirArrayTxtSantaInMission(i);
            this.remplirArrayPrixAttendu(i);

        }
    }

    remplirArrayOfArrayArgentRecu(numCase) {

        switch (numCase) {
            case 0:
                this.arrayOfArrayArgentRecu[numCase] = [0, 0, 2, 1, 0, 0, 0];
                break;
            case 1:
                this.arrayOfArrayArgentRecu[numCase] = [0, 0, 2, 1, 1, 0, 0];
                break;
            case 2:
                this.arrayOfArrayArgentRecu[numCase] = [0, 5, 1, 1, 0, 0, 0];
                break;
            case 3:
                this.arrayOfArrayArgentRecu[numCase] = [10, 0, 0, 0, 0, 0, 0];
                break;
            case 4:
                this.arrayOfArrayArgentRecu[numCase] = [5, 5, 3, 3, 1, 0, 0];
                break;

            default:
                console.log("ERREUR remplirArrayOfArrayArgentRecu " + numCase);
        }

    }

    remplirArrayPrixAffiche(numCase) {

        switch (numCase) {
            case 0:
                this.arrayPrixAffiche[numCase] = "15€";
                break;
            case 1:
                this.arrayPrixAffiche[numCase] = "25€";
                break;
            case 2:
                this.arrayPrixAffiche[numCase] = "18€";
                break;
            case 3:
                this.arrayPrixAffiche[numCase] = "???";
                break;
            case 4:
                this.arrayPrixAffiche[numCase] = "4x20€";
                break;

            default:
                console.log("ERREUR remplirArrayPrixAffiche " + numCase);
        }

    }

    remplirArrayConsigne(numCase) {

        switch (numCase) {
            case 0:
                this.arrayConsigne[numCase] = "Clique sur un billet de la zone bleu pour le mettre dans la zone jaune.\nQuand tu pense avoir mis le bon nombre de billet, valide avec le\nbouton rouge. Clique sur les fleches pour revenir en arrière.";
                break;
            case 1:
                this.arrayConsigne[numCase] = "Seulement 25€ pour cette clochette magique, ça c'est une affaire!";
                break;

            case 2:
                this.arrayConsigne[numCase] = "Je vois que tu as ramené des pièces aujourd'hui!";
                break;
            case 3:
                this.arrayConsigne[numCase] = "On m'a déjà donné 6€ pour cet objet qui coute 10€.\nCombien dois-tu me donner pour finaliser cet achat?";
                break;
            case 4:
                this.arrayConsigne[numCase] = "80 se dit \"quatre-vingts\" en France et en Belgique, mais \"huitante\" ou\n\"octante\" en Suisse. Pourtant tous ces pays parlent français!\nBref, 80€ s'il vous plaît."
                break;

            default:
                console.log("ERREUR remplirArrayConsigne " + numCase);
        }

    }

    remplirArrayTxtSantaGiveMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaGiveMission[numCase] = "Salut toi! J'aurais bien besoin de ton aide. Je suis débordé de travail,\net je n'ai pas le temps pour aller chercher un colis à la boutique.\nVoici un peu d'argent, tu peut aller t'en charger?";
                break;
            case 1:
                this.arrayTxtSantaGiveMission[numCase] = "Ouf, te revoila, j'ai justement besoin de toi.\nUne des clochettes de mon traîneau est cassée, peux-tu aller en\nacheter une autre? Si tu y arrive sans te tromper, je te donnerais même\nune pièce étoile!";
                break;
            case 2:
                this.arrayTxtSantaGiveMission[numCase] = "Tu dois bien aimer les pièces étoiles pour revenir me voir!\nEt ça tombe bien j'ai encore besoin de toi!\nJ'aimerais que tu aille m'acheter un marteau cette fois s'il te plait.";
                break;
            case 3:
                this.arrayTxtSantaGiveMission[numCase] = "J'aurais bien besoin de piles pour ma prochaine création.\nTu peut t'en charger?";
                break;
            case 4:
                this.arrayTxtSantaGiveMission[numCase] = "Mon ami Rudolphe, le renne au nez rouge, m'a demandé si je\npouvait lui apporter des carottes pour lui et les autres rennes.\nTu peut aller me les chercher?";
                break;

            default:
                console.log("ERREUR remplirArrayTxtSantaGiveMission " + numCase);
        }


    }

    remplirArrayTxtSantaFinishMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour ton aide! Reviens me voir quand tu peut!";
                break;
            case 1:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour cette clochette!\nMon traîneau retrouve sa splendeur!\nReviens me voir quand tu peut!";
                break;
            case 2:
                this.arrayTxtSantaFinishMission[numCase] = "Merci!\n\nAu fait, il parait qu'un certain lutin aime beaucoup les pièces étoiles...\nTu devrait aller lui rendre visite à l'occasion!";
                break;
            case 3:
                this.arrayTxtSantaFinishMission[numCase] = "Je ne t'avais pas dit que j'avais déjà payé une partie des piles?\nEn tous cas merci de t'en être occupé!";
                break;
            case 4:
                this.arrayTxtSantaFinishMission[numCase] = "On dirais que cette fois je t'avais donné l'appoint!";
                break;

            default:
                console.log("ERREUR remplirArrayTxtSantaFinishMission " + numCase);
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
            case 2:
                this.arrayTxtSantaInMission[numCase] = "Avec tout ce travail, heureusement que tu est là pour m'aider!";
                break;
            case 3:
                this.arrayTxtSantaInMission[numCase] = "Ces piles sont rechargeables, je n'aurais plus besoin d'en acheter\n avant un moment. Je compte sur toi!";
                break;
            case 4:
                this.arrayTxtSantaInMission[numCase] = "Rudolphe adore les carottes bio. Il a bien raison!";
                break;

            default:
                console.log("ERREUR remplirArrayTxtSantaInMission " + numCase);
        }

    }

    remplirArrayPrixAttendu(numCase) {

        switch (numCase) {
            case 0:
                this.arrayPrixAttendu[numCase] = 15;
                break;
            case 1:
                this.arrayPrixAttendu[numCase] = 25;
                break;
            case 2:
                this.arrayPrixAttendu[numCase] = 18;
                break;
            case 3:
                this.arrayPrixAttendu[numCase] = 4;
                break;
            case 4:
                this.arrayPrixAttendu[numCase] = 80;
                break;

            default:
                console.log("ERREUR remplirArrayPrixAttendu " + numCase);
        }

    }

}