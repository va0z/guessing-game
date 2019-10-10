class GuessingGame {
    constructor() {
        var numMin;
        var numMax;
        var res;
    }

    setRange(min, max) {
        this.numMax = max - 1;
        this.numMin = min;
    }

    guess() {
        this.res = Math.floor((this.numMin + this.numMax)/2);
        return this.res + 1;
    }

    lower() {
        this.numMax = this.res;
    }

    greater() {
        this.numMin = this.res + 1;
    }
}

module.exports = GuessingGame;
