class DonneesMission {

    constructor() {

        this.arrayMissions = new Array(29);

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

            for (var n = 0; n < this.arrayArgentRecu.length; n++) {
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
        this.arrayMissions[0][3] = "Salut toi ! Tu es nouveau par ici ? J'aurais bien besoin de ton aide.\n\nJe suis débordé de travail, et je n'ai pas le temps pour aller chercher\nles outils et matériaux dont j'ai besoin pour fabriquer les objets\ndes enfants.\nTu voudrais bien m'aider ?\n\nSi tu travailles bien, je te donnerai même des pièces étoiles !\n\nTiens, voici un peu d'argent, peux-tu aller me chercher une boite\nde tournevis dans la boutique ? C'est l'igloo qui est à droite de ma maison.";

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
            case 5:
                this.arrayPrixAttendu[numCase] = 47;
                break;
            case 6:
                this.arrayPrixAttendu[numCase] = 35;
                break;
            case 7:
                this.arrayPrixAttendu[numCase] = 54;
                break;
            case 8:
                this.arrayPrixAttendu[numCase] = 12;
                break;
            case 9:
                this.arrayPrixAttendu[numCase] = 33;
                break;
            case 10:
                this.arrayPrixAttendu[numCase] = 93;
                break;
            case 11:
                this.arrayPrixAttendu[numCase] = 42;
                break;
            case 12:
                this.arrayPrixAttendu[numCase] = 77;
                break;
            case 13:
                this.arrayPrixAttendu[numCase] = 30;
                break;
            case 14:
                this.arrayPrixAttendu[numCase] = 89;
                break;
            case 15:
                this.arrayPrixAttendu[numCase] = 103;
                break;
            case 16:
                this.arrayPrixAttendu[numCase] = 50;
                break;
            case 17:
                this.arrayPrixAttendu[numCase] = 10;
                break;
            case 18:
                this.arrayPrixAttendu[numCase] = 2;
                break;
            case 19:
                this.arrayPrixAttendu[numCase] = 123;
                break;
            case 20:
                this.arrayPrixAttendu[numCase] = 394;
                break;
            case 21:
                this.arrayPrixAttendu[numCase] = 777;
                break;
            case 22:
                this.arrayPrixAttendu[numCase] = 30;
                break;
            case 23:
                this.arrayPrixAttendu[numCase] = 4;
                break;
            case 24:
                this.arrayPrixAttendu[numCase] = 58;
                break;
            case 25:
                this.arrayPrixAttendu[numCase] = 111;
                break;
            case 26:
                this.arrayPrixAttendu[numCase] = 63;
                break;
            case 27:
                this.arrayPrixAttendu[numCase] = 861;
                break;
            case 28:
                this.arrayPrixAttendu[numCase] = 60;
                break;
            default:
                console.log("ERREUR remplirArrayPrixAttendu " + numCase);
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
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 4:
                this.arrayPrixAffiche[numCase] = "4x20€";
                break;
            case 5:
                this.arrayPrixAffiche[numCase] = "47€";
                break;
            case 6:
                this.arrayPrixAffiche[numCase] = "5x7€";
                break;
            case 7:
                this.arrayPrixAffiche[numCase] = "2x27€";
                break;
            case 8:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 9:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 10:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 11:
                this.arrayPrixAffiche[numCase] = "3x14€";
                break;
            case 12:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 13:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 14:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 15:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 16:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 17:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 18:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 19:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 20:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 21:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 22:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 23:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 24:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 25:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 26:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 27:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            case 28:
                this.arrayPrixAffiche[numCase] = "   ?";
                break;
            default:
                console.log("ERREUR remplirArrayPrixAffiche " + numCase);
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
            case 5:
                this.arrayOfArrayArgentRecu[numCase] = [3, 0, 5, 2, 0, 0, 0];
                break;
            case 6:
                this.arrayOfArrayArgentRecu[numCase] = [0, 0, 5, 5, 0, 0, 0];
                break;
            case 7:
                this.arrayOfArrayArgentRecu[numCase] = [0, 4, 1, 3, 2, 1, 0];
                break;
            case 8:
                this.arrayOfArrayArgentRecu[numCase] = [9, 0, 0, 4, 0, 0, 0];
                break;
            case 9:
                this.arrayOfArrayArgentRecu[numCase] = [6, 0, 0, 6, 0, 0, 0];
                break;
            case 10:
                this.arrayOfArrayArgentRecu[numCase] = [4, 6, 3, 5, 2, 0, 1];
                break;
            case 11:
                this.arrayOfArrayArgentRecu[numCase] = [0, 10, 10, 0, 0, 1, 0];
                break;
            case 12:
                this.arrayOfArrayArgentRecu[numCase] = [5, 5, 5, 5, 5, 0, 0];
                break;
            case 13:
                this.arrayOfArrayArgentRecu[numCase] = [5, 0, 8, 2, 0, 0, 0];
                break;
            case 14:
                this.arrayOfArrayArgentRecu[numCase] = [7, 0, 4, 5, 2, 0, 1];
                break;
            case 15:
                this.arrayOfArrayArgentRecu[numCase] = [20, 0, 0, 0, 0, 0, 1];
                break;
            case 16:
                this.arrayOfArrayArgentRecu[numCase] = [1, 1, 1, 1, 1, 1, 0];
                break;
            case 17:
                this.arrayOfArrayArgentRecu[numCase] = [5, 0, 1, 2, 0, 0, 0];
                break;
            case 18:
                this.arrayOfArrayArgentRecu[numCase] = [10, 0, 0, 0, 0, 0, 0];
                break;
            case 19:
                this.arrayOfArrayArgentRecu[numCase] = [5, 0, 2, 4, 3, 1, 2];
                break;
            case 20:
                this.arrayOfArrayArgentRecu[numCase] = [10, 10, 10, 10, 10, 10, 10];
                break;
            case 21:
                this.arrayOfArrayArgentRecu[numCase] = [10, 10, 10, 10, 10, 10, 10];
                break;
            case 22:
                this.arrayOfArrayArgentRecu[numCase] = [10, 0, 6, 5, 0, 0, 0];
                break;
            case 23:
                this.arrayOfArrayArgentRecu[numCase] = [5, 5, 5, 5, 5, 0, 0];
                break;
            case 24:
                this.arrayOfArrayArgentRecu[numCase] = [3, 3, 3, 3, 3, 1, 1];
                break;
            case 25:
                this.arrayOfArrayArgentRecu[numCase] = [5, 5, 5, 5, 5, 5, 2];
                break;
            case 26:
                this.arrayOfArrayArgentRecu[numCase] = [9, 0, 0, 9, 0, 0, 0];
                break;
            case 27:
                this.arrayOfArrayArgentRecu[numCase] = [10, 10, 10, 10, 10, 10, 10];
                break;
            case 28:
                this.arrayOfArrayArgentRecu[numCase] = [5, 0, 5, 9, 0, 0, 0];
                break;
            default:
                console.log("ERREUR remplirArrayOfArrayArgentRecu " + numCase);
        }

    }


