sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    pause(100)
    GoodShape = sprites.create(assets.image`Green Square`, SpriteKind.Food)
    GoodShape.setPosition(-150, -150)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Random = randint(0, 10)
    if (Random <= 8) {
        GoodShape.setVelocity(50, 50)
        GoodShape.setBounceOnWall(true)
    } else {
        BadShape.setVelocity(50, 50)
    }
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let Random = 0
let BadShape: Sprite = null
let GoodShape: Sprite = null
let Catcher = sprites.create(assets.image`Pink Square`, SpriteKind.Player)
GoodShape = sprites.create(assets.image`Green Square`, SpriteKind.Food)
BadShape = sprites.create(assets.image`Circle`, SpriteKind.Enemy)
Catcher.setStayInScreen(true)
Catcher.setBounceOnWall(true)
BadShape.setPosition(-150, -150)
GoodShape.setPosition(-150, -150)
info.setScore(0)
forever(function () {
    controller.moveSprite(Catcher)
    if (GoodShape.overlapsWith(Catcher)) {
        music.baDing.play()
        GoodShape.destroy(effects.hearts, 500)
        info.changeScoreBy(1)
    }
    if (BadShape.overlapsWith(Catcher)) {
        music.wawawawaa.play()
        Catcher.destroy(effects.fire, 500)
        info.changeScoreBy(-1)
        BadShape.destroy()
    }
})
