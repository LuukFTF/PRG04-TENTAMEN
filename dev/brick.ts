class Brick {
    // Parameters
    // Fields 
    protected div : HTMLElement

    private posX : number = 0
    private posY : number = 0
    
    // Properties

    
    // Constructor
    constructor() {
        console.log("Brick created")
        this.div = document.createElement("brick")

        let game = document.getElementsByTagName("grid")[0]
        game.appendChild(this.div)

        console.log(this.posX, this.posY)
    
    }


    // Functions

    public spawn() {

    }

    public update() {

        this.div.style.transform = `translate(${this.posX}px, ${this.posY}px)`
    }

    public reset() {

    }

    public hit() {

    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }
    
}


class PurpleBrick extends Brick {
    // Parameters
    // Fields 

    // Properties

    
    // Constructor
    constructor() {
        super()
        console.log("PurpleBrick created")
        this.div = document.createElement("purpleBrick")

    }

    // Functions
}


class RedBrick extends Brick {
    // Parameters
    // Fields 

    // Properties

    
    // Constructor
    constructor() {
        super()
        console.log("RedBrick created")
        this.div = document.createElement("redbrick")

    }

    // Functions
}