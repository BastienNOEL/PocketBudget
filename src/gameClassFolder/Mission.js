class Mission {
    constructor(lvPlayer) {
        this.lvPlayer = lvPlayer;
        this.paroleSanta = "ce message ne doit pas apparaitre";
        this.missionEnCours = false;

    }

    newMission() {
        if (this.lvPlayer == 1)  {
            if(this.missionEnCours == false){
                this.paroleSanta = "Prend cet argent et va me chercher\ndu bois dans l'igloo.";
                this.mission1();
            }
            else{
                this.paroleSanta = "La boutique se trouve dans l'igloo.";
            }
           

            console.log('%c%s', 'color: #003585', "valide" );
        } else {
            this.paroleSanta = "Une erreure s'est produite.";

            console.log('%c%s', 'color: #f279ca', "pas valide");
        }
    }

    mission1() {
        this.missionEnCours = true;
        this.gainMoney(1, 2, 3, 3, 5);

    }

    gainMoney(nb100, nb50, nb20, nb10, nb5) {

        console.log('%c%s', 'color: #735656', "nombre de billet de 50 avant = " + sessionStorage.getItem('B50'));

        sessionStorage.setItem('B100', nb100);
        sessionStorage.setItem('B50', nb50);
        sessionStorage.setItem('B20', nb20);
        sessionStorage.setItem('B10', nb10);
        sessionStorage.setItem('B5', nb5);

        console.log('%c%s', 'color: #735656', "nombre de billet de 50 apres = " + sessionStorage.getItem('B50'));
    }
}