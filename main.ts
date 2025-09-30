/**
 * Controle de motores para placa driver micro:bit
 */
//% weight=100 color=#00A654 icon="\uf1b9"
namespace MotorDriver {
    
    // Motores: M1 (P8, P12), M2 (P0, P16)
    
    //% block="Motor M1 velocidade %speed"
    //% speed.min=-100 speed.max=100
    export function motorM1Run(speed: number): void {
        if (speed > 0) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.analogWritePin(AnalogPin.P12, pins.map(speed, 0, 100, 0, 1023))
        } else if (speed < 0) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.analogWritePin(AnalogPin.P12, pins.map(-speed, 0, 100, 0, 1023))
        } else {
            pins.analogWritePin(AnalogPin.P12, 0)
        }
    }

    //% block="Motor M2 velocidade %speed"
    //% speed.min=-100 speed.max=100
    export function motorM2Run(speed: number): void {
        if (speed > 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            pins.analogWritePin(AnalogPin.P16, pins.map(speed, 0, 100, 0, 1023))
        } else if (speed < 0) {
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.analogWritePin(AnalogPin.P16, pins.map(-speed, 0, 100, 0, 1023))
        } else {
            pins.analogWritePin(AnalogPin.P16, 0)
        }
    }
}

