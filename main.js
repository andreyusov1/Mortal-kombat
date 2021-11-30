const player1 = {
    name: "Subzero",
    hp: 100,
    player: 1,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["Боевые веера", "Кукри"],
    attack: function() {
        console.log("name " + "fight...");
    },
};

const player2 = {
    name: "Kitana",
    hp: 100,
    player: 2,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["Ледяной меч", "Ледяной кинжал"],
    attack: function() {
        console.log("name " + "fight...");
    },
};

const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");
const $chat = document.querySelector('.chat');

function createPlayer(player, obj, name) {
    let $player = document.createElement("div");
    $player.classList.add(player);

    let $progressbar = document.createElement("div");
    $progressbar.classList.add("progressbar");

    let $character = document.createElement("div");
    $character.classList.add("character");

    let $life = document.createElement("div");
    $life.classList.add("life");
    $life.style.width = obj.hp + "%";

    let $name = document.createElement("div");
    $name.classList.add("name");
    $name.innerText = obj.name;

    let $img = document.createElement("img");
    $img.src = obj.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    return $player;
}

$winnerTitle = document.createElement("div");
$winnerTitle.classList.add('winnerTitle');
$chat.appendChild($winnerTitle);

function changeHP(player) {
    const $playerLife = document.querySelector(
        ".player" + player.player + " .life"
    );
    player.hp -= Math.ceil(Math.random() * 20);
    let resultHP = player.hp;
    $playerLife.style.width = player.hp + "%";
    console.log($playerLife);

    if (resultHP <= 0) {
        $playerLife.style.width = 0 + '%';
        $randomButton.disabled = true;
        $randomButton.style.display = 'none';
        if (player1.hp <= 0) {
            $winnerTitle.innerText = player2.name + " Win";
        } else {
            $winnerTitle.innerText = player1.name + " Win";
        }
    }

}

$arenas.appendChild(createPlayer("player1", player1));
$arenas.appendChild(createPlayer("player2", player2));

$randomButton.addEventListener("click", function() {
    changeHP(player1);
    changeHP(player2);
});