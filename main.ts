namespace SpriteKind {
    export const target = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    target = sprites.create(img`
        b b b . . . . . . . . . . b b b 
        b b b b . . . . . . . . b b b b 
        b b b b b . . . . . . b b b b b 
        . b b b b b . . . . b b b b b . 
        . . b b b b b . . b b b b b . . 
        . . . b b b b b b b b b b . . . 
        . . . . b b b b b b b b . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . b b b b b b b b b b . . . 
        . . b b b b b . . b b b b b . . 
        . b b b b b . . . . b b b b b . 
        b b b b b . . . . . . b b b b b 
        b b b b . . . . . . . . b b b b 
        b b b . . . . . . . . . . b b b 
        `, SpriteKind.target)
    scene.cameraFollowSprite(target)
    controller.moveSprite(target)
    controller.moveSprite(mySprite, 0, 0)
    myEnemy = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . . . d f d d d d . . . 
        . . . . . . d d d d d d d . . . 
        . . . . . . d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . d d . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 d . . . 
        . . . . . d f f f f f f d . . . 
        . . . . . e f f f f f f d e . . 
        . . . . . e e f . . f f f e e . 
        . . . . . . e e . . . . . . e e 
        `,img`
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . . . f d f d d d . . . 
        . . . . . . d d d d d d d . . . 
        . . . . . . d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . d d . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 d . . . 
        . . . . . d f f f f f d d . . . 
        . . . . d d f f f f d d . . . . 
        . . . . . . f f . . f f . . . . 
        . . . . e e e e e e e e . . . . 
        `,img`
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . . . d f d d d d . . . 
        . . . . . . d d d d d d d . . . 
        . . . . . . d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . d d . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . e . 2 2 2 2 2 2 2 . . . 
        . . . . e . 2 2 2 2 2 2 d . . . 
        . . . . e f f f f f f f d e . . 
        . . . . e f f f f f f f d e . . 
        . . . . . . . . . . . . . e . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.target, function (sprite, otherSprite) {
    info.setScore(sprite.x)
    myEnemy = 0
    otherSprite.destroy()
    sprite.destroy()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d d f d . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d f f f f f f d . . . . . 
        . . . d f f f f f f d . . . . . 
        . . . . f f . . f f . . . . . . 
        . . e e e e . . e e e e . . . . 
        `],
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . e e e e e . . . . . 
        . . . . . . e e e e e e . . . . 
        . . . . . . . d f d d d d . . . 
        . . . . . . d d d d d d d . . . 
        . . . . . . d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . d d . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . 2 2 2 2 2 2 d . . . 
        . . . . . d f f f f f f d . . . 
        . . . . . d f f f f f f d . . . 
        . . . . . . f f . . f f . . . . 
        . . . . e e e e . . e e e e . . 
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d d f d . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d f f f f f f d . . . . . 
        . . e d f f f f f f e . . . . . 
        . e e f f f . . f e e . . . . . 
        e e . . . . . . e e . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d f d f . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d d f f f f f d . . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . e e e e e e e e . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d d f d . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . e . . . . 
        . . . d 2 2 2 2 2 2 . e . . . . 
        . . e d f f f f f f f e . . . . 
        . . e d f f f f f f f e . . . . 
        . . e . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (myEnemy == 0) {
        info.setScore(mySprite.x)
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d d f d . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d f f f f f f d . . . . . 
        . . e d f f f f f f e . . . . . 
        . e e f f f . . f e e . . . . . 
        e e . . . . . . e e . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d f d f . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d d f f f f f d . . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . e e e e e e e e . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d f d f . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 e e . . . . 
        . . . d f f f f f f e e . . . . 
        . . . d f f f f f f e e . . . . 
        . . e f f f . . f f e e . . . . 
        . . e e e . . . . . . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d d d f . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . f . . . 
        . . . 2 2 2 2 2 2 2 . f 5 f . . 
        . . . 2 2 2 2 2 2 2 . 5 5 5 f . 
        . . . d 2 2 2 2 2 2 . e 5 f . . 
        . . . d f f f f f f f e 5 5 f . 
        . . . d f f f f f f f e 5 f . . 
        . . . . f f f . . . . . . . . . 
        . . . . e e e e . . . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d f d f . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d d f f f f f d . . . . . 
        . . . . d d f f f f d d . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . e e e e e e e e . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . d d d d f d . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . . d d d d d d . . . . . . 
        . . . . . d d d d . . . . . . . 
        . . . . . . d d . . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . d 2 2 2 2 2 2 . . . . . . 
        . . . d f f f f f f d . . . . . 
        . . . d f f f f f f d . . . . . 
        . . . . f f . . f f . . . . . . 
        . . e e e e . . e e e e . . . . 
        `],
    100,
    false
    )
    mySprite2 = sprites.create(img`
        . . . . 1 f 1 f 1 f 1 . . . . . 
        . . f 1 f 1 f 1 f 1 f 1 f . . . 
        . f 1 f 1 f 1 f 1 f 1 f 1 f . . 
        . 1 f 1 f 1 f 1 f 1 f 1 f 1 . . 
        1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 . 
        f 1 f 1 f 1 f 1 f 1 f 1 f 1 f . 
        1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 . 
        f 1 f 1 f 1 f 1 f 1 f 1 f 1 f . 
        1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 . 
        f 1 f 1 f 1 f 1 f 1 f 1 f 1 f . 
        1 f 1 f 1 f 1 f 1 f 1 f 1 f 1 . 
        . 1 f 1 f 1 f 1 f 1 f 1 f 1 . . 
        . f 1 f 1 f 1 f 1 f 1 f 1 f . . 
        . . f 1 f 1 f 1 f 1 f 1 f . . . 
        . . . . 1 f 1 f 1 f 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite2.setPosition(mySprite.x, mySprite.y)
    mySprite2.follow(target)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 100, 0)
})
let mySprite2: Sprite = null
let target: Sprite = null
let myEnemy = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . e e e e e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . d d d d f d . . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . . d d . . . . . . . . 
    . . . . . 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . . d 2 2 2 2 2 2 . . . . . . 
    . . . d f f f f f f d . . . . . 
    . . . d f f f f f f d . . . . . 
    . . . . f f . . f f . . . . . . 
    . . e e e e . . e e e e . . . . 
    `, SpriteKind.Player)
mySprite.ay = 350
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
myEnemy = 0
