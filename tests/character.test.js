const { createCharacter } = require('../src/character')

test('a character is born alive', () => {
    expect(createCharacter().isAlive).toBe(true)
})

test('a character is born with 1000 health', () => {
    expect(createCharacter().health).toBe(1000)
})

