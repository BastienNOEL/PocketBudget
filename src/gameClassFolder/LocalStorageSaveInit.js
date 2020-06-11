class LocalStorageSaveInit extends DataSave {
    constructor() {
        super();

        //localStorage.setItem('lvPlayer', 2); // permet de faire des tests, mais doit etre supprimé 
        //localStorage.setItem('nbStarCoin', 3);

        this.arrayKey = Object.getOwnPropertyNames(this.arrayDatasInit);

        for (var key in this.arrayKey) {

            if (localStorage.getItem(this.arrayKey[key]) === null) {
                localStorage.setItem(this.arrayKey[key], this.arrayDatasInit[this.arrayKey[key]]);
            }
        }
    }

}