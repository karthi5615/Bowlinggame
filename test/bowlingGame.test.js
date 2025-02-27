const BowlingGame = require("../src/bowlingGame");

test("Bowling game calculates score correctly", () => {
    const game = new BowlingGame();

    // Frame 1: 1 - 4
    game.roll(1);
    game.roll(4);

    // Frame 2: 4 - 5
    game.roll(4);
    game.roll(5);

    // Frame 3: 6 - /
    game.roll(6);
    game.roll(4); // Spare

    // Frame 4: 5 - /
    game.roll(5);
    game.roll(5); // Spare

    // Frame 5: X
    game.roll(10); // Strike

    // Frame 6: 0 - 1
    game.roll(0);
    game.roll(1);

    // Frame 7: 7 - /
    game.roll(7);
    game.roll(3); // Spare

    // Frame 8: 6 - /
    game.roll(6);
    game.roll(4); // Spare

    // Frame 9: X
    game.roll(10); // Strike

    // Frame 10: 2 - / - 6
    game.roll(2);
    game.roll(8); // Spare
    game.roll(6); // Extra roll for spare

    expect(game.score()).toBe(133);
});
