const myObj = {
    name: String,
    hp: Number,
    img: String
}

function createPlayer(player,fighter,hp) {
    return [player,fighter,hp]
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);