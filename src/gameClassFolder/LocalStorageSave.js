class LocalStorageSave {
    constructor() {

        console.log('%c%s', 'color: #2b10c5', "datas");


        //localStorage.setItem('lvPlayer', 2); // permet de faire des tests, mais doit etre supprimé 
        //localStorage.setItem('nbStarCoin', 3);

        if ((localStorage.getItem('lvPlayer') == null)) {
            localStorage.setItem('lvPlayer', 1);
        }


        if ((localStorage.getItem('nbStarCoin') == null)) {
            localStorage.setItem('nbStarCoin', 0);
        }



        if ((localStorage.getItem('nbTentatives') == null)) {
            localStorage.setItem('nbTentatives', 1);
        }


        if ((localStorage.getItem('B100') == null)) {
            localStorage.setItem('B100', 0);
        }


        if ((localStorage.getItem('B50') == null)) {
            localStorage.setItem('B50', 0);
        }

        if ((localStorage.getItem('B20') == null)) {
            localStorage.setItem('B20', 0);
        }

        if ((localStorage.getItem('B10') == null)) {
            localStorage.setItem('B10', 0);
        }

        if ((localStorage.getItem('B5') == null)) {
            localStorage.setItem('B5', 0);
        }

        if ((localStorage.getItem('P2') == null)) {
            localStorage.setItem('P2', 0);
        }

        if ((localStorage.getItem('P1') == null)) {
            localStorage.setItem('P1', 0);
        }

        if ((localStorage.getItem('MissionEnCours') == null)) {
            localStorage.setItem('MissionEnCours', false);
        }

        if ((localStorage.getItem('RetourMission') == null)) {
            localStorage.setItem('RetourMission', false);
        }

        if ((localStorage.getItem('lastMissionIsDone') == null)) {
            localStorage.setItem('lastMissionIsDone', false);
        }

        if ((localStorage.getItem('BoutiqueTexte') == null)) {
            localStorage.setItem('BoutiqueTexte', "Va voir le père noel pour avoir de l'argent.");
        }

        if ((localStorage.getItem('prixMissionAffiche') == null)) {
            localStorage.setItem('prixMissionAffiche', -1);
        }

        if ((localStorage.getItem('prixMissionAttendu') == null)) {
            localStorage.setItem('prixMissionAttendu', -1);
        }


        /// Vente objets

        if ((localStorage.getItem('Objet0') == null)) {
            localStorage.setItem('Objet0', "Objet0");
        }

        if ((localStorage.getItem('Objet1') == null)) {
            localStorage.setItem('Objet1', "Objet1");
        }

        if ((localStorage.getItem('Objet2') == null)) {
            localStorage.setItem('Objet2', "Objet2");
        }

        if ((localStorage.getItem('Objet3') == null)) {
            localStorage.setItem('Objet3', "Objet3");
        }

        if ((localStorage.getItem('Objet4') == null)) {
            localStorage.setItem('Objet4', "Objet4");
        }

        if ((localStorage.getItem('Objet5') == null)) {
            localStorage.setItem('Objet5', "Objet5");
        }

        if ((localStorage.getItem('Objet6') == null)) {
            localStorage.setItem('Objet6', "Objet6");
        }

        if ((localStorage.getItem('Objet7') == null)) {
            localStorage.setItem('Objet7', "Objet7");
        }

        if ((localStorage.getItem('Objet8') == null)) {
            localStorage.setItem('Objet8', "Objet8");
        }

        if ((localStorage.getItem('Objet9') == null)) {
            localStorage.setItem('Objet9', "Objet9");
        }

        if ((localStorage.getItem('Objet10') == null)) {
            localStorage.setItem('Objet10', "Objet10");
        }

        if ((localStorage.getItem('Objet11') == null)) {
            localStorage.setItem('Objet11', "Objet11");
        }

        if ((localStorage.getItem('Objet12') == null)) {
            localStorage.setItem('Objet12', "Objet12");
        }

        if ((localStorage.getItem('Objet13') == null)) {
            localStorage.setItem('Objet13', "Objet13");
        }

        if ((localStorage.getItem('Objet14') == null)) {
            localStorage.setItem('Objet14', "Objet14");
        }

        if ((localStorage.getItem('Objet15') == null)) {
            localStorage.setItem('Objet15', "Objet15");
        }

        if ((localStorage.getItem('Objet16') == null)) {
            localStorage.setItem('Objet16', "Objet16");
        }


    }

}