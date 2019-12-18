const NEWLINE = 10;

const isDoor = (c) => c > 64 && c < 91;
const isKey = (c) => c > 96 && c < 123;
const isOpen = (c) => c == 46;
const isPlayer = (c) => c == 64;
const isWall = (c) => c == 35;

function parseMaze(data) {
    let tiles = [];

    let x = 0, y = 0;
    for(let i = 0; i < data.length; i++) {
        let code = data.charCodeAt(i);

        if (code == NEWLINE) {
            x = 0;
            y++;
        } else {
            tiles.push([x, y, data.charAt(i)]);
            x++;
        }
    }

    return tiles;
}

function navigateMaze(tiles) {

}

module.exports = {
    parseMaze
}