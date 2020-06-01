class GuiScene extends Phaser.Scene {
    constructor() {
        super("Gui");

    }

    create(){
        this.zoneLvl = this.add.container(930, 60);

        this.lvStar = this.add.image(0,0,'starLvl');
        this.lvStar.setScale(0.5,0.5);

        this.txtLvl = this.add.text(0,0,sessionStorage.getItem('lvPlayer'),{
            fill : "black",
            font : "40px Arial" 
        })
        this.txtLvl.setOrigin(0.5, 0.5);

        this.zoneLvl.add(this.lvStar);
        this.zoneLvl.add(this.txtLvl);


        if(sessionStorage.getItem('nbStarCoin')>0){
            this.zoneCoin = this.add.container(800, 65);

            this.starCoin = this.add.image(0,0,'starCoin');
            this.starCoin.setScale(0.06,0.06);
    
            this.txtCoin = this.add.text(0,0,sessionStorage.getItem('nbStarCoin'),{
                fill : "black",
                font : "20px Arial" 
            })
            this.txtCoin.setOrigin(0.5, 0.5);
    
            this.zoneCoin.add(this.starCoin);
            this.zoneCoin.add(this.txtCoin);
        }



        console.log('%c%s', 'color: #9c66cc', "GUI");
    }
}