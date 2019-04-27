const createCharacter = () => {
    return {
        isAlive: true,
        health: 1000,
        level: 1,
        damages: (target, damage) => {
            target.health -= damage
        }
    }
}

module.exports = { createCharacter }