/// <reference path="ball.ts"/>

class Grid {
    // Fields
    private div : HTMLElement

    private columns : number    = 12
    private rows    : number    = 7

    private bricks : Brick[] = [] 

    constructor() {
        console.log("Grid created!")
        this.div = document.createElement("grid")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                this.bricks.push(new Brick())
            }
            
        }
    }

    public update() {
        for (let brick of this.bricks) {
            brick.update()
        }
    }
}