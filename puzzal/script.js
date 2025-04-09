const tiles = document.querySelectorAll('.tile');
const empty = document.getElementById('empty');

tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        const emptyRect = empty.getBoundingClientRect();
        const tileRect = tile.getBoundingClientRect();

        if (
            Math.abs(emptyRect.x - tileRect.x) <= 105 &&
            Math.abs(emptyRect.y - tileRect.y) <= 105
        ) {
            // Swap positions
            const tempX = tile.style.transform;
            tile.style.transform = empty.style.transform;
            empty.style.transform = tempX;

            // Swap positions in DOM
            empty.parentNode.insertBefore(tile, empty);
        }
    });
});
