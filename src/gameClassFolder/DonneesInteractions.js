class DonneesInteractions {

    constructor() {

        this.messageInteraction  = "Appuyez sur ESPACE";

        this.arrayScenes = new Array();

        this.arrayInteractionsTravel = new Array(4);
        this.arrayInteractionsSanta = new Array(2);
        this.arrayInteractionsHome = new Array(1);

        this.arrayTailleZoneInterractionTravel = [];
        this.arrayTailleZoneInterractionSanta = [];
        this.arrayTailleZoneInterractionHome = [];

       // this.arrayFonctionsInteractionTravel = [];
        //this.arrayFonctionsInteractionSanta = [];
        //this.arrayFonctionsInteractionHome = [];

        this.arrayMessagesTravel = [];
        this.arrayMessagesSanta = [];
        this.arrayMessagesHome = [];


        this.initTableaux();
        this.createDatas();


        //console.log('%c%s', 'color: #e50000', this.arrayScenes);

    }

    initTableaux() {

        for (var i = 0; i < this.arrayInteractionsTravel.length; i++) {

            this.remplirArrayTailleZoneInterractionTravel(i);
            //this.remplirArrayFonctionsInteractionTravel(i);
            this.remplirArrayMessagesTravel(i);

            this.arrayInteractionsTravel[i] = [this.arrayTailleZoneInterractionTravel[i]/*, this.arrayFonctionsInteractionTravel[i]*/, this.arrayMessagesTravel[i]]
        }

        for (var i = 0; i < this.arrayInteractionsSanta.length; i++) {

            this.remplirArrayTailleZoneInterractionSanta(i);
            //this.remplirArrayFonctionsInteractionSanta(i);
            this.remplirArrayMessagesSanta(i);

            this.arrayInteractionsSanta[i] = [this.arrayTailleZoneInterractionSanta[i], /*this.arrayFonctionsInteractionSanta[i],*/ this.arrayMessagesSanta[i]]

        }

        for (var i = 0; i < this.arrayInteractionsHome.length; i++) {

            this.remplirArrayTailleZoneInterractionHome(i);
            //this.remplirArrayFonctionsInteractionHome(i);
            this.remplirArrayMessagesHome(i);

            this.arrayInteractionsHome[i] = [this.arrayTailleZoneInterractionHome[i], /*this.arrayFonctionsInteractionHome[i], */this.arrayMessagesHome[i]]

        }
    }

    createDatas() {

        this.arrayScenes[0] = this.arrayInteractionsTravel;
        this.arrayScenes[1] = this.arrayInteractionsSanta;
        this.arrayScenes[2] = this.arrayInteractionsHome;

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

    /*remplirArrayFonctionsInteractionTravel(numCase) {

        switch (numCase) {
            case 0:
                this.arrayFonctionsInteractionTravel[numCase] = [function () {
                    this.scene.start("PereNoel");
                    posYTravel = this.player.y;
                    posXTravel = this.player.x;
                    this.scene.stop('Gui');
                }];
                break;
            case 1:
                this.arrayFonctionsInteractionTravel[numCase] = [function () {
                    this.scene.start("Boutique");
                    posYTravel = this.player.y;
                    posXTravel = this.player.x;
                    this.scene.stop('Gui');
                }];
                break;
            case 2:
                this.arrayFonctionsInteractionTravel[numCase] = [function () {
                    this.scene.start("Home");
                    posYTravel = this.player.y;
                    posXTravel = this.player.x;
                    this.scene.stop('Gui');
                }];
                break;
            case 3:
                this.arrayFonctionsInteractionTravel[numCase] = [function () {
                    this.scene.start("LutinShop");
                    posYTravel = this.player.y;
                    posXTravel = this.player.x;
                    this.scene.stop('Gui');
                }];
                break;
        }
    }*/

    remplirArrayMessagesTravel(numCase){
        switch (numCase) {
            case 0:
                this.arrayMessagesTravel[numCase] = [150, 327 , this.messageInteraction];
                break;
            case 1:
                this.arrayMessagesTravel[numCase] = [800, 348 , this.messageInteraction];
                break;
            case 2:
                this.arrayMessagesTravel[numCase] = [1250, 327 , this.messageInteraction];
                break;
            case 3:
                this.arrayMessagesTravel[numCase] = [1550, 332 , this.messageInteraction];
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

    /*remplirArrayFonctionsInteractionSanta(numCase) {

        switch (numCase) {
            case 0:
                this.arrayFonctionsInteractionSanta[numCase] = [function () {
                    posXpn = this.player.x;
                    posYpn = this.player.y;
                    this.scene.start("Travel");
                }];
                break;
            case 1:
                this.arrayFonctionsInteractionSanta[numCase] = [function () {
                    mission.newMission();
                    posXpn = this.player.x;
                    posYpn = this.player.y;
                    this.scene.start("MissionScreen")
                    this.scene.stop('Gui');
                }];
                break;

        }
    }*/

    remplirArrayMessagesSanta(numCase){
        switch (numCase) {
            case 0:
                this.arrayMessagesSanta[numCase] = [25, 325 , this.messageInteraction];
                break;
            case 1:
                this.arrayMessagesSanta[numCase] = [450, 275 , this.messageInteraction];
                break;

        }
    }

    /// POUR HOME 

    remplirArrayTailleZoneInterractionHome(numCase) {

        switch (numCase) {
            case 0:
                this.arrayTailleZoneInterractionHome[numCase] = [0, 300];
                break;

        }
    }

   /* remplirArrayFonctionsInteractionHome(numCase) {

        switch (numCase) {
            case 0:
                this.arrayFonctionsInteractionHome[numCase] = [function () {
                    posXHome = this.player.x;
                    posYHome = this.player.y;
                    this.scene.start("Travel");
                }];
                break;
        }
    }*/

    remplirArrayMessagesHome(numCase){
        switch (numCase) {
            case 0:
                this.arrayMessagesHome[numCase] = [65, 200 , this.messageInteraction];
                break;
        }
    }
}