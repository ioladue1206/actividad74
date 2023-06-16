maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
