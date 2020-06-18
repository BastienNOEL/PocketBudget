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
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][5];
                    break;

                case 2:
                    this.paroleSanta = this.arrayMissions[lvPlayer - 1][4];
                    localStorage.setItem('RetourMission', false);
                    this.lvlUp();

                    if (lvPlayer == this.arrayMissions.length) {
                        localStorage.setItem('lastMissionIsDone', true);
                    } else{
                        this.mission(localStorage.getItem('lvPlayer'));
                    }
                    break;

                case 3:
                    this.paroleSanta = this.arrayMissions[0][3];
                    this.mission(lvPlayer);
                    break;

                default:
                    console.log("erreur mission");
            }
        } else {
            this.paroleSanta = "Tu as fait du bon travail ! Je n'ai plus rien à te demander !\nMerci beaucoup pour ton aide !"
            localStorage.setItem('RetourMission', true);
        }

    }

    gainMoney(nb1, nb2, nb5, nb10, nb20, nb50, nb100) {

        localStorage.setItem('P1', nb1);
        localStorage.setItem('P2', nb2);
        localStorage.setItem('B5', nb5);
        localStorage.setItem('B10', nb10);
        localStorage.setItem('B20', nb20);
        localStorage.setItem('B50', nb50);
        localStorage.setItem('B100', nb100);
    }

    lvlUp() {

        if (localStorage.getItem("nbTentatives") < 3) {
            this.gainStarCoins();
        }
        this.lvlValue = parseInt(localStorage.getItem("lvPlayer"));
        localStorage.setItem('lvPlayer', this.lvlValue + 1);
        localStorage.setItem('nbTentatives', 1);

    }

    gainStarCoins() {
        var lvPlayer = localStorage.getItem('lvPlayer');
        this.coinValue = parseInt(localStorage.getItem("nbStarCoin"));

        var gain ;//= 3; // à changer
        
                if (lvPlayer < 5) {
                    gain = 1;
                } else if (lvPlayer < 10) {
                    gain = 2;
                } else if (lvPlayer < 15) {
                    gain = 3;
                } else if (lvPlayer < 20) {
                    gain = 4;
                } else {
                    gain = 5;
                }
        
        localStorage.setItem('nbStarCoin', this.coinValue + gain);
    }

    checkStateMission() {

        if (localStorage.getItem('FirstMission') == "true") {
            return 3;
        } else {
            if (localStorage.getItem('MissionEnCours') == "true") {
                return 1;
            } else if (localStorage.getItem('MissionEnCours') == "false") {
                return 2;
            }
        }

    }

    mission(lvPlayer) {

        var numMission = lvPlayer - 1;

        localStorage.setItem('MissionEnCours', true);
        localStorage.setItem('nbTentatives', 1);
        localStorage.setItem('PrixMissionAffiche', this.arrayMissions[numMission][1]);
        localStorage.setItem('PrixMissionAttendu', this.arrayMissions[numMission][6]);
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