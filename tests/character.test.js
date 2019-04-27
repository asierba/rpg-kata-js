const { createCharacter } = require('../src/character')

describe('a character should', () => {
    test('be born alive', () => {
        expect(createCharacter().isAlive).toBe(true)
    })

    test('be born with 1000 health', () => {
        expect(createCharacter().health).toBe(1000)
    })

    test('be born with level 1', () => {
        expect(createCharacter().level).toBe(1)
    })

    test('deal damage to another player', () => {
        const character1 = createCharacter()
        const character2 = createCharacter()

        character1.attacks(character2, 50)

        expect(character2.health).toBe(950)
    })
})


