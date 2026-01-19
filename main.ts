function setupCars () {
    GreenCar = sprites.create(assets.image`Green Car`, SpriteKind.Player)
    GreenCar.scale = 0.75
    GreenCar.setPosition(10, 50)
    GreenCar.setVelocity(10, 0)
    GreenCar.setStayInScreen(true)
    RedCar = sprites.create(assets.image`Red Car`, SpriteKind.Player)
    RedCar.scale = 0.75
    RedCar.setPosition(8, 99)
    RedCar.setVelocity(10, 0)
    RedCar.setStayInScreen(true)
    YellowCar = sprites.create(assets.image`Yellow Car`, SpriteKind.Player)
    YellowCar.scale = 0.65
    YellowCar.setPosition(10, 10)
    YellowCar.setVelocity(10, 0)
    YellowCar.setStayInScreen(true)
}
let YellowCar: Sprite = null
let RedCar: Sprite = null
let GreenCar: Sprite = null
scene.setBackgroundImage(assets.image`Background 2`)
setupCars()
