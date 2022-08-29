sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cherry: Sprite = null
game.splash("Cherry Picker Mrs. Smith")
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1 
    1 1 8 8 8 8 8 8 8 8 8 8 8 8 1 1 
    1 1 8 8 8 3 3 3 3 3 3 8 8 8 1 1 
    1 1 8 8 8 3 3 3 3 3 3 8 8 8 1 1 
    1 1 8 8 3 3 3 3 3 3 3 3 8 8 1 1 
    1 1 8 8 3 3 f 3 3 f 3 3 8 8 1 1 
    1 1 8 8 3 3 3 3 3 3 3 3 8 8 1 1 
    1 1 8 8 3 3 3 f f 3 3 3 8 8 1 1 
    1 1 8 3 3 3 3 3 3 3 3 3 3 8 1 1 
    1 1 8 3 3 3 3 3 3 3 3 3 3 8 1 1 
    1 1 8 3 3 3 3 3 3 3 3 3 3 8 1 1 
    1 1 8 3 3 3 3 3 3 3 3 3 3 8 1 1 
    1 1 8 3 3 3 3 3 3 3 3 3 3 8 1 1 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    cherry = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e . . . . . . . 
        . . e . . . . . e . . . . . . . 
        . e e . . . . . e . . . . . . . 
        . 2 2 . . . . 2 e 2 2 . . . . . 
        2 2 2 2 2 . 2 2 2 2 2 2 . . . . 
        2 2 2 2 2 . 2 2 2 2 2 2 . . . . 
        2 2 2 2 2 . 2 2 2 2 2 2 . . . . 
        . 2 2 2 . . . 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
