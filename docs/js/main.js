"use strict";
var Game = (function () {
    function Game() {
        console.log("Game created!");
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Grid = (function () {
    function Grid() {
        this.columns = 12;
        this.rows = 7;
        console.log("Grid created!");
        for (var row = 0; row < this.rows; row++) {
            for (var column = 0; column < this.columns; column++) {
            }
        }
    }
    return Grid;
}());
//# sourceMappingURL=main.js.map