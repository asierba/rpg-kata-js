const MAX_HEALTH = 1000
const MIN_HEALTH = 0

const createCharacter = () => {

    let health = MAX_HEALTH
    const isAlive = () => health > 0

    const setHealth = value => {
        health = value
    }

    const getHealth = () => health;
    return {
        isAlive,
        getHealth,
        setHealth,
        level: 1,
        damages (target, damage) {
            if (this === target) {
                return
            }

            target.setHealth(Math.max(MIN_HEALTH, target.getHealth() - damage))
        },
        heals: (amountToHeal) => {
            if (isAlive()) {
                setHealth(Math.min(MAX_HEALTH, getHealth() + amountToHeal))
            }
        }
    }
}

module.exports = { createCharacter }