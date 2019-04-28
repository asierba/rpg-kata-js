const MAX_HEALTH = 1000
const MIN_HEALTH = 0

const createCharacter = (level = 1) => {

    let health = MAX_HEALTH
    const isAlive = () => health > 0

    const setHealth = value => {
        health = value
    }

    const adjustDamage = (attacker, defender, damage) => {
        if (defender.overpowers(attacker)) {
            return damage * 0.5
        }
        if (attacker.overpowers(defender)) {
            return damage * 1.5
        }
        return damage
    }

    const getHealth = () => health;
    return {
        isAlive,
        getHealth,
        setHealth,
        level,
        overpowers (other) {
            return this.level - other.level >= 5
        },
        damages (other, damage) {
            if (this === other) {
                return
            }
            const newHealth = other.getHealth() - adjustDamage(this, other, damage);
            other.setHealth(Math.max(MIN_HEALTH, newHealth))
        },
        heals: (amountToHeal) => {
            if (isAlive()) {
                setHealth(Math.min(MAX_HEALTH, getHealth() + amountToHeal))
            }
        }
    }
}

module.exports = { createCharacter }