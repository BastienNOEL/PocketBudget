//configure le jeu

/** @type {import("../typings/phaser")} */

localStorage.clear(); // permet de faire des tests, a supprimer plus tard

const config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1000,
        height: 600
    },
    //type: Phaser.AUTO,
    type: Phaser.CANVAS,
    parent: 'GameWindow',
    scene: [LoadScene, TitleScene, TravelScene, BoutiqueScene, PereNoelScene, MissionScreen, HomeScene, LutinShopScene, GuiScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },

}


var posXTravel = 500;
var posYTravel = 447.5;
var posXpn = 100;
var posYpn = 502;
var posXHome = 100;
var posYHome = 426.5;

var game = new Phaser.Game(config);
var LoadDatas = new LocalStorageSaveInit();
var mission = new Mission();
var dataShop = new DonneesLutinShop();
var dataInteractions = new DonneesInteractions();
var dataDeco = new DataDeco();


/// Exporter sa sauvegarde

function saveData() {
    var save = JSON.stringify(localStorage);

    var vLink = document.createElement('a'),
        vBlob = new Blob([save], {
            type: "octet/stream"
        }),
        vName = 'savePocketBudget.json',
        vUrl = window.URL.createObjectURL(vBlob);
    vLink.setAttribute('href', vUrl);
    vLink.setAttribute('download', vName);
    vLink.click();
}

// importer sa sauvegarde

importSave.addEventListener("change", importDatas, false);

function importDatas(e) {
    var files = e.target.files,
        reader = new FileReader();
    reader.onload = parseDatas;
    reader.readAsText(files[0]);
    location.reload();
}

function parseDatas() {

    var data = JSON.parse(this.result );
    Object.keys(data).forEach(function (k) {
        localStorage.setItem(k, data[k]);
    });
    importSave.value = '';  //efface la valeur input apres chaque import
}
