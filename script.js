document.addEventListener("DOMContentLoaded", () => {
    const chessboard = document.getElementById("chessboard");

    const pieces = {
        "1": "♖", "2": "♘", "3": "♗", "4": "♕", "5": "♔", "6": "♗", "7": "♘", "8": "♖",
        "9": "♙", "10": "♙", "11": "♙", "12": "♙", "13": "♙", "14": "♙", "15": "♙", "16": "♙",
        "49": "♟", "50": "♟", "51": "♟", "52": "♟", "53": "♟", "54": "♟", "55": "♟", "56": "♟",
        "57": "♜", "58": "♞", "59": "♝", "60": "♛", "61": "♚", "62": "♝", "63": "♞", "64": "♜"
    };

    const amateurFont = "Verdana, sans-serif";
    const tileSize = "60px";

    for (let row = 8; row >= 1; row--) {
        for (let col = 1; col <= 8; col++) {
            let tile = document.createElement("div");
            tile.classList.add("tile", (row + col) % 2 === 0 ? "dark" : "light");

            tile.style.width = tileSize;
            tile.style.height = tileSize;
            tile.style.backgroundColor = (row + col) % 2 === 0 ? "#b58863" : "#f0d9b5";

            tile.dataset.row = row;
            tile.dataset.col = col;
            let tileIndex = (row - 1) * 8 + col;

            if (pieces[tileIndex]) {
                tile.innerText = pieces[tileIndex];
                tile.style.fontFamily = amateurFont;
                tile.style.fontSize = "40px";
                tile.style.color = "#000";
                tile.style.textAlign = "center";
                tile.style.lineHeight = tileSize;
                tile.style.fontWeight = "bold";
            }

            chessboard.appendChild(tile);
        }
    }

    let selectedTile = null;

    document.querySelectorAll(".tile").forEach(tile => {
        tile.addEventListener("click", () => {
            let piece = tile.innerText;
            if (piece && !selectedTile) {
                selectedTile = tile;
                tile.classList.add("selected");
            } else if (selectedTile) {
                movePiece(selectedTile, tile);
                selectedTile.classList.remove("selected");
                selectedTile = null;
            }
        });
    });

    function movePiece(fromTile, toTile) {
        const piece = fromTile.innerText;
        if (!piece) return;

        const fromRow = fromTile.dataset.row;
        const fromCol = fromTile.dataset.col;
        const toRow = toTile.dataset.row;
        const toCol = toTile.dataset.col;

        if (piece.toLowerCase() === "p") {
            if (Math.abs(toRow - fromRow) === 1 && fromCol === toCol) {
                toTile.innerText = piece;
                fromTile.innerText = "";
                updatePiecePosition(piece, { fromRow, fromCol }, { toRow, toCol });
            }
        }
    }

    async function updatePiecePosition(piece, fromPos, toPos) {
        const id = `${fromPos.fromRow}-${fromPos.fromCol}-${piece}`;
        const newPosition = `${toPos.toRow}-${toPos.toCol}`;

        await fetch(`http://localhost:3000/chessboard/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ position: newPosition })
        });
    }
});