class DonneesMission {

    constructor() {

        this.arrayMissions = new Array(5);

        this.arrayOfArrayArgentRecu = [this.arrayMissions.length];
        this.arrayPrixAffiche = [this.arrayMissions.length];
        this.arrayPrixAttendu = [this.arrayMissions.length];
        this.arrayConsigne = [this.arrayMissions.length];
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

            for(var n=0 ; n<this.arrayArgentRecu.length ;  n++){
                this.arrayArgentRecu[n] = this.arrayOfArrayArgentRecu[i][n];
            }

            this.arrayParamMission[0] = this.arrayArgentRecu;
            this.arrayParamMission[1] = this.arrayPrixAffiche[i];
            this.arrayParamMission[2] = this.arrayConsigne[i];
            this.arrayParamMission[4] = this.arrayTxtSantaFinishMission[i];
            this.arrayParamMission[5] = this.arrayTxtSantaInMission[i];
            this.arrayParamMission[6] = this.arrayPrixAttendu[i];

            this.arrayMissions[i] = this.arrayParamMission;

        }
            this.arrayMissions[0][3] = "Salut toi! Tu es nouveau par ici? J'aurais bien besoin de ton aide.\n\nJe suis débordé de travail, et je n'ai pas le temps pour aller chercher\nles outils et matériaux dont j'ai besoin pour fabriquer les objets\ndes enfants.\nTu voudrais bien m'aider?\n\nSi tu travaille bien, je te donnerais même des pièces étoile!\n\nTiens, voici un peu d'argent, peux-tu aller me chercher une boite\nde tournevis dans la boutique? C'est l'igloo qui est à droite de ma maison.";

    }

    remplirTableaux() {

        for (var i = 0; i < this.arrayMissions.length; i++) {

            this.remplirArrayOfArrayArgentRecu(i);
            this.remplirArrayPrixAffiche(i);
            this.remplirArrayConsigne(i);
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
                this.arrayConsigne[numCase] = "Clique sur un billet de la zone bleu pour le mettre dans la zone jaune.\nQuand tu penses avoir mis le bon nombre de billets, valide avec\nle bouton rouge. Clique sur les flèches pour revenir en arrière.";
                break;
            case 1:
                this.arrayConsigne[numCase] = "Seulement 25€ pour cette clochette magique, ça c'est une affaire!";
                break;
            case 2:
                this.arrayConsigne[numCase] = "Je vois que tu as ramené des pièces aujourd'hui!";
                break;
            case 3:
                this.arrayConsigne[numCase] = "On m'a déjà donné 6€ pour cet objet qui coûte 10€.\nCombien dois-tu me donner pour finaliser cet achat?";
                break;
            case 4:
                this.arrayConsigne[numCase] = "80 se dit \"quatre-vingts\" en France et en Belgique, mais \"huitante\" ou\n\"octante\" en Suisse. Pourtant tous ces pays parlent français!\nBref, 80€ s'il vous plaît."
                break;
            default:
                console.log("ERREUR remplirArrayConsigne " + numCase);
        }

    }

    remplirArrayTxtSantaFinishMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour ton aide! Je suis sûre que l'on va bien s'entendre tous les deux!\n\nSans transition, j'aurai bien besoin que tu ailles me chercher une\nclochette magique, celle qui était sur mon traîneau s'est cassée...\nTiens, voici un peu d'argent.";
                break;
            case 1:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour cette clochette!\nMon traîneau retrouve sa splendeur!\n\nDis-moi, aurais-tu vu mon marteau par hasard? Non?\nBon et bien il va falloir que j'en achète un nouveau. Tu t'en charge?";
                break;
            case 2:
                this.arrayTxtSantaFinishMission[numCase] = "Merci!\n\nAu fait, il parait qu'un certain lutin aime beaucoup les pièces étoiles...\nTu devrais aller lui rendre visite à l'occasion!\n\nPeux-tu aller me chercher des piles?\nJ'en ai besoin pour faire rouler cette voiture électrique.";
                break;
            case 3:
                this.arrayTxtSantaFinishMission[numCase] = "Je ne t'avais pas dit que j'avais déjà payé une partie des piles?\nEn tous cas merci de t'en être occupé!\n\nEs-tu allé voir le lutin marchand?\nJe suis sur que tu veut avoir pleins de pièces étoiles maintenant!\n\nMon ami Rudolphe, le renne au nez rouge, m'a demandé si je\npouvais lui apporter des carottes pour lui et les autres rennes.\nTu peux aller me les chercher?";
                break;
            case 4:
                this.arrayTxtSantaFinishMission[numCase] = "On dirait que cette fois je t'avais donné l'appoint!";
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
                this.arrayTxtSantaInMission[numCase] = "L'igloo dans lequel se trouve la boutique est magique,\nil parait petit vu de l'extérieur, mais il est très grand à l'intérieur!";
                break;
            case 2:
                this.arrayTxtSantaInMission[numCase] = "Avec tout ce travail, heureusement que tu es là pour m'aider!";
                break;
            case 3:
                this.arrayTxtSantaInMission[numCase] = "Ces piles sont rechargeables, je n'aurai plus besoin d'en acheter\n avant un moment. Je compte sur toi!";
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