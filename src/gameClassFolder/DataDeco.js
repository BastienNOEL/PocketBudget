class DataDeco {
    constructor() {


        this.arrayRooms =new Array();

        this.initDecoRdc();
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
}