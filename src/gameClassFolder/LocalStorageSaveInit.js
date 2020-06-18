class LocalStorageSaveInit extends DataSave {
    constructor() {
        super();

        //localStorage.setItem('lvPlayer', 29); // permet de faire des tests, mais doit etre supprimé (max = 29)
        //localStorage.setItem('FirstMission', false);
        
        //localStorage.setItem('nbStarCoin', 99);

        this.arrayKey = Object.getOwnPropertyNames(this.arrayDatasInit);

        for (var key in this.arrayKey) {

            if (localStorage.getItem(this.arrayKey[key]) === null) {
                localStorage.setItem(this.arrayKey[key], this.arrayDatasInit[this.arrayKey[key]]);
            }
        }
    }

}