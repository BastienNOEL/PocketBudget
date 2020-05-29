class Mission {
    constructor(lvPlayer) {
        this.lvPlayer = lvPlayer;
        this.paroleSanta = "nop";

    }

    newMission() {
        if (this.lvPlayer === 1) {
            this.paroleSanta = "Prend cet argent et va me chercher\ndu bois dans l'igloo.";
        } else {
            this.paroleSanta = "Une erreure s'est produite.";
        }


    }
}