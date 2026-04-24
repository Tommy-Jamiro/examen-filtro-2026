const characterName = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
let health = 80;
let mana = 120;
const attack = 45;
const defense = 30;

function calculateDamage(attack, defense) {
    const damage = attack - defense;

    return damage > 0 ? damage : 0;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};


function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}



console.log("%c--- ESTADO DEL PERSONAJE ---", "color: #e94560; font-weight: bold;");

// Presentación
const presentation = getPresentation(characterName, characterClass, level);
console.log("Presentación:", presentation);

// Verificación de vida
console.log("¿Está viva?:", isAlive(health));

// Cálculo de daño
const enemyDefense = 20;
const finalDamage = calculateDamage(attack, enemyDefense);
console.log(`Daño causado a enemigo con ${enemyDefense} de defensa:`, finalDamage);

// Intento de lanzar hechizo (Bola de Fuego - Costo 30)
const spellCost = 30;
const isStunned = false; // Zara no está aturdida
const possible = canCastSpell(mana, spellCost, isStunned);
console.log(`¿Puede lanzar hechizo de costo ${spellCost}?:`, possible);

// Verificación de números negativos en vida
console.log("Prueba isAlive con salud -5 (debe ser false):", isAlive(-5));