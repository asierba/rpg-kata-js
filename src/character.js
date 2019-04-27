const createCharacter = () => {
    return {
        isAlive: true,
        health: 1000,
        level: 1,
        attacks: (target, damage) => {
            target.health -= damage
        }
    }
}

module.exports = { createCharacter }