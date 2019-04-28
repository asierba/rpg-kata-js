const MAX_HEALTH = 1000
const MIN_HEALTH = 0

const createCharacter = (level = 1) => {

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
        level,
        overpowers (target) {
            return this.level - target.level >= 5
        },
        damages (target, damage) {
            if (this === target) {
                return
            }

            if (target.overpowers(this)) {
                damage = damage / 2
            }
            if (this.overpowers(target)) {
                damage = damage * 1.5
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