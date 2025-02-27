function isStrike(rolls, rollIndex) {
    return rolls[rollIndex] === 10;
}

function isSpare(rolls, rollIndex) {
    return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
}

function strikeBonus(rolls, rollIndex) {
    return rolls[rollIndex + 1] + rolls[rollIndex + 2];
}

function spareBonus(rolls, rollIndex) {
    return rolls[rollIndex + 2];
}

function sumOfBallsInFrame(rolls, rollIndex) {
    return rolls[rollIndex] + rolls[rollIndex + 1];
}

//export
module.exports = {
    isStrike,
    isSpare,
    strikeBonus,
    spareBonus,
    sumOfBallsInFrame };