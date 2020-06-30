"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ball = (function () {
    function Ball(gameInstance) {
        this.posX = window.innerWidth / 2;
        this.posY = window.innerHeight - 100;
        this.speedX = 7;
        this.speedY = 3;
        this.gameInstance = gameInstance;
        console.log("Ball created");
        this.div = document.createElement("ball");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        console.log(this.posX, this.posY, this.speedX, this.speedY);
    }
    Ball.prototype.spawn = function () {
    };
    Ball.prototype.update = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        this.checkBorderCollision();
        this.checkPaddleCollision();
        this.checkBorderCollision();
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Ball.prototype.reset = function () {
    };
    Ball.prototype.checkBrickCollision = function () {
        this.gameInstance.checkCollision(this.getRectangle(), this.gameInstance.paddle.getRectangle());
    };
    Ball.prototype.checkPaddleCollision = function () {
        this.gameInstance.checkCollision(this.getRectangle(), this.gameInstance.paddle.getRectangle());
    };
    Ball.prototype.checkBorderCollision = function () {
        var rightBorder = window.innerWidth - this.div.clientWidth;
        var bottemBorder = window.innerHeight - this.div.clientHeight;
        if (this.posY > bottemBorder || this.posY < 0) {
            this.bounceY();
        }
        if (this.posX < 0 || this.posX > rightBorder) {
            this.bounceX();
        }
    };
    Ball.prototype.bounceX = function () {
        this.speedX *= -1;
    };
    Ball.prototype.bounceY = function () {
        this.speedY *= -1;
    };
    Ball.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Ball;
}());
var Brick = (function () {
    function Brick() {
        this.posX = 0;
        this.posY = 0;
        console.log("Brick created");
        this.div = document.createElement("brick");
        var game = document.getElementsByTagName("grid")[0];
        game.appendChild(this.div);
        console.log(this.posX, this.posY);
    }
    Brick.prototype.spawn = function () {
    };
    Brick.prototype.update = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Brick.prototype.reset = function () {
    };
    Brick.prototype.hit = function () {
    };
    Brick.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Brick;
}());
var PurpleBrick = (function (_super) {
    __extends(PurpleBrick, _super);
    function PurpleBrick() {
        var _this = _super.call(this) || this;
        console.log("PurpleBrick created");
        _this.div = document.createElement("purpleBrick");
        return _this;
    }
    return PurpleBrick;
}(Brick));
var RedBrick = (function (_super) {
    __extends(RedBrick, _super);
    function RedBrick() {
        var _this = _super.call(this) || this;
        console.log("RedBrick created");
        _this.div = document.createElement("redbrick");
        return _this;
    }
    return RedBrick;
}(Brick));
var Paddle = (function () {
    function Paddle() {
        var _this = this;
        this.inputLeft = 65;
        this.inputRight = 68;
        this.posX = window.innerWidth / 2;
        this.posY = window.innerHeight - 50;
        this.speedX = 0;
        console.log("Paddle created");
        this.div = document.createElement("paddle");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        console.log(this.inputLeft, this.inputRight, this.posX, this.posY, this.speedX);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Paddle.prototype.spawn = function () {
    };
    Paddle.prototype.update = function () {
        var newPosX = this.posX + this.speedX;
        if (newPosX > 0 && newPosX + this.div.clientWidth < window.innerWidth)
            this.posX = newPosX;
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    Paddle.prototype.reset = function () {
    };
    Paddle.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.inputLeft:
                this.speedX = 7 * -1;
                break;
            case this.inputRight:
                this.speedX = 7;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.inputLeft:
                this.speedX = 0;
                break;
            case this.inputRight:
                this.speedX = 0;
                break;
        }
    };
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Paddle;
}());
var Grid = (function () {
    function Grid() {
        this.columns = 12;
        this.rows = 7;
        this.bricks = [];
        console.log("Grid created!");
        this.div = document.createElement("grid");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.div);
        for (var row = 0; row < this.rows; row++) {
            for (var column = 0; column < this.columns; column++) {
                this.bricks.push(new Brick());
            }
        }
    }
    Grid.prototype.update = function () {
        for (var _i = 0, _a = this.bricks; _i < _a.length; _i++) {
            var brick = _a[_i];
            brick.update();
        }
    };
    return Grid;
}());
var Game = (function () {
    function Game() {
        this._score = 0;
        this._lives = 3;
        this.isGameOver = false;
        console.log("Game created!");
        this.div = document.createElement("game");
        this.div;
        this._paddle = new Paddle();
        this._ball = new Ball(this);
        this.grid = new Grid();
        this.gameLoop();
    }
    Object.defineProperty(Game.prototype, "score", {
        get: function () { return this._score; },
        set: function (value) { this._score = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "lives", {
        get: function () { return this._lives; },
        set: function (value) { this._lives = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "paddle", {
        get: function () { return this._paddle; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "ball", {
        get: function () { return this._ball; },
        enumerable: false,
        configurable: true
    });
    Game.prototype.gameLoop = function () {
        var _this = this;
        this._paddle.update();
        this._ball.update();
        this.grid.update();
        if (this._lives == 0 || this.isGameOver) {
            this.gameOver();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.gameOver = function () {
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.changeScore = function (amount) {
        this._score += amount;
        document.getElementsByTagName("score")[0].innerHTML = "Score: " + this._score;
    };
    Game.prototype.changeLives = function (amount) {
        this._lives += amount;
        document.getElementsByTagName("lives")[0].innerHTML = "Score: " + this._lives;
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map