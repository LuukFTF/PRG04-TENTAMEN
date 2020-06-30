/// <reference path="ball.ts"/>
/// <reference path="paddle.ts"/>
/// <reference path="grid.ts"/>


class Game {
    // Parameters
    // Fields    
    private div : HTMLElement

    private _score: number = 0
    private _lives : number = 3
    private isGameOver : boolean = false

    private _paddle: Paddle
    private _ball : Ball
    private grid : Grid

    // Properties
    public get score(): number { return this._score }
    public set score(value: number) { this._score = value }

    public get lives(): number { return this._lives }
    public set lives(value: number) { this._lives = value }


    public get paddle(): Paddle { return this._paddle }

    public get ball(): Ball { return this._ball }

    // Constructor
    constructor() {
        console.log("Game created!")
        this.div = document.createElement("game")
        this.div

        this._paddle = new Paddle()
        this._ball = new Ball(this)
        this.grid = new Grid()

        this.gameLoop()
    }

    // Functions

    // gameLoop
    private gameLoop() : void {

        this._paddle.update()
        this._ball.update()
        this.grid.update()

        if(this._lives == 0 || this.isGameOver) { this.gameOver() }

        requestAnimationFrame(() => this.gameLoop()) 
    }
    
    // Loop Functions

    // General Functions
    gameOver() {

    }

    public checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
        }

    public changeScore(amount : number) {
        this._score += amount
        document.getElementsByTagName("score")[0].innerHTML = `Score: ${this._score}`
    }
    public changeLives(amount : number) {
        this._lives += amount
        document.getElementsByTagName("lives")[0].innerHTML = `Score: ${this._lives}`
    }
} 

window.addEventListener("load", () => new Game())