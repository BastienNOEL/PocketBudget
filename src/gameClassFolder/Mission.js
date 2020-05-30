class Mission {
    constructor(lvPlayer) {
        this.lvPlayer = lvPlayer;
        this.paroleSanta = "ce message ne doit pas apparaitre";
        sessionStorage.setItem('MissionEnCours', false);

    }

    newMission() {
        if (this.lvPlayer == 1)  {
            if(sessionStorage.getItem('MissionEnCours') == "false"){
                this.paroleSanta = "Prend cet argent et va me chercher\ndu bois dans l'igloo.";
                this.mission1();
            }
            else{
                this.paroleSanta = "La boutique se trouve dans l'igloo.";
            }
        } else {
            this.paroleSanta = "Une erreure s'est produite.";

            console.log('%c%s', 'color: #f279ca', "pas valide");
        }
    }

    mission1() {
        sessionStorage.setItem('MissionEnCours', true);
        this.gainMoney(2, 1, 0, 0, 0);
        sessionStorage.setItem('PrixMission' , 15);
        sessionStorage.setItem('nbTentatives' , 1);

    }

    gainMoney(nb5, nb10, nb20, nb50, nb100) {

        console.log('%c%s', 'color: #735656', "nombre de billet de 5 avant = " + sessionStorage.getItem('B5'));

        sessionStorage.setItem('B100', nb100);
        sessionStorage.setItem('B50', nb50);
        sessionStorage.setItem('B20', nb20);
        sessionStorage.setItem('B10', nb10);
        sessionStorage.setItem('B5', nb5);

        console.log('%c%s', 'color: #735656', "nombre de billet de 5 apres = " + sessionStorage.getItem('B5'));
    }
}