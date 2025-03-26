// This will work but the organization is jank.

// let squelchHealth = 7
// let squelchName = 'Squelch'
// let kruskHealth = 10
let monsterStatsElm = document.getElementById('monster-stats')
let monsterPictureElm = document.getElementById('monster-picture')
let heroStatsElm = document.getElementById('hero-stats')
let heroNameElm = document.getElementById('hero-name')
let heroPictureElm = document.getElementById('hero-picture')

let hero = {
    name: 'Hiro',
    health: 10,
    picture: 'HeroPortrait1.png',
    attackPower: 2,
    gold: 50,
}

let monster = {
    name: 'Squelch',
    health: 5,
    attackPower: 1,
    picture: 'Goblin.png',
    resist: 'bow',
    weak: 'sword'
}

let listOfMonsters = [
    {
        name: 'Krusk',
        health: 8,
        attackPower: 2,
        picture: 'Orc.png',
        resist: 'sword',
        weak: 'magic'
    },
    {
        name: 'Mallow',
        health: 6,
        attackPower: 3,
        picture: 'Slime.png',
        resist: 'magic',
        weak: 'bow'
    },
    {
        name: 'Skittles',
        health: 7,
        attackPower: 4,
        picture: 'Skeleton.png',
        resist: 'sword',
        weak: 'bow'
    }
]

// Instead of saying let = each attribute, I can say let 1 time, and set the properties for the monster.

// function squishMonster() {
//     monster.health -= hero.attackPower
//     console.log(monster.health);

//     if (monster.health <= 0) {
//         console.log(`${monster.name} is squashed`);
//         switchMonster()
//     } else {
//         hero.health -= monster.attackPower
//     }

//     drawHero()
//     drawMonster()
// }

function betterAttackMonster(attackType) {
    if (monster.resist == attackType) {
        monster.health -= hero.attackPower / 2
    } else if (monster.weak == attackType) {
        monster.health -= hero.attackPower * 2
    } else {
        monster.health -= hero.attackPower
    }

    if (monster.health <= 0) {
        console.log(`${monster.name} is squashed`);
        switchMonster()
    } else {
        attackHero()
    }


    drawHero()
    drawMonster()
}

function attackHero() {
    hero.health -= monster.attackPower
    if (hero.health <= 0) {
        document.body.innerHTML = `<h1 class='game-over'>GAME OVER</h1>`
    } else if (hero.health < 5) {
        heroPictureElm.classList.add('dying')
    }
}

function drawMonster() {
    monsterStatsElm.innerText = `${monster.name} | ${monster.health}❤️‍🩹`
    monsterPictureElm.setAttribute('src', `assets/Monsters/${monster.picture}`)
}

function switchMonster() {
    let nextMonster = listOfMonsters.shift()
    if (!nextMonster) {
        window.alert('You win, the dungeon is empty! You have devastated an entire ecosystem!')
    }
    monster = nextMonster
}

function drawHero() {
    heroStatsElm.innerHTML = `<span>${hero.health} 💖</span> <span>${hero.attackPower}🥾</span><span>${hero.gold}🪙</span>`
    heroNameElm.innerText = `${hero.name}`
}

function healHero() {
    if (hero.gold >= 10) {
        hero.health += 5
        hero.gold -= 10
        heroPictureElm.classList.remove('dying')
    } else { window.alert('You are broke') }
    drawHero()
}

function biggerBoots() {
    if (hero.gold >= 25) {
        hero.attackPower += 1
        hero.gold -= 25
    } else {
        window.alert('Shoes aint free ya bum!')
    }
}

drawHero()
drawMonster()