class BoutiqueScene extends Phaser.Scene {
    constructor() {
        super("Boutique");
    }


    create() {

        console.log('%c%s', 'color: #8400ff', "Boutique");
/*
        sessionStorage.setItem('B5', 5);
        sessionStorage.setItem('B10', 5);
        sessionStorage.setItem('B20', 5);
        sessionStorage.setItem('B50', 5);
        sessionStorage.setItem('B100', 5);
*/

        this.rectBlanc = this.add.image(500, 300, 'recBlanc');

        this.maBourse = this.add.container(500, 453);
        this.comptoir = this.add.container(500, 230);
        this.zonePrix = this.add.container(100, 80);
        this.zoneConsigne = this.add.container(597, 77);

        this.rectVert = this.add.image(0, 0, 'recVert');
        this.rectRouge = this.add.image(0, 0, 'recRouge');
        this.rectBleu = this.add.image(0, 0, 'recBleu');
        this.rectJaune = this.add.image(0, 0, 'recJaune');

        this.boutonRetour = new Button({
            'scene': this,
            'key': 'flecheGauche',
            'x': -450,
            'y': 80
        });

        this.boutonRetour.setScale(0.5, 0.5);
        this.boutonRetour.on('pointerdown', this.backTravel, this);

        this.maBourse.add(this.rectBleu);
        this.maBourse.add(this.boutonRetour);

        this.comptoir.add(this.rectJaune);
        this.zonePrix.add(this.rectRouge);
        this.zoneConsigne.add(this.rectVert);


        this.rectBleu.setScale(1.35, 0.7);
        this.rectJaune.setScale(2.4, 0.6);
        this.rectRouge.setScale(0.15, 0.45);
        this.rectVert.setScale(0.62, 0.27);

        

        if (sessionStorage.getItem('B5') > 0) {

            console.log('%c%s', 'color: #e5de73', "entre dans la condition");
            this.b5 = new Button({
                'scene': this,
                'key': 'billet5',
                'x': -400,
                'y': -80
            });

            this.b5.setScale(0.055, 0.055);
            this.b5.on('pointerdown', this.cliqueBillet, this);
/*
            this.b5.on('pointerdown', function (pointer) {

                console.log('cliquer sur 5');
        
                this.add.image(pointer.x, pointer.y, 'logo');
        
            }, this);
*/
            this.maBourse.add(this.b5);

        }

        if (sessionStorage.getItem('B10') > 0) {

            this.b10 = new Button({
                'scene': this,
                'key': 'billet10',
                'x': -250,
                'y': -80
            });
            this.b10.setScale(0.05, 0.05);
            this.b10.on('pointerdown', this.cliqueBillet, this);
            this.maBourse.add(this.b10);

        }

        if (sessionStorage.getItem('B20') > 0) {

            this.b20 = new Button({
                'scene': this,
                'key': 'billet20',
                'x': -100,
                'y': -80
            });
            this.b20.setScale(0.05, 0.05);
            this.b20.on('pointerdown', this.cliqueBillet, this);
            this.maBourse.add(this.b20);

        }

        if (sessionStorage.getItem('B50') > 0) {

            this.b50 = new Button({
                'scene': this,
                'key': 'billet50',
                'x': 50,
                'y': -80
            });
            this.b50.setScale(0.05, 0.05);
            this.b50.on('pointerdown', this.cliqueBillet, this);
            this.maBourse.add(this.b50);

        }

        if (sessionStorage.getItem('B100') > 0) {

            this.b100 = new Button({
                'scene': this,
                'key': 'billet100',
                'x': 200,
                'y': -80
            });
            this.b100.setScale(0.025, 0.025);
            this.b100.on('pointerdown', this.cliqueBillet, this);
            this.maBourse.add(this.b100);

        }


    }

    cliqueBillet() {

        console.log('%c%s', 'color: #000000', "click");

    }

    backTravel(){
        this.scene.start("Travel");
    }


}