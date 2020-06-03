class Mission extends DonneesMission {
    constructor() {
        //this.lvPlayer =  sessionStorage.getItem('lvPlayer');
        super();
        this.paroleSanta = "ce message ne doit pas apparaitre";
        sessionStorage.setItem('MissionEnCours', false);
        sessionStorage.setItem('RetourMission', false);
        sessionStorage.setItem('lastMissionIsDone', false);
        sessionStorage.setItem('BoutiqueTexte', "Va voir le père noel pour avoir de l'argent.")

    }

    newMission() {

        if (sessionStorage.getItem('lastMissionIsDone') != "true") {
            var lvPlayer = sessionStorage.getItem('lvPlayer');

            this.stateMission = this.checkStateMission();

            switch (this.stateMission) {
                case 1:
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][3];
                    this.mission(lvPlayer);
                    break;

                case 2:
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][4];
                    sessionStorage.setItem('RetourMission', false);
                    this.lvlUp();

                    if (lvPlayer == this.arrayMissions.length) {
                        sessionStorage.setItem('lastMissionIsDone', true);
                    }

                    break;

                case 3:
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][5];
                    break;

                default:
                    console.log("erreur mission");
            }
        } else {
            this.paroleSanta = "Tu as fait toutes les missions disponibles."
        }

    }

    gainMoney(nb1, nb2, nb5, nb10, nb20, nb50, nb100) {

        console.log('%c%s', 'color: #735656', "nombre de billet de 5 avant = " + sessionStorage.getItem('B5'));

        sessionStorage.setItem('P1', nb1);
        sessionStorage.setItem('P2', nb2);
        sessionStorage.setItem('B5', nb5);
        sessionStorage.setItem('B10', nb10);
        sessionStorage.setItem('B20', nb20);
        sessionStorage.setItem('B50', nb50);
        sessionStorage.setItem('B100', nb100);

        console.log('%c%s', 'color: #735656', "nombre de billet de 5 apres = " + sessionStorage.getItem('B5'));
    }

    lvlUp() {

        if (sessionStorage.getItem("nbTentatives") < 3) {
            this.lvlValue = parseInt(sessionStorage.getItem("lvPlayer"));
            sessionStorage.setItem('lvPlayer', this.lvlValue + 1);
            sessionStorage.setItem('nbTentatives', 1);
            this.coinValue = parseInt(sessionStorage.getItem("nbStarCoin"));
            sessionStorage.setItem('nbStarCoin', this.coinValue + 1);

        }
    }

    checkStateMission() {

        if (sessionStorage.getItem('MissionEnCours') == "false" && sessionStorage.getItem('RetourMission') == "false") {
            return 1;
        } else if (sessionStorage.getItem('MissionEnCours') == "false" && sessionStorage.getItem('RetourMission') == "true") {
            return 2;
        } else {
            return 3;
        }

    }

    mission(lvPlayer) {

        var numMission = lvPlayer - 1;

        sessionStorage.setItem('MissionEnCours', true);
        sessionStorage.setItem('nbTentatives', 1);
        sessionStorage.setItem('PrixMission', this.arrayMissions[numMission][1]);
        sessionStorage.setItem('BoutiqueTexte', this.arrayMissions[numMission][2]);

        this.gainMoney(
            this.arrayMissions[numMission][0][0],
            this.arrayMissions[numMission][0][1],
            this.arrayMissions[numMission][0][2],
            this.arrayMissions[numMission][0][3],
            this.arrayMissions[numMission][0][4],
            this.arrayMissions[numMission][0][5],
            this.arrayMissions[numMission][0][6],
        );

    }

}