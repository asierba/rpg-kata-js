const createCharacter = () => {
    let health = 1000

    return {
        isAlive: () => health > 0,
        getHealth: () => health,
        setHealth: value => {
            health = value < 0 ? 0 : value;
        },
        level: 1,
        damages: (target, damage) => {
            target.setHealth(target.getHealth() - damage)
        }
    }
}

module.exports = { createCharacter }