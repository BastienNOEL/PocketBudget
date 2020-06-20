//Cette scene est l'écran de pause, qui permet de gerer l'import/export de la sauvegarde et de revenir à l'ecran titre

class PauseScene extends Phaser.Scene {
    constructor() {
        super("Pause");

    }

    create(){
        this.container = this.add.container(500,295);

        this.window = this.add.image(0,0,'window');
        this.window.setScale(0.4,0.4);


        this.btnSave = new Button({
            'scene': this,
            'key': 'buttonSave',
            'x': 415,
            'y': 240
        });
        this.btnSave.on('pointerdown', function(){
            saveData();

        }, this);
        this.btnSave.setScale(0.6,0.6);


        this.btnImportSave = new Button({
            'scene': this,
            'key': 'buttonImportSave',
            'x': 585,
            'y': 240
        });
        this.btnImportSave.on('pointerdown', function(){
        importSave.click();
            
        }, this);

        this.btnHome = new Button({
            'scene': this,
            'key': 'buttonHome',
            'x': 500,
            'y': 370
        });
        this.btnHome.on('pointerdown', this.goTitle, this);
        this.btnHome.setScale(0.8,0.8);

        this.container.add(this.window);
    }

    /* retourne à l'ecran titre */
    goTitle(){
        location.reload();
    }
}