    remplirArrayConsigne(numCase) {

        switch (numCase) {
            case 0:
                this.arrayConsigne[numCase] = "Clique sur un billet de la zone bleue pour le mettre dans la zone jaune.\nQuand tu penses avoir mis le bon nombre de billets, valide avec\nle bouton rouge. Clique sur les flèches pour revenir en arrière.";
                break;
            case 1:
                this.arrayConsigne[numCase] = "Seulement 25€ pour cette clochette magique, ça c'est une affaire !";
                break;
            case 2:
                this.arrayConsigne[numCase] = "Je vois que tu as ramené des pièces aujourd'hui !";
                break;
            case 3:
                this.arrayConsigne[numCase] = "On m'a déjà donné 6€ pour cet objet qui coûte 10€.\nCombien dois-tu me donner pour finaliser cet achat ?";
                break;
            case 4:
                this.arrayConsigne[numCase] = "80 se dit \"quatre-vingts\" en France et en Belgique, mais \"huitante\" ou\n\"octante\" en Suisse. Pourtant tous ces pays parlent français !\nBref, 80€ s'il vous plaît."
                break;
            case 5:
                this.arrayConsigne[numCase] = "Tu viens souvent par ici ces derniers temps !\nLe Père Noël t'a embauché ?"
                break;
            case 6:
                this.arrayConsigne[numCase] = "7€ l'unité. Tu en prends 5 ? Dans ce cas 5 x 7€ s'il te plaît."
                break;
            case 7:
                this.arrayConsigne[numCase] = "27€ l'unité. Tu en prends 2 ? Dans ce cas 2 x 27€ s'il te plaît."
                break;
            case 8:
                this.arrayConsigne[numCase] = "On m'a déjà donné 23€ pour cet objet qui coûte 35€.\nCombien dois-tu me donner pour finaliser cet achat ?"
                break;
            case 9:
                this.arrayConsigne[numCase] = "Il y a une promotion sur cet objet ! Il est à moitié prix !\nAvant, il coûtait 66€, combien coûte-t-il maintenant ?"
                break;
            case 10:
                this.arrayConsigne[numCase] = "On m'a déjà donné 25€ pour cet objet qui coûte 118€.\nCombien dois-tu me donner pour finaliser cet achat ?"
                break;
            case 11:
                this.arrayConsigne[numCase] = "14€ l'unité. Tu en prends 3 ? Dans ce cas 3 x 14€ s'il te plaît."
                break;
            case 12:
                this.arrayConsigne[numCase] = "Voyons voir cette liste...\nCela fera un total de 5€ + 19€ + 25€ + 28€ s'il te plaît."
                break;
            case 13:
                this.arrayConsigne[numCase] = "Pour 2 achetés, le 3ième est à moitié prix. Tu en prends 3?\nCet objet coûte 12€ l'unité, combien vaut le total?"
                break;
            case 14:
                this.arrayConsigne[numCase] = "6€ l'unité. Tu en prends 14 ? Et tu prends aussi cet objet à 5€ ?\nDans ce cas 14 x 6€ + 5€ s'il te plaît."
                break;
            case 15:
                this.arrayConsigne[numCase] = "11€ l'unité. Tu en prends 10 ? Il y a une réduction de 7€.\nDans ce cas 10 x 11€ - 7€ s'il te plaît."
                break;
            case 16:
                this.arrayConsigne[numCase] = "Voyons voir cette liste... Tu as le droit à une réduction.\nCela fera un total de 53€ + 29€ - 32€ s'il te plaît."
                break;
            case 17:
                this.arrayConsigne[numCase] = "Cet objet coûte 20€, mais il y a une réduction de 50%.\n20€ - 50% s'il te plaît."
                break;
            case 18:
                this.arrayConsigne[numCase] = "Cet objet coûte 10€, mais il y a une réduction de 80%.\n10€ - 80% s'il te plaît."
                break;
            case 19:
                this.arrayConsigne[numCase] = "Voyons voir cette liste...\nCela fera un total de 37€ + 42€ + 19€ + 25€ s'il te plaît."
                break;
            case 20:
                this.arrayConsigne[numCase] = "Le chiffre des centaines est égal au chiffre des unités -1.\nLe chiffre des dizaines est égal à 3 fois celui des centaines.\nLe chiffre des unités est égal à 5x2-6. Bon courage !"
                break;
            case 21:
                this.arrayConsigne[numCase] = "Le chiffre des centaines est égal au double du chiffre des unités moins\nle chiffre des dizaines.\nLe chiffre des dizaines est égal à 1+2x3.\nLe chiffre des unités est égal à 14 moins le chiffre des dizaines."
                break;
            case 22:
                this.arrayConsigne[numCase] = "Cet objet coûte 40€, mais il y a une réduction de 25%.\n40€ - 25% s'il te plaît."
                break;
            case 23:
                this.arrayConsigne[numCase] = "Le prix de cet objet est égal à 80 ÷ 20"
                break;
            case 24:
                this.arrayConsigne[numCase] = "On m'a déjà donné 97€ pour cet objet qui coûte 155€.\nCombien dois-tu me donner pour finaliser cet achat ?"
                break;
            case 25:
                this.arrayConsigne[numCase] = "13€ l'unité. Tu en prends 9 ? Il y a une réduction de 6€.\nDans ce cas 9 x 13€ - 6€ s'il te plaît."
                break;
            case 26:
                this.arrayConsigne[numCase] = "Pour 3 achetés, le 4ième est à moitié prix. Tu en prends 4?\nCet objet coûte 18€ l'unité, combien vaut le total?"
                break;
            case 27:
                this.arrayConsigne[numCase] = "Le chiffre des centaines est égal à 3x3 moins le chiffre des unités.\nLe chiffre des dizaines est égal à la moitié du chiffre des centaines +2.\nLe chiffre des unités est égal à 30÷30. Bon courage!"
                break;
            case 28:
                this.arrayConsigne[numCase] = "16€ l'unité. Tu en prends 5 ? Il y a une réduction de 25% sur le total.\nDans ce cas ( 5 x 16€ ) - 25% s'il te plaît."
                break;
            default:
                console.log("ERREUR remplirArrayConsigne " + numCase);
        }

    }

