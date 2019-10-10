class GuessingGame {
    constructor() {
        var numMin;
        var numMax;
        var res;
    }

    setRange(min, max) {
        this.numMax = max;
        this.numMin = min;
    }

    guess() {
        this.res = (this.numMin + this.numMax)/2;
        // this.res = Math.floor(this.res);
        this.res = Math.floor(this.res);
        // console.log (this.res);
        // return Math.floor(this.res);
        return this.res;
    }

    lower() {
        this.numMax = this.res + 1;
    }

    greater() {
        this.numMin = this.res;
    }
}

module.exports = GuessingGame;
