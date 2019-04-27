const { createCharacter } = require('../src/character')

test('a character is born alive', () => {
    const newCharacter = createCharacter()
    expect(newCharacter.isAlive).toBe(true)
})
