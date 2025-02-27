const {
    isStrike,
    isSpare,
    strikeBonus,
    spareBonus,
    sumOfBallsInFrame
} = require("./helpers");

class BowlingGame {
    constructor() {
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    score() {
        let totalScore = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (isStrike(this.rolls, rollIndex)) {
                totalScore += 10 + strikeBonus(this.rolls, rollIndex);
                rollIndex += 1;
            } else if (isSpare(this.rolls, rollIndex)) {
                totalScore += 10 + spareBonus(this.rolls, rollIndex);
                rollIndex += 2;
            } else {
                totalScore += sumOfBallsInFrame(this.rolls, rollIndex);
                rollIndex += 2;
            }
        }

        return totalScore;
    }
}

module.exports = BowlingGame;
