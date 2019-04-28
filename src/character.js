const MAX_HEALTH = 1000
const MIN_HEALTH = 0

const createCharacter = () => {

    let health = MAX_HEALTH
    const isAlive = () => health > 0

    return {
        isAlive,
        getHealth: () => health,
        setHealth: value => {
            health = value
        },
        level: 1,
        damages (target, damage) {
            if (this === target) {
                return
            }

            target.setHealth(Math.max(MIN_HEALTH, target.getHealth() - damage))
        },
        heals: (target, amountToHeal) => {
            if (target.isAlive())
            {
                target.setHealth(Math.min(MAX_HEALTH, target.getHealth() + amountToHeal))
            }
        }
    }
}

module.exports = { createCharacter }