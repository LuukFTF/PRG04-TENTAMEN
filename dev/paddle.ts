class Paddle {
    // Parameters
    // Fields 
    private div : HTMLElement

    private inputLeft : number = 65
    private inputRight : number = 68
    private posX : number = window.innerWidth / 2
    private posY : number = window.innerHeight - 50
    private speedX : number = 0
    
    // Properties


    // Constructor
    constructor() {
        console.log("Paddle created")
        this.div = document.createElement("paddle")

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this.div)

        console.log(this.inputLeft, this.inputRight, this.posX, this.posY, this.speedX)
    
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }


    // Functions

    public spawn() {

    }

    public update() {
        let newPosX = this.posX + this.speedX

        if (newPosX > 0 && newPosX + this.div.clientWidth < window.innerWidth) this.posX = newPosX

        this.div.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }

    public reset() {

    }
    
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.inputLeft:
                this.speedX = 7 * -1
                break
            case this.inputRight:
                this.speedX = 7
                break
        }
    }
    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.inputLeft:
                this.speedX = 0
                break
            case this.inputRight:
                this.speedX = 0
                break
        }
    }
    
    public getRectangle() {
        return this.div.getBoundingClientRect()
    }
    
}