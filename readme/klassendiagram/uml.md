# UML

```ts

- class Game {
    + score : number
    + lives : number = 3
    - gameOver : boolean = false
    |
    - gameLoop()
    - checkCollision(a : ClientRect, b : ClientRect) : boolean
    + changeScore(amount : number)
    + changeLives(amount : number)
    |
    has class Paddle {
        - inputLeft : number = 65
        - inputRight : number = 68
        - posX : number = clientWidth / 2
        - posY : number = clientHeight - 10
        - speedX : number = 7
        |
        + spawn()
        + update()
        + reset()
        - onKeyUp()
        - onKeyDown()
        + getRectangle()
    }
    has class Ball {
        - posX : number = Paddle.posX
        - posY : number = Paddle.posY - 10
        - speedX : number = 3
        - speedY : number = -7
        |
        + spawn()
        + update()
        + reset()
        + checkBrickCollision() : boolean
        + checkPaddleCollision() : boolean
        + checkBorderCollision() : boolean
        + bounceX()
        + bounceY()
        + getRectangle()
    }
    has class Grid {
        - posX : number
        - posY : number
        - columns : number = 12
        - rows : number = 7
        |
        + spawnBrick()
        |
        has class Brick {
            - posX : number
            - posY : number
            |
            + spawn()
            + hit()
            + getRectangle()
            |
            class PurpleBrick extends Brick {
                - color = purple
            }
            class RedBrick extends Brick {
                - color = red
            }
        }
    }
}

```