class DonneesInteractions {

    constructor() {

        //this.messageInteraction = "Appuyez sur ESPACE";
        this.messageInteraction = "ESPACE pour ";

        this.arrayScenes = new Array();

        this.arrayInteractionsTravel = new Array(4);
        this.arrayInteractionsSanta = new Array(2);
        this.arrayInteractionsHome = new Array(3);
        this.arrayInteractionsBedroom = new Array(1);
        this.arrayInteractionsDinnerRoom = new Array(1);

        this.arrayTailleZoneInterractionTravel = [];
        this.arrayTailleZoneInterractionSanta = [];
        this.arrayTailleZoneInterractionHome = [];
        this.arrayTailleZoneInterractionBedroom = [];
        this.arrayTailleZoneInterractionDinnerRoom = [];

        this.arrayMessagesTravel = [];
        this.arrayMessagesSanta = [];
        this.arrayMessagesHome = [];
        this.arrayMessagesBedroom = [];
        this.arrayMessagesDinnerRoom = [];


        this.initTableaux();
        this.createDatas();

    }

    initTableaux() {

        for (var i = 0; i < this.arrayInteractionsTravel.length; i++) {

            this.remplirArrayTailleZoneInterractionTravel(i);
            this.remplirArrayMessagesTravel(i);

            this.arrayInteractionsTravel[i] = [this.arrayTailleZoneInterractionTravel[i], this.arrayMessagesTravel[i]]
        }

        for (var i = 0; i < this.arrayInteractionsSanta.length; i++) {

            this.remplirArrayTailleZoneInterractionSanta(i);
            this.remplirArrayMessagesSanta(i);

            this.arrayInteractionsSanta[i] = [this.arrayTailleZoneInterractionSanta[i], this.arrayMessagesSanta[i]]

        }

        for (var i = 0; i < this.arrayInteractionsHome.length; i++) {

            this.remplirArrayTailleZoneInterractionHome(i);
            this.remplirArrayMessagesHome(i);

            this.arrayInteractionsHome[i] = [this.arrayTailleZoneInterractionHome[i], this.arrayMessagesHome[i]]

        }

        for (var i = 0; i < this.arrayInteractionsBedroom.length; i++) {

            this.remplirArrayTailleZoneInterractionBedroom(i);
            this.remplirArrayMessagesBedroom(i);

            this.arrayInteractionsBedroom[i] = [this.arrayTailleZoneInterractionBedroom[i], this.arrayMessagesBedroom[i]]

        }

        for (var i = 0; i < this.arrayInteractionsDinnerRoom.length; i++) {

            this.remplirArrayTailleZoneInterractionDinnerRoom(i);
            this.remplirArrayMessagesDinnerRoom(i);

            this.arrayInteractionsDinnerRoom[i] = [this.arrayTailleZoneInterractionDinnerRoom[i], this.arrayMessagesDinnerRoom[i]]

        }
    }

    createDatas() {

        this.arrayScenes[0] = this.arrayInteractionsTravel;
        this.arrayScenes[1] = this.arrayInteractionsSanta;
        this.arrayScenes[2] = this.arrayInteractionsHome;
        this.arrayScenes[3] = this.arrayInteractionsBedroom;
        this.arrayScenes[4] = this.arrayInteractionsDinnerRoom;

    }


    /// POUR TRAVEL
    remplirArrayTailleZoneInterractionTravel(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTailleZoneInterractionTravel[numCase] = [200, 350];
                break;
            case 1:
                this.arrayTailleZoneInterractionTravel[numCase] = [725, 845];
                break;
            case 2:
                this.arrayTailleZoneInterractionTravel[numCase] = [1300, 1450];
                break;
            case 3:
                this.arrayTailleZoneInterractionTravel[numCase] = [1550, 1750];
                break;
        }
    }



    remplirArrayMessagesTravel(numCase) {
        switch (numCase) {
            case 0:
                this.arrayMessagesTravel[numCase] = [150, 327, this.messageInteraction + "entrer"];
                break;
            case 1:
                this.arrayMessagesTravel[numCase] = [800, 348, this.messageInteraction + "entrer"];
                break;
            case 2:
                this.arrayMessagesTravel[numCase] = [1250, 327, this.messageInteraction + "entrer"];
                break;
            case 3:
                this.arrayMessagesTravel[numCase] = [1550, 332, this.messageInteraction + "parler"];
                break;
        }
    }


    //// POUR SANTA

    remplirArrayTailleZoneInterractionSanta(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTailleZoneInterractionSanta[numCase] = [0, 300];
                break;
            case 1:
                this.arrayTailleZoneInterractionSanta[numCase] = [500, 1000];
                break;

        }
    }



    remplirArrayMessagesSanta(numCase) {
        switch (numCase) {
            case 0:
                this.arrayMessagesSanta[numCase] = [25, 350, this.messageInteraction + "sortir"];
                break;
            case 1:
                this.arrayMessagesSanta[numCase] = [450, 275, this.messageInteraction + "parler"];
                break;

        }
    }

    /// POUR HOME 

    remplirArrayTailleZoneInterractionHome(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTailleZoneInterractionHome[numCase] = [0, 300];
                break;

            case 1:
                this.arrayTailleZoneInterractionHome[numCase] = [1775, 2000];
                break;

            case 2:
                this.arrayTailleZoneInterractionHome[numCase] = [1480, 1680];
                break;

        }
    }

    remplirArrayMessagesHome(numCase) {
        switch (numCase) {
            case 0:
                this.arrayMessagesHome[numCase] = [65, 200, this.messageInteraction + "sortir"];
                break;
            case 1:
                this.arrayMessagesHome[numCase] = [1750, 290, this.messageInteraction + "monter"];
                break;
            case 2:
                this.arrayMessagesHome[numCase] = [1465, 210, this.messageInteraction + "entrer"];
                break;
        }
    }

    /// POUR BEDROOM

    remplirArrayTailleZoneInterractionBedroom(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTailleZoneInterractionBedroom[numCase] = [0, 150];
                break;

        }
    }

    remplirArrayMessagesBedroom(numCase) {
        switch (numCase) {
            case 0:
                this.arrayMessagesBedroom[numCase] = [170, 335, this.messageInteraction + "descendre"];
                break;
        }
    }

    /// POUR DinnerRoom

    remplirArrayTailleZoneInterractionDinnerRoom(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTailleZoneInterractionDinnerRoom[numCase] = [150, 350];
                break;

        }
    }

    remplirArrayMessagesDinnerRoom(numCase) {
        switch (numCase) {
            case 0:
                this.arrayMessagesDinnerRoom[numCase] = [165, 255, this.messageInteraction + "ouvrir"];
                break;
        }
    }
}