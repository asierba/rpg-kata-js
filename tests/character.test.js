const { createCharacter } = require('../src/character')

describe('a character', () => {
    describe('when born', () => {
        test('is alive', () => {
            expect(createCharacter().isAlive).toBe(true)
        })

        test('has 1000 health', () => {
            expect(createCharacter().health).toBe(1000)
        })

        test('is level 1', () => {
            expect(createCharacter().level).toBe(1)
        })
    })

    describe('when damaging another character', () => {
        test('health is subtracted from the other character', () => {
            const aragorn = createCharacter()
            const gimli = createCharacter()

            aragorn.damages(gimli, 50)

            expect(gimli.health).toBe(950)
            expect(gimli.isAlive).toBe(true)
        })

        test('with more damage than their health they die', () => {
            const aragorn = createCharacter()
            const gimli = createCharacter()

            aragorn.damages(gimli, 1001)

            expect(gimli.isAlive).toBe(false)
        })
    })


})


