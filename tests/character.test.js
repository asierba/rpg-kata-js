const { createCharacter } = require('../src/character')

const MAX_HEALTH = 1000

describe('a character', () => {
    describe('when born', () => {
        test('is alive', () => {
            expect(createCharacter().isAlive()).toBe(true)
        })

        test('has 1000 health', () => {
            expect(createCharacter().getHealth()).toBe(MAX_HEALTH)
        })

        test('is level 1', () => {
            expect(createCharacter().level).toBe(1)
        })

        test('is melee class', () => {
            expect(createCharacter().getClass()).toBe('melee')
        })
    })

    describe('when damaging another character', () => {
        let aragorn
        let gimli
        let gandalf
        let legolas

        beforeEach(() => {
            aragorn = createCharacter()
            gimli = createCharacter()
            gandalf = createCharacter(6)
            legolas = createCharacter(1, 'ranger')
        })

        test('health is subtracted from the other character', () => {
            aragorn.damages(gimli, 50, 2)

            expect(gimli.getHealth()).toBe(950)
            expect(gimli.isAlive()).toBe(true)
        })

        test('with more damage than their health they die', () => {
            aragorn.damages(gimli, 1001, 2)

            expect(gimli.isAlive()).toBe(false)
            expect(gimli.getHealth()).toBe(0)
        })

        test('and the damaged character is healed', () => {
            aragorn.damages(gimli, 100, 2)
            gimli.heals(50, gimli)

            expect(gimli.getHealth()).toBe(950)
        })

        test('and a dead character cannot be healed', () => {
            aragorn.damages(gimli, 1001, 2)
            expect(gimli.isAlive()).toBe(false)
            gimli.heals(1001, gimli)

            expect(gimli.isAlive()).toBe(false)
        })

        test('health cannot be raised above 1000', () => {
            gimli.heals(100, gimli)

            expect(gimli.getHealth()).toBe(MAX_HEALTH)
        })

        describe('when other character level is above 5', () => {
            test('50% health is subtracted from the other character', () => {
                gimli.damages(gandalf, 100, 2)

                expect(gandalf.getHealth()).toBe(950)
            })
        })

        describe('when other character level is less than 5', () => {
            test('damage is increased by 50% ', () => {
                gandalf.damages(gimli, 100, 2)

                expect(gimli.getHealth()).toBe(850)
            })
        })

        describe('when other character out of melee range', () => {
            test('no damage is done', () => {
                gandalf.damages(gimli, 100, 3)

                expect(gimli.getHealth()).toBe(MAX_HEALTH)
            })

            test('a ranger deals damage', () => {
                legolas.damages(gimli, 100, 3)

                expect(gimli.getHealth()).toBe(900)
            })
        })

        describe('when other character out of ranger range', () => {
            test('no damage is done', () => {
                legolas.damages(gimli, 100, 21)

                expect(gimli.getHealth()).toBe(MAX_HEALTH)
            })
        })
    })


    describe('when damaging itself', () => {
        test('nothing happens', () => {
            const aCharacter =  createCharacter()

            aCharacter.damages(aCharacter, 500)

            expect(aCharacter.getHealth()).toBe(MAX_HEALTH)
        })
    })
})


