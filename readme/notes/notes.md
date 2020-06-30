# Notes Programmeren 4 Tentamen
*Lucas van der Vegt*

Heb je een oneven studentnummer dan werk je opdracht B uit

OPDRACHT B

## Beoordeling

- [ ] Classes en verantwoordelijkheden
    - [ ] Klassendiagram
    - [ ] Code
        - [ ] class & object maken
    - [ ] Verantwoordingsdocument

- [ ] Encapsulation
    - [ ] Klassendiagram
        - [ ] acces modifier
    - [ ] Code
        - [ ] get/set
        - [ ] public & protected
    - [ ] Verantwoordingsdocument

- [ ] Composition
    - [ ] Klassendiagram
        - [ ] composition op de goede plek
    - [ ] Code
        - [ ] functie in composition
    - [ ] Verantwoordingsdocument

- [ ] Inheritance
    - [ ] Klassendiagram
            - [ ] inheritance op de goede plek
    - [ ] Code
    - [ ] Verantwoordingsdocument



## Opdracht - Breakout

### UML

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
        - inputLeft : number
        - inputRight : number
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
        + checkBrickCollision()
        + checkPaddleCollision()
        + checkBorderCollision()
        + bounceX()
        + bounceY()
        + getRectangle()
    }
    has class Grid {
        - posX : number
        - posY : number
        - sizeX : number
        - sizeY : number
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

### Paddle
- [ ] Startpositie
    - [ ] start in het midden van het scherm
    - [ ] een klein stukje (5 %, mag je zelf bepalen) vanaf de onderkant
- [ ] Beweging
    - [ ] Links+rechts controls
    - [ ] Border collision
    - [ ] speed van 7
- [ ] collision
    - [ ] hit door ball
        - [ ] ball beinvloeden
 
### Brick
- [ ] Grid
    - [ ] size
    - [ ] location
- [ ] Spawning
- [ ] collision
    - [ ] hit door ball
        - [ ] ball beinvloeden
        - [ ] score +1
- [ ] 2 soorten
    - [ ] inheritence
    - [ ] random kiezen

### Ball
- [ ] Startpositie
    - [ ] start net boven het midden van het balkje
- [ ] Beweging
    - [ ] heeft een snelheid -7 op de y-as
    - [ ] heeft op de x-as willekeurig een snelheid van -3 of 3
- [ ] collision
    - [ ] bottom
        - [ ] reset
        - [ ] life -1
    - [ ] brick
    - [ ] paddle

### Score
- [ ] Brick hit: +1

### Lives
- [ ] 3 Lives
- [ ] Ball hits bottom: life -1
- [ ] Gameover





## Checklist upload

- [ ] Let op de deadline
- [ ] Uploaden op [Cumlaude](https://lms.hr.nl)
- [ ] Plaats de foto van het klassendiagram in de hoofdmap
- [ ] Vul het verantwoordingsdocument volledig in volgens de eisen van de beoordelingscriteria
- [ ] Maak een zip-bestand van de hoofdmap. Zet in de bestandsnaam van de zip je naam

