class Mission {
    constructor() {
        //this.lvPlayer =  sessionStorage.getItem('lvPlayer');
        this.paroleSanta = "ce message ne doit pas apparaitre";
        sessionStorage.setItem('MissionEnCours', false);
        sessionStorage.setItem('RetourMission', false);
        sessionStorage.setItem('BoutiqueTexte', "Va voir le père noel pour avoir de l'argent.")

    }

    newMission() {
        var lvPlayer = sessionStorage.getItem('lvPlayer');
        if (lvPlayer == 1) {
            if (sessionStorage.getItem('MissionEnCours') == "false" && sessionStorage.getItem('RetourMission') == "false") {
                this.paroleSanta = "Prend cet argent et va me chercher du bois dans l'igloo.";
                this.mission1();
            } else if (sessionStorage.getItem('MissionEnCours') == "false" && sessionStorage.getItem('RetourMission') == "true") {
                this.paroleSanta = "Merci pour ton aide! Reviens me voir quand tu peut!";
                sessionStorage.setItem('RetourMission', false);
                this.lvlUp();
            } else {
                this.paroleSanta = "La boutique se trouve dans l'igloo.";
            }
        } else if (lvPlayer == 2) {
            if (sessionStorage.getItem('MissionEnCours') == "false" && sessionStorage.getItem('RetourMission') == "false") {
                this.paroleSanta = "J'ai besoins que tu aille me chercher une clochette dans la boutique\navec cet argent.";
                this.mission2();
            } else if (sessionStorage.getItem('MissionEnCours') == "false" && sessionStorage.getItem('RetourMission') == "true") {
                this.paroleSanta = "Merci pour cette clochette! Reviens me voir quand tu peut!";
                sessionStorage.setItem('RetourMission', false);
                this.lvlUp();
            } else {
                this.paroleSanta = "Va voir dans l'igloo pour acheter la clochette.";
            }

        } else {
            this.paroleSanta = "Tu as accomplis toutes les missions.";

            console.log('%c%s', 'color: #f279ca', "pas valide");
        }
    }

    gainMoney(nb1,nb2,nb5, nb10, nb20, nb50, nb100) {

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

    lvlUp(){

        if (sessionStorage.getItem("nbTentatives") < 3) {
            this.lvlValue = parseInt(sessionStorage.getItem("lvPlayer"));
            sessionStorage.setItem('lvPlayer', this.lvlValue + 1);
            sessionStorage.setItem('nbTentatives', 1);
            this.coinValue = parseInt(sessionStorage.getItem("nbStarCoin"));
            sessionStorage.setItem('nbStarCoin', this.coinValue + 1);

        }
    }

    mission1() {
        sessionStorage.setItem('MissionEnCours', true);
        this.gainMoney(0,0,2, 1, 0, 0, 0);
        sessionStorage.setItem('PrixMission', 15);
        sessionStorage.setItem('nbTentatives', 1);
        sessionStorage.setItem('BoutiqueTexte', "Clique sur un billet de la zone bleu pour le mettre dans la zone jaune.\nQuand tu pense avoir mis le bon nombre de billet, valide avec le\nbouton rouge.\nClique sur les fleches pour revenir en arrière.")

    }

    mission2() {
        sessionStorage.setItem('MissionEnCours', true);
        this.gainMoney(0,0,2, 1, 1, 0, 0);
        sessionStorage.setItem('PrixMission', 25);
        sessionStorage.setItem('nbTentatives', 1);
        sessionStorage.setItem('BoutiqueTexte', "25€ S'il vous plaît.")
        

    }
}