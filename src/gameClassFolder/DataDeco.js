class DataDeco {
    constructor() {


        this.arrayRooms =new Array();

        this.initDecoRdc();
        this.initDecoBedroom();
        this.initDecoDinnerRoom();

    }


    initDecoRdc() {

        this.arrayDecoRdcDerriere = [

            [150, 120, "Couronne de Noël",0.3, 0.3],
            [325, 200, "Cloches",0.3, 0.3],
            [790, 150, 'Tableau du Village',0.25, 0.25],
            [800, 395, 'Cheminée',0.1, 0.1],
            [1200, 225, 'Fenêtre',0.25, 0.25],
            [1200, 443, 'Canapé',0.35, 0.25],
            [1550, 125, "Tableau de famille",0.3, 0.3],
            [1780, 300, "Chaussette de noël",0.15, 0.15],
            [1850, 200, "Sucre d\'orge",0.1, 0.1],

        ];


        this.arrayDecoRdcDevant = [
            [500, 310, 'Sapin de noël',0.4, 0.4],
        ];

        this.arrayDecoRDC = [this.arrayDecoRdcDerriere , this.arrayDecoRdcDevant];

        this.arrayRooms[0] = this.arrayDecoRDC;
    }

    initDecoBedroom(){

        this.arrayDecoBedroomDerriere = [

            [500, 200, "Fenêtre Ronde",0.25, 0.25],
            [500, 562, "Tapis de chambre",1.65, 0.6],
            [500, 480, "Lit",0.8, 0.8],
            [275, 300, "Livres",0.1, 0.1],
            [725, 225, "Poster de Noël",0.1, 0.1],
            [225, 435, "Plante en pot",0.4, 0.4],
            [275, 200, "Lampe Murale",0.25, 0.25],
            [750, 430, "Contrebasse",0.3, 0.3],
            [880, 470, "Chaise à bascule",0.5, 0.5],


        ];


        this.arrayDecoBedroomDevant = [];

        this.arrayDecoBedroom = [this.arrayDecoBedroomDerriere , this.arrayDecoBedroomDevant];

        this.arrayRooms[1] = this.arrayDecoBedroom;

    }

    initDecoDinnerRoom(){

        this.arrayDecoDinnerRoomDerriere = [

            [875, 400, "Plante Grimpante",0.15, 0.3],
            [875, 420, "Tourne-Disque",0.25, 0.25],
            [570, 580, "Tapis Blanc",0.15, 0.1],
            [550, 335, "Bibliothèque",0.5, 0.3],
            [135, 345, "Vieille Horloge",0.23, 0.23],
            [725, 180, "Cadre Lac Enneigé",0.2, 0.2],
            [285, 175, "Cadre Aurore Boréale",0.14, 0.14],
            [500, 145, "Lustre",0.8, 0.8],
        ];


        this.arrayDecoDinnerRoomDevant = [
            [600, 580, "Table",0.75, 0.75],
        ];

        this.arrayDecoDinnerRoom = [this.arrayDecoDinnerRoomDerriere , this.arrayDecoDinnerRoomDevant];

        this.arrayRooms[2] = this.arrayDecoDinnerRoom;

    }
}