    remplirArrayTxtSantaFinishMission(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour ton aide ! Je suis sûr que l'on va bien s'entendre tous les deux !\n\nAllez, j'aurai bien besoin que tu ailles me chercher une\nclochette magique, celle qui était sur mon traîneau s'est cassée...\nTiens, voici un peu d'argent.";
                break;
            case 1:
                this.arrayTxtSantaFinishMission[numCase] = "Merci pour cette clochette !\nMon traîneau retrouve sa splendeur !\n\nDis-moi, aurais-tu vu mon marteau par hasard ? Non ?\nBon et bien il va falloir que j'en achète un nouveau. Tu t'en charges ?";
                break;
            case 2:
                this.arrayTxtSantaFinishMission[numCase] = "Merci !\n\nAu fait, il parait qu'un certain lutin aime beaucoup les pièces étoiles...\nTu devrais aller lui rendre visite à l'occasion !\n\nPeux-tu aller me chercher des piles ?\nJ'en ai besoin pour faire rouler cette voiture électrique.";
                break;
            case 3:
                this.arrayTxtSantaFinishMission[numCase] = "Je ne t'avais pas dit que j'avais déjà payé une partie des piles ?\nEn tous cas ,merci de t'en être occupé !\n\nEs-tu allé voir le lutin marchand ?\nJe suis sûr que tu veux avoir plein de pièces étoiles maintenant !\n\nMon ami Rudolphe, le renne au nez rouge, m'a demandé si je\npouvais lui apporter des carottes pour lui et les autres rennes.\nTu peux aller me les chercher ?";
                break;
            case 4:
                this.arrayTxtSantaFinishMission[numCase] = "On dirait que cette fois je t'avais donné l'appoint !\nLe hasard fait parfois bien les choses !\n\nVoici l'argent de ta prochaine mission, mais n'hésite pas à faire une pause\nde temps en temps ! Passe donc voir le lutin marchand par exemple !";
                break;
            case 5:
                this.arrayTxtSantaFinishMission[numCase] = "Que dirais-tu d'un contrat à plein temps ?\nCa ne serait qu'une formalité au vu de toute l'aide que\ntu m'as déjà fourni, mais tu seras le coursier officiel du Père Noël !\n\nC'est vrai tu veux bien ? OH OH OH ! J'en étais sûr !";
                break;
            case 6:
                this.arrayTxtSantaFinishMission[numCase] = "Voilà comment nous allons procéder désormais :\nlorsque tu viendras me voir, je te donnerai la liste de ce dont j'ai besoin.\nComme ça, tu sauras tout de suite ce qu'il faudra acheter !\nEt on pourra discuter d'autres choses entre amis !\nTiens, voici ta première liste officielle.";
                break;
            case 7:
                this.arrayTxtSantaFinishMission[numCase] = "Hmmmmmm... Oh  ! Je ne t'avais pas vu arriver  !\nJ'étais perdu dans mes pensées. Ma femme, la mère Noël,\nest partie ce matin pour quelques jours, pour aider un ami dans son travail.\n\nEt toi, comment vas-tu aujourd'hui  ? Prêt pour une nouvelle mission ?";
                break;
            case 8:
                this.arrayTxtSantaFinishMission[numCase] = "J'ai reçu une lettre de la mère Noël, elle est bien arrivée chez\nnotre ami ! Il y a très longtemps, c'était un dentiste,\nmais aujourd'hui il a changé de métier.";
                break;
            case 9:
                this.arrayTxtSantaFinishMission[numCase] = "J'avais préparé du gruyère pour notre ami, j'espère qu'il l'appréciera.\nIl adore le gruyère !";
                break;
            case 10:
                this.arrayTxtSantaFinishMission[numCase] = "Tu veux savoir comment s'appelle notre ami?\nTout le monde l'appelle \"La petite souris\", parcequ'il n'est pas grand\net que c'est... une souris.";
                break;
            case 11:
                this.arrayTxtSantaFinishMission[numCase] = "La mère Noël est rentrée tout à l'heure en utilisant\nun des passages secret de la petite souris.\nIl connaît énormément de raccourcis pour voyager à travers le monde!";
                break;
            case 12:
                this.arrayTxtSantaFinishMission[numCase] = "Généralement, j'attends que les enfants dorment avant de venir\ndéposer des cadeaux chez eux. Néanmoins, j'apprécie quand ils laissent\nun petit verre de lait, ou une carotte pour les rennes !";
                break;
            case 13:
                this.arrayTxtSantaFinishMission[numCase] = "Il y a quelques années, j'avais ouvert une ligne de train\nqui emmenait quelques enfants ici pour que je les rencontre.\nCette ligne s'appelait \"Le Pôle Express\" !";
                break;
            case 14:
                this.arrayTxtSantaFinishMission[numCase] = "\"Scintille, scintille, mon étoile ;\nqu'aucun nuage ne te voile.\"\n Oh, tu es là ! Tu veux chanter avec moi ?";
                break;
            case 15:
                this.arrayTxtSantaFinishMission[numCase] = "J'ai vu une très jolie maison juste à coté de la boutique.\nC'est la tienne ?";
                break;
            case 16:
                this.arrayTxtSantaFinishMission[numCase] = "L'autre jour, j'ai croisé un autre bonhomme de neige.\nJe crois qu'il s'appelait Olaf.\nC'est un ami à toi ?";
                break;
            case 17:
                this.arrayTxtSantaFinishMission[numCase] = "Les amis c'est important. D'ailleurs, j'ai reçu une carte postale\nce matin d'un ami lapin qui adore distribuer des oeufs en chocolat\nau printemps.";
                break;
            case 18:
                this.arrayTxtSantaFinishMission[numCase] = "Je t'aurai bien proposé de boire un chocolat chaud avec moi,\nmais après reflexion je ne suis pas certain que cela soit une bonne idée.\nJe ne veux pas te voir fondre !";
                break;
            case 19:
                this.arrayTxtSantaFinishMission[numCase] = "Certains pensent que je ne travaille qu'un jour par an.\nC'est faux ! Je travaille toute l'année pour fabriquer les jouets !";
                break;
            case 20:
                this.arrayTxtSantaFinishMission[numCase] = "Le vendeur de la boutique t'as fait une énigme ? Quel farceur !\nIl doit bien taimer pour jouer avec toi !";
                break;
            case 21:
                this.arrayTxtSantaFinishMission[numCase] = "Si tu as été sage cette année, n'oublie pas de m'envoyer ta liste de Noël !\nLes bonhommes de neige ont aussi le droit d'avoir des cadeaux !";
                break;
            case 22:
                this.arrayTxtSantaFinishMission[numCase] = "L'autre jour, Rudolphe m'a demandé s'il pouvait croquer ton nez.\nJe lui ai dit non !\nMême si ton nez est une carotte, il ne doit pas y toucher !";
                break;
            case 23:
                this.arrayTxtSantaFinishMission[numCase] = "Passe le bonjour au lutin marchand de ma part la prochaine fois !";
                break;
            case 24:
                this.arrayTxtSantaFinishMission[numCase] = "Au fait, comment as-tu trouvé le village du Père Noël ?\nIl est censé être caché par de la magie !\nAurais-tu des pouvoirs magiques ?";
                break;
            case 25:
                this.arrayTxtSantaFinishMission[numCase] = "N'hésite pas à inviter le reste de ta famille ici quand tu veux !";
                break;
            case 26:
                this.arrayTxtSantaFinishMission[numCase] = "As-tu dépensé tes pièces étoiles chez le lutin marchand?";
                break;
            case 27:
                this.arrayTxtSantaFinishMission[numCase] = "Avec toute l'aide que tu m'apportes, je vais réussir à\nfabriquer encore plus de jouets cette année !";
                break;
            case 28:
                this.arrayTxtSantaFinishMission[numCase] = "Grâce à toi, de nombreux enfants seront heureux à Noël !";
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
                this.arrayTxtSantaInMission[numCase] = "L'igloo dans lequel se trouve la boutique est magique,\nil parait petit vu de l'extérieur, mais il est très grand à l'intérieur !";
                break;
            case 2:
                this.arrayTxtSantaInMission[numCase] = "Avec tout ce travail, heureusement que tu es là pour m'aider !";
                break;
            case 3:
                this.arrayTxtSantaInMission[numCase] = "Ces piles sont rechargeables, je n'aurai plus besoin d'en acheter\n avant un moment. Je compte sur toi !";
                break;
            case 4:
                this.arrayTxtSantaInMission[numCase] = "Rudolphe adore les carottes bio. Il a bien raison !";
                break;
            case 5:
                this.arrayTxtSantaInMission[numCase] = "Je prends ma pause repas. Tu veux manger avec moi ?\nJe serai très heureux si un jour tu souhaitais m'inviter manger chez toi,\non pourrait faire la fête avec les autres lutins !\nAu fait, tu as une maison ?";
                break;
            case 6:
                this.arrayTxtSantaInMission[numCase] = "J'ai de nombreuses histoires et anecdotes à raconter.\nN'hésite pas à venir me voir régulièrement si tu veux que je te les raconte !";
                break;
            case 7:
                this.arrayTxtSantaInMission[numCase] = "Si tu n'arrives pas à lire quelque chose sur la liste que je t'ai donné,\nn'hésite pas à me le dire.\nC'est important d'écrire de façon lisible  !";
                break;
            case 8:
                this.arrayTxtSantaInMission[numCase] = "J'espère que ma femme va bien  !\nElle m'enverra une lettre quand elle sera arrivée.";
                break;
            case 9:
                this.arrayTxtSantaInMission[numCase] = "Mon ami n'est pas très grand, il est même capable de se faufiler dans\ndes petits trous.";
                break;
            case 10:
                this.arrayTxtSantaInMission[numCase] = "Je me suis souvent demandé pourquoi notre ami aimait à ce point\nle gruyère.";
                break;
            case 11:
                this.arrayTxtSantaInMission[numCase] = "La petite souris aime échanger les dents des enfants\ncontre des cadeaux. Chacun sa passion !";
                break;
            case 12:
                this.arrayTxtSantaInMission[numCase] = "Cela me fascinera toujours, tous ces passages secrets\nqu'a creusés la petite souris à travers le monde !";
                break;
            case 13:
                this.arrayTxtSantaInMission[numCase] = "J'aime aussi quand on me laisse un cookie avec le verre de lait !";
                break;
            case 14:
                this.arrayTxtSantaInMission[numCase] = "As-tu déjà pris le train ?";
                break;
            case 15:
                this.arrayTxtSantaInMission[numCase] = "Tous en coeur !\n\"Vive le vent, vive le vent, vive le vent d'hiver !\"";
                break;
            case 16:
                this.arrayTxtSantaInMission[numCase] = "Le lutin marchand a beaucoup d'amis tout autour du monde.\nJe me demande même parfois s'il ne connait pas plus de monde que moi !";
                break;
            case 17:
                this.arrayTxtSantaInMission[numCase] = "Au fait, d'où viens-tu?";
                break;
            case 18:
                this.arrayTxtSantaInMission[numCase] = "Le lutin marchand est aussi ami avec ce cher lapin !";
                break;
            case 19:
                this.arrayTxtSantaInMission[numCase] = "Le village est caché par de la magie, comme ça personne ne vient\nnous déranger pendant notre travail.";
                break;
            case 20:
                this.arrayTxtSantaInMission[numCase] = "Le travail c'est important.\nExiste-t-il une école pour les bonhommes de neige ?";
                break;
            case 21:
                this.arrayTxtSantaInMission[numCase] = "J'adore les énigmes !";
                break;
            case 22:
                this.arrayTxtSantaInMission[numCase] = "Parfois, je réponds avec plaisir aux lettres que m'envoient les enfants !";
                break;
            case 23:
                this.arrayTxtSantaInMission[numCase] = "Sacré Rudolphe ! Il m'a promis de ne pas toucher à ton nez.";
                break;
            case 24:
                this.arrayTxtSantaInMission[numCase] = "Le lutin marchand est un lutin particulier, il voyage beaucoup !";
                break;
            case 25:
                this.arrayTxtSantaInMission[numCase] = "Tu es un bien étrange personnage !";
                break;
            case 26:
                this.arrayTxtSantaInMission[numCase] = "J'adore les réunions de famille !";
                break;
            case 27:
                this.arrayTxtSantaInMission[numCase] = "Au fait, comment t'appelles-tu ?";
                break;
            case 28:
                this.arrayTxtSantaInMission[numCase] = "Je ne sais pas comment te remercier de toute l'aide que tu m'apportes !";
                break;
            default:
                console.log("ERREUR remplirArrayTxtSantaInMission " + numCase);
        }

    }



}