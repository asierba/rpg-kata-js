const MAX_HEALTH = 1000
const MIN_HEALTH = 0

const createCharacter = (level = 1, className = 'melee') => {
    let health = MAX_HEALTH
    const isAlive = () => health > 0

    const setHealth = value => {
        health = value
    }

    const adjustDamage = (attacker, defender, damage, distance) => {
        if (attacker.getClass() === 'melee' && distance > 2) {
            return 0
        }
        if (attacker.getClass() === 'ranger' && distance > 20) {
            return 0
        }
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
        getClass: () => className,
        level,
        overpowers (other) {
            return this.level - other.level >= 5
        },
        damages (other, damage, distance) {
            if (this === other) {
                return
            }
            const newHealth = other.getHealth() - adjustDamage(this, other, damage, distance);
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