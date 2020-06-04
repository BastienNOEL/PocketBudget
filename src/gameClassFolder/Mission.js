class Mission extends DonneesMission {
    constructor() {
        super();
        this.paroleSanta = "ce message ne doit pas apparaitre";
    }

    newMission() {

        if (localStorage.getItem('lastMissionIsDone') != "true") {
            var lvPlayer = localStorage.getItem('lvPlayer');

            this.stateMission = this.checkStateMission();

            switch (this.stateMission) {
                case 1:
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][3];
                    this.mission(lvPlayer);
                    break;

                case 2:
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][4];
                    localStorage.setItem('RetourMission', false);
                    this.lvlUp();

                    if (lvPlayer == this.arrayMissions.length) {
                        localStorage.setItem('lastMissionIsDone', true);
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

        console.log('%c%s', 'color: #735656', "nombre de billet de 5 avant = " + localStorage.getItem('B5'));

        localStorage.setItem('P1', nb1);
        localStorage.setItem('P2', nb2);
        localStorage.setItem('B5', nb5);
        localStorage.setItem('B10', nb10);
        localStorage.setItem('B20', nb20);
        localStorage.setItem('B50', nb50);
        localStorage.setItem('B100', nb100);

        console.log('%c%s', 'color: #735656', "nombre de billet de 5 apres = " + localStorage.getItem('B5'));
    }

    lvlUp() {

        if (localStorage.getItem("nbTentatives") < 3) {
            this.lvlValue = parseInt(localStorage.getItem("lvPlayer"));
            localStorage.setItem('lvPlayer', this.lvlValue + 1);
            localStorage.setItem('nbTentatives', 1);
            this.coinValue = parseInt(localStorage.getItem("nbStarCoin"));
            localStorage.setItem('nbStarCoin', this.coinValue + 1);

        }
    }

    checkStateMission() {

        if (localStorage.getItem('MissionEnCours') == "false" && localStorage.getItem('RetourMission') == "false") {
            return 1;
        } else if (localStorage.getItem('MissionEnCours') == "false" && localStorage.getItem('RetourMission') == "true") {
            return 2;
        } else {
            return 3;
        }

    }

    mission(lvPlayer) {

        var numMission = lvPlayer - 1;

        localStorage.setItem('MissionEnCours', true);
        localStorage.setItem('nbTentatives', 1);
        localStorage.setItem('PrixMission', this.arrayMissions[numMission][1]);
        localStorage.setItem('BoutiqueTexte', this.arrayMissions[numMission][2]);

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