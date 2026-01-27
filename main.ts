/**
 * I'm a very cool dude ok?
 */
function setupCars () {
    GreenCar = sprites.create(assets.image`Green Car`, SpriteKind.Player)
    GreenCar.scale = 0.65
    GreenCar.setPosition(10, lane_2_YD)
    GreenCar.setVelocity(10, 0)
    GreenCar.setStayInScreen(false)
    RedCar = sprites.create(assets.image`Red Car`, SpriteKind.Player)
    RedCar.scale = 0.75
    RedCar.setPosition(8, laneee_3_YD)
    RedCar.setVelocity(10, 0)
    RedCar.setStayInScreen(false)
    YellowCar = sprites.create(assets.image`Yellow Car`, SpriteKind.Player)
    YellowCar.scale = 0.7
    YellowCar.setPosition(10, lane_1_YD)
    YellowCar.setVelocity(10, 0)
    YellowCar.setStayInScreen(false)
}
function XD_XD () {
    laneee_3_YD = 110
    lane_2_YD = 95
    lane_1_YD = 75
    last_XD = 182
    first_XD = 10
}
let i_hate_the_green_car = 0
let y_v = 0
let r_v = 0
let g_v = 0
let first_XD = 0
let last_XD = 0
let lane_1_YD = 0
let YellowCar: Sprite = null
let laneee_3_YD = 0
let RedCar: Sprite = null
let lane_2_YD = 0
let GreenCar: Sprite = null
scene.setBackgroundImage(assets.image`Background 2`)
XD_XD()
setupCars()
game.onUpdate(function () {
    if (YellowCar.x > last_XD) {
        YellowCar.x = first_XD
    }
    if (RedCar.x > last_XD) {
        RedCar.x = first_XD
    }
    if (GreenCar.x > last_XD) {
        GreenCar.x = first_XD
    }
})
game.onUpdateInterval(5000, function () {
    g_v = randint(1, 10)
    r_v = randint(5, 15)
    y_v = randint(10, 20)
    GreenCar.setVelocity(g_v, 0)
    RedCar.setVelocity(r_v, 0)
    YellowCar.setVelocity(y_v, 0)
    info.player1.setScore(y_v)
    info.player2.setScore(g_v)
    info.player3.setScore(r_v)
    if (g_v == r_v) {
        if (y_v == r_v) {
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverMessage(true, "you win")
            game.gameOver(true)
        }
    }
})
game.onUpdateInterval(1000000, function () {
    i_hate_the_green_car = randint(1, 3)
    if (i_hate_the_green_car == 1) {
        YellowCar.startEffect(effects.spray, 5000)
        YellowCar.setVelocity(0, 0)
        game.splash("yellow car was in a accident")
    }
    if (i_hate_the_green_car == 3) {
        RedCar.startEffect(effects.spray, 5000)
        RedCar.setVelocity(0, 0)
        game.splash("red car was in a accident")
    }
    if (i_hate_the_green_car == 2) {
        GreenCar.startEffect(effects.spray, 5000)
        GreenCar.setVelocity(0, 0)
        game.splash("green car was in a accident")
    }
})
