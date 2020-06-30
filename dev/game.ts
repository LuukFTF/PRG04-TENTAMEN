class Game {
    // Fields    
    

    constructor() {
        console.log("Game created!")       

        this.gameLoop()
    }

    private gameLoop() : void {

        requestAnimationFrame(() => this.gameLoop()) 
    }
} 

window.addEventListener("load", () => new Game())