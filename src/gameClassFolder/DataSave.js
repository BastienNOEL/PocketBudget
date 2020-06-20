// cette classe stock toutes les données relatives à la sauvegarde lors de la première utilisation du jeu

class DataSave {
    constructor() {

        this.arrayDatasInit = {

            //Paramètres Divers //
            'lvPlayer': 1,
            'nbStarCoin': 7,
            'nbTentatives': 1,
            'P1': 0,
            'P2': 0,
            'B5': 0,
            'B10': 0,
            'B20': 0,
            'B50': 0,
            'B100': 0,
            'MissionEnCours': false,
            'RetourMission': false,
            'FirstMission': true,
            'lastMissionIsDone': false,
            'BoutiqueTexte': "Salut toi ! Tu es nouveau par ici ? Tu devrais aller voir le Père Noël !",
            'prixMissionAffiche': -1,
            'prixMissionAttendu': -1,
            'indexPage': 1,


            // VENTE OBJETS //

            //Salon
            'Maison': "Maison",
            'Sapin de noël': "Sapin de noël",
            'Couronne de Noël': "Couronne de Noel",
            'Cloches': "Cloches",
            'Tableau du Village': "Tableau du Village",
            'Cheminée': "Cheminée",
            'Fenêtre': "Fenêtre",
            'Canapé': "Canapé",
            'Tableau de famille': "Tableau de famille",
            'Chaussette de noël': "Chaussette de noël",
            'Sucre d\'orge': "Sucre d\'orge",

            //Chambre
            'Fenêtre Ronde': "Fenêtre Ronde",
            'Tapis de chambre': "Tapis de chambre",
            'Lit': "Lit",
            'Livres': "Livres",
            'Poster de Noël': "Poster de Noël",
            'Plante en pot': "Plante en pot",
            'Lampe Murale': "Lampe Murale",
            'Contrebasse': "Contrebasse",
            'Chaise à bascule': "Chaise à bascule",

            //Salle à manger
            'Plante Grimpante': "Plante Grimpante",
            'Tapis Blanc': "Tapis Blanc",
            'Bibliothèque': "Bibliothèque",
            'Tourne-Disque': "Tourne-Disque",
            'Vieille Horloge': "Vieille Horloge",
            'Cadre Lac Enneigé': "Cadre Lac Enneigé",
            'Cadre Aurore Boréale': "Cadre Aurore Boréale",
            'Lustre': "Lustre",
            'Table': "Table",

            //Endgame
            '???':"???",

        }
    }
}