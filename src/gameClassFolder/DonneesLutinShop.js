class DonneesLutinShop {

    constructor() {

        this.arrayObjetDeco = new Array(29);

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
            } else {
                this.zonePrixTxt.visible = false;
                this.zonePrixStarCoin.visible = false;
                this.txtDescriptionObjet.text = "Tu as déjà acheté cet objet !";
            }

        }];

    }

    remplirArrayNomObjet(numCase) {

        switch (numCase) {
            case 0:
                this.arrayNomObjet[numCase] = "Maison";
                break;
            case 1:
                this.arrayNomObjet[numCase] = "Sapin de noël";
                break;
            case 2:
                this.arrayNomObjet[numCase] = "Couronne de Noël";
                break;
            case 3:
                this.arrayNomObjet[numCase] = "Cloches";
                break;
            case 4:
                this.arrayNomObjet[numCase] = "Tableau du Village";
                break;
            case 5:
                this.arrayNomObjet[numCase] = "Cheminée";
                break;
            case 6:
                this.arrayNomObjet[numCase] = "Fenêtre";
                break;
            case 7:
                this.arrayNomObjet[numCase] = "Canapé";
                break;
            case 8:
                this.arrayNomObjet[numCase] = "Tableau de famille";
                break;
            case 9:
                this.arrayNomObjet[numCase] = "Chaussette de noël";
                break;
            case 10:
                this.arrayNomObjet[numCase] = "Sucre d\'orge";
                break;
            case 11:
                this.arrayNomObjet[numCase] = "Lit";
                break;
            case 12:
                this.arrayNomObjet[numCase] = "Fenêtre Ronde";
                break;
            case 13:
                this.arrayNomObjet[numCase] = "Tapis de chambre";
                break;
            case 14:
                this.arrayNomObjet[numCase] = "Livres";
                break;
            case 15:
                this.arrayNomObjet[numCase] = "Poster de Noël";
                break;
            case 16:
                this.arrayNomObjet[numCase] = "Plante en pot";
                break;
            case 17:
                this.arrayNomObjet[numCase] = "Lampe Murale";
                break;
            case 18:
                this.arrayNomObjet[numCase] = "Contrebasse";
                break;
            case 19:
                this.arrayNomObjet[numCase] = "Chaise à bascule";
                break;
            case 20:
                this.arrayNomObjet[numCase] = "Table";
                break;
            case 21:
                this.arrayNomObjet[numCase] = "Tapis Blanc";
                break;
            case 22:
                this.arrayNomObjet[numCase] = "Bibliothèque";
                break;
            case 23:
                this.arrayNomObjet[numCase] = "Plante Grimpante";
                break;
            case 24:
                this.arrayNomObjet[numCase] = "Tourne-Disque";
                break;
            case 25:
                this.arrayNomObjet[numCase] = "Vieille Horloge";
                break;
            case 26:
                this.arrayNomObjet[numCase] = "Lustre";
                break;
            case 27:
                this.arrayNomObjet[numCase] = "Cadre Aurore Boréale";
                break;
            case 28:
                this.arrayNomObjet[numCase] = "Cadre Lac Enneigé";
                break;


            default:
                console.log("ERREUR remplirArrayNomObje(" + numCase + ")");
        }


    }

    remplirArrayPrixObjet(numCase) {

        switch (numCase) {
            case 0:
                this.arrayPrixObjet[numCase] = 3; //maison
                break;
            case 1:
                this.arrayPrixObjet[numCase] = 3; //sapin
                break;
            case 2:
                this.arrayPrixObjet[numCase] = 2; //couronne
                break;
            case 3:
                this.arrayPrixObjet[numCase] = 2; //cloche
                break;
            case 4:
                this.arrayPrixObjet[numCase] = 3; //tableau village
                break;
            case 5:
                this.arrayPrixObjet[numCase] = 3; //cheminée
                break;
            case 6:
                this.arrayPrixObjet[numCase] = 3; //fenetre
                break;
            case 7:
                this.arrayPrixObjet[numCase] = 3; //canapé
                break;
            case 8:
                this.arrayPrixObjet[numCase] = 3; //tableau de famille
                break;
            case 9:
                this.arrayPrixObjet[numCase] = 2; //chausette
                break;
            case 10:
                this.arrayPrixObjet[numCase] = 2; //sucre 
                break;
            case 11:
                this.arrayPrixObjet[numCase] = 3; //lit
                break;
            case 12:
                this.arrayPrixObjet[numCase] = 3; //fenetre ronde
                break;
            case 13:
                this.arrayPrixObjet[numCase] = 3; //tapis rouge
                break;
            case 14:
                this.arrayPrixObjet[numCase] = 2; //livres
                break;
            case 15:
                this.arrayPrixObjet[numCase] = 3; //poster
                break;
            case 16:
                this.arrayPrixObjet[numCase] = 2; //plante en pot
                break;
            case 17:
                this.arrayPrixObjet[numCase] = 2; //lampe
                break;
            case 18:
                this.arrayPrixObjet[numCase] = 2; //contrebasse
                break;
            case 19:
                this.arrayPrixObjet[numCase] = 2; //chaise à bascule
                break;
            case 20:
                this.arrayPrixObjet[numCase] = 3; //table
                break;
            case 21:
                this.arrayPrixObjet[numCase] = 3; //tapis blanc
                break;
            case 22:
                this.arrayPrixObjet[numCase] = 3; //bibliotheque
                break;
            case 23:
                this.arrayPrixObjet[numCase] = 2; //plante grimpante
                break;
            case 24:
                this.arrayPrixObjet[numCase] = 2; //tourne-disque
                break;
            case 25:
                this.arrayPrixObjet[numCase] = 2; //horloge
                break;
            case 26:
                this.arrayPrixObjet[numCase] = 3; //lustre
                break;
            case 27:
                this.arrayPrixObjet[numCase] = 3; //aurore boreale
                break;
            case 28:
                this.arrayPrixObjet[numCase] = 3; //lac
                break;

            default:
                console.log("ERREUR remplirArrayPrixObjet(" + numCase + ")");
        }

    }

    remplirArrayDescriptionObjet(numCase) {

        switch (numCase) {
            case 0:
                this.arrayDescriptionObjet[numCase] = "Tu es nouveau par ici ? Dans ce cas cette maison est faite pour toi ! Son prix\nest affiché dans la zone rouge, et ton argent est dans la zone bleue. Si tu as\nassez, valide avec le bouton rouge et cette maison sera tienne !";
                break;
            case 1:
                this.arrayDescriptionObjet[numCase] = "Un sapin de Noël pour une maison du village du Père Noël ?\nIndispensable, tout simplement.";
                break;
            case 2:
                this.arrayDescriptionObjet[numCase] = "Une jolie couronne de Noël, histoire de souhaiter la bienvenue à tes invités.";
                break;
            case 3:
                this.arrayDescriptionObjet[numCase] = "Quoi de mieux que des cloches pour annoncer son arrivée ?\nJ'ai repris l'idée à un ami lapin qui aime donner des oeufs en chocolats.";
                break;
            case 4:
                this.arrayDescriptionObjet[numCase] = "J'ai quelques amis artistes, vois-tu.\nCe tableau représente la beauté d'un village paisible, une nuit d'hiver.";
                break;
            case 5:
                this.arrayDescriptionObjet[numCase] = "Quoi de mieux que la chaleur d'une cheminée en hiver ?\nNe reste pas trop longtemps devant toutefois, tu risquerais de fondre...";
                break;
            case 6:
                this.arrayDescriptionObjet[numCase] = "J'ai refait l'isolation des fenêtres, tu pourras contempler le village bien au\nchaud chez toi.";
                break;
            case 7:
                this.arrayDescriptionObjet[numCase] = "Dois-je vraiment énumérer tous les bienfaits d'un canapé ?\nCe n'est ni plus, ni moins, que la pièce maîtresse d'un salon, tu n'es pas\nd'accord ?";
                break;
            case 8:
                this.arrayDescriptionObjet[numCase] = "Le tableau que tu m'avais commandé est disponible. C'est le reste de ta\nfamille ?";
                break;
            case 9:
                this.arrayDescriptionObjet[numCase] = "Oui, je sais, tu n'as pas de pieds. MAIS ! Est-ce une raison de ne pas vouloir\ndes sucreries ? Avec cette chaussette, bonbons garantis.";
                break;
            case 10:
                this.arrayDescriptionObjet[numCase] = "Un sucre d'orge XXL, ça ne se refuse pas.";
                break;
            case 11:
                this.arrayDescriptionObjet[numCase] = "Ce n'est pas parce que les bonhommes de neige dorment debout qu'ils ne\nte faut pas de lit. Une chambre sans lit n'est pas une chambre, voyons !";
                break;
            case 12:
                this.arrayDescriptionObjet[numCase] = "Une fenêtre, mais ronde. Très appréciée d'un ami singe qui porte le même\nnom qu'un célèbre empereur romain.";
                break;
            case 13:
                this.arrayDescriptionObjet[numCase] = "Avec ce tapis, fini les échardes sur le parquet ! Je me dois néanmoins\nd'informer mon aimable clientèle que ce modèle ne vole pas.";
                break;
            case 14:
                this.arrayDescriptionObjet[numCase] = "En tant que fin lecteur, je t'ai selectionné quelques-uns de mes ouvrages\nfavoris. Et en plus, l'étagère est offerte !";
                break;
            case 15:
                this.arrayDescriptionObjet[numCase] = "Un poster, c'est cool. Et comme c'est cool, il t'en faut un.\nEt comme il t'en faut un, tu es venu me voir. Et ça tombe bien, j'en ai\njustement un en stock. Et tu sais quoi ? Il est cool.";
                break;
            case 16:
                this.arrayDescriptionObjet[numCase] = "Une touche de verdure dans toute cette blancheur, ça fait du bien.\nEt je ne te parle pas de mon chewing-gum à la menthe.";
                break;
            case 17:
                this.arrayDescriptionObjet[numCase] = "Que la lumière soit !";
                break;
            case 18:
                this.arrayDescriptionObjet[numCase] = "Une contrebasse à ce prix là, ça vaudrait le coup de te fabriquer des mains\npour en jouer !";
                break;
            case 19:
                this.arrayDescriptionObjet[numCase] = "Tout chalet qui se respecte se doit de posséder une chaise à bascule.\nEt preuve de son authenticité, je me suis assuré qu'elle grinçait !";
                break;
            case 20:
                this.arrayDescriptionObjet[numCase] = "Avec cette table, tu arrêteras de faire tomber des miettes par terre en\nmangeant.";
                break;
            case 21:
                this.arrayDescriptionObjet[numCase] = "Un joli tapis blanc. Un conseil : ne fait pas tomber de la sauce tomate\ndessus.";
                break;
            case 22:
                this.arrayDescriptionObjet[numCase] = "Des livres, encore des livres, toujours plus de livres !";
                break;
            case 23:
                this.arrayDescriptionObjet[numCase] = "Cette plante à fortement tendance à s'enrouler autour des bûches\nqui soutiennent le plafond.";
                break;
            case 24:
                this.arrayDescriptionObjet[numCase] = "Un bon ami m'a dit un jour : \"Sans la musique, la vie serait une erreur\".\nMets une ambiance musicale chez toi avec ce tourne-disque !";
                break;
            case 25:
                this.arrayDescriptionObjet[numCase] = "En voulant étudier le mécanisme de cette magnifique horloge, je l'ai\nmalencontreusement cassé...\nDu coup, je te la vends aussi à prix cassé.";
                break;
            case 26:
                this.arrayDescriptionObjet[numCase] = "Fais-moi confiance, je m'assurerai personnellement que ce magnifique\nlustre restera solidement cloué au plafond.";
                break;
            case 27:
                this.arrayDescriptionObjet[numCase] = "J'ai encadré une photo que j'ai prise d'une aurore boréale,\nun rayon de lumière coloré qui éclaire le ciel la nuit !";
                break;
            case 28:
                this.arrayDescriptionObjet[numCase] = "J'ai mis sous cadre cette superbe photo d'un lac enneigé.\nLes rayons du soleil se reflètent sur la surface de l'eau !";
                break;


            default:
                console.log("ERREUR remplirArrayDescriptionObjet(" + numCase + ")");
        }

    }
}