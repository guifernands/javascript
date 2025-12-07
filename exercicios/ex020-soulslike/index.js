function Warrior(name, health, damage, stamina) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.stamina = stamina;
}

Warrior.prototype.atack = function(enemy) {
    
    if (this.health <= 0) {
        console.log(`${this.name} is DEAD and cannot atack!`)
        return;
    }
    if (this.stamina <= 14) {
        console.log(`${this.name} is without stamina!`)
        return;
    }
    this.stamina -= 15;
    console.log(`${enemy.name} received ${this.damage} damage by ${this.name}`);
    enemy.receiveDamage(this.damage);
};

Warrior.prototype.receiveDamage = function(damageAmount) { 
    this.health -= damageAmount;
    if (this.health <= 0) {
        console.log(`${this.name} DIED!`);
        return;
    }
};

const tarnished = new Warrior('Tarnished', 100, 30, 65);
const midir = new Warrior('Darkeater Midir', 200, 60, 100);

tarnished.atack(midir);
tarnished.atack(midir);
tarnished.atack(midir);
tarnished.atack(midir);
tarnished.atack(midir);
midir.atack(tarnished);
midir.atack(tarnished);
tarnished.atack(midir);
