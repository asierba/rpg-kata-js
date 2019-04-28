const { createCharacter } = require('../src/character')

describe('a character', () => {
    describe('when born', () => {
        test('is alive', () => {
            expect(createCharacter().isAlive()).toBe(true)
        })

        test('has 1000 health', () => {
            expect(createCharacter().getHealth()).toBe(1000)
        })

        test('is level 1', () => {
            expect(createCharacter().level).toBe(1)
        })
    })

    describe('when damaging another character', () => {
        let aragorn
        let gimli

        beforeEach(() => {
            aragorn = createCharacter()
            gimli = createCharacter()
        })

        test('health is subtracted from the other character', () => {
            aragorn.damages(gimli, 50)

            expect(gimli.getHealth()).toBe(950)
            expect(gimli.isAlive()).toBe(true)
        })

        test('with more damage than their health they die', () => {
            aragorn.damages(gimli, 1001)

            expect(gimli.isAlive()).toBe(false)
            expect(gimli.getHealth()).toBe(0)
        })

        test('and the damaged character is healed', () => {
            aragorn.damages(gimli, 100)
            aragorn.heals(gimli, 50)

            expect(gimli.getHealth()).toBe(950)
        })

        test('and a dead character cannot be healed', () => {
            aragorn.damages(gimli, 1001)
            aragorn.heals(gimli, 1001)

            expect(gimli.isAlive()).toBe(false)
        })

        test('health cannot be raised above 1000', () => {
            aragorn.heals(gimli, 100)

            expect(gimli.getHealth()).toBe(1000)
        })
    })


})


