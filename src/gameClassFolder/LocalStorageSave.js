class LocalStorageSave {
    constructor() {

        //localStorage.setItem('lvPlayer', 2); // permet de faire des tests, mais doit etre supprimé 
        localStorage.setItem('nbStarCoin', 3);

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

    }

}