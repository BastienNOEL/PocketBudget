class DataDeco {
    constructor() {


        this.arrayRooms =new Array();

        this.initDecoRdc();
    }


    initDecoRdc() {

        this.arrayDecoRdcDerriere = [

            [150, 120, "couronne",0.3, 0.3],
            [325, 200, "cloches",0.3, 0.3],
            [790, 150, 'tableau',0.25, 0.25],
            [800, 395, 'cheminee',0.1, 0.1],
            [1200, 225, 'fenetre',0.25, 0.25],
            [1200, 443, 'canape',0.35, 0.25],
            [1550, 125, "tableauSnowMen",0.3, 0.3],
            [1780, 300, "chaussette",0.15, 0.15],
            [1850, 200, "sucre",0.1, 0.1],

        ];


        this.arrayDecoRdcDevant = [
            [500, 310, 'sapinNoel',0.4, 0.4],
        ];

        this.arrayDecoRDC = [this.arrayDecoRdcDerriere , this.arrayDecoRdcDevant];

        this.arrayRooms[0] = this.arrayDecoRDC;
    }
}