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
