const tile = (t, pos = { x: 50, y: 50 }, depth) => {
    const newTile = document.createElement("div");
    switch (t) {
        case "P":
            newTile.setAttribute("id", !document.querySelector("#player") ? "player" : "trash");
            newTile.classList.add("idle");
            break;
        case "0": newTile.classList.add("tile", "void", depth); break;
        case "1": newTile.classList.add("tile", "ground", depth); break;
        case "2": newTile.classList.add("tile", "item", depth); break;
        case "y": newTile.classList.add("tile", "ground-corner-right", depth); break;
        case "p": newTile.classList.add("tile", "ground-corner-left", depth); break;
        case "?": newTile.classList.add("tile", "platform-ground-right", depth); break;
        case "'": newTile.classList.add("tile", "platform-ground-left", depth); break;
        case "-": newTile.classList.add("tile", "platform-ground", depth); break;
        case "=": newTile.classList.add("tile", "platform-ground-between", depth); break;
        case "m": newTile.classList.add("tile", "bush-small", depth); break;
        case "w": newTile.classList.add("tile", "bush-small-creature", depth); break;
        case "T": newTile.classList.add("tile", "ground-pilar-top", depth); break;
        case "i": newTile.classList.add("tile", "ground-pilar-body", depth); break;
        case "v": newTile.classList.add("tile", "ground-pilar-node", depth); break;
        default: break;
    };
    newTile.style.left = pos.x * game.tileWidth + "px";
    newTile.style.top = pos.y * game.tileHeight + "px";
    return newTile;
};