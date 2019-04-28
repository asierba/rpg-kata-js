const createCharacter = () => {
    let health = 1000
    const isAlive = () => health > 0

    return {
        isAlive,
        getHealth: () => health,
        setHealth: value => {
            if (isAlive()) {
                health = value < 0 ? 0 : value;
            }
        },
        level: 1,
        damages: (target, damage) => {
            target.setHealth(target.getHealth() - damage)
        },
        heals: (target, amountToHeal) => {
            target.setHealth(target.getHealth() + amountToHeal)
        }
    }
}

module.exports = { createCharacter }