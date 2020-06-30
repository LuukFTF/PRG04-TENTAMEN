class Ball {
    // Parameters
    // Fields 
    private div : HTMLElement
    private gameInstance : Game

    private posX : number = window.innerWidth / 2
    private posY : number = window.innerHeight - 100
    private speedX : number = 7
    private speedY : number = 3
    
    // Properties

    
    // Constructor
    constructor(gameInstance : Game) {
        this.gameInstance = gameInstance
        console.log("Ball created")
        this.div = document.createElement("ball")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        console.log(this.posX, this.posY, this.speedX, this.speedY)
    }


    // Functions

    public spawn() {

    }

    public update() {
        this.posX += this.speedX
        this.posY += this.speedY

        this.checkBorderCollision()
        this.checkPaddleCollision()
        this.checkBorderCollision()

        this.div.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }

    public reset() {

    }
    
    public checkBrickCollision() {
        this.gameInstance.checkCollision(this.getRectangle(), this.gameInstance.paddle.getRectangle())
    }
    public checkPaddleCollision() {
        this.gameInstance.checkCollision(this.getRectangle(), this.gameInstance.paddle.getRectangle())
    }
    public checkBorderCollision() {
        let rightBorder = window.innerWidth - this.div.clientWidth
        let bottemBorder = window.innerHeight - this.div.clientHeight

        if(this.posY > bottemBorder || this.posY < 0) {
            this.bounceY()
        }

        if(this.posX < 0 || this.posX > rightBorder){
            this.bounceX()
        }
    }
    
    public bounceX() {
        this.speedX *= -1
    }
    public bounceY() {
        this.speedY *= -1
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }
    
}