class Button extends Phaser.GameObjects.Sprite {
    constructor(config) {
        
        //verifi si il y a une scene
        if (!config.scene) {
            console.log('missing scene');
            return;
        }
        //verifi si il y a une key
        if (!config.key) {
            console.log("missing key!");
            return;
        }
        //si il n'y a pas de propriété up
        if (!config.up) {
            config.up = 0;
        }
        //si il n'y a pas de propriété down
        if (!config.down) {
            config.down = config.up;
        }
        //si il n'y a pas de proptiété hover
        if (!config.over) {
            config.over = config.up;
        }
        //appelle le constructeur du parent et le place en coordonnées 0,0
        super(config.scene, 0, 0, config.key, config.up);

        //fait une reference de classe de la config
        this.config = config;
       
       	
        //si la config contient une propriété x
        if (config.x) {
            this.x = config.x;
        }
         //si la config contient une propriété y
        if (config.y) {
            this.y = config.y;
        }
        
        //ajoute this a la scene
        config.scene.add.existing(this);
        
       	//met en interactif
        this.setInteractive();
        
        //ajoute des listener
        this.on('pointerdown',this.onDown,this);
        this.on('pointerup',this.onUp,this);
        this.on('pointerover',this.onOver,this);
        this.on('pointerout',this.onUp,this);
    }
    onDown()
    {
    	this.setFrame(this.config.down);
    }
    onOver()
    {
    	this.setFrame(this.config.over);
    }
    onUp()
    {
    	this.setFrame(this.config.up);
    }
}