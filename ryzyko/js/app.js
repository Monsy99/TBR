var tiles = document.querySelectorAll(".content__tile");
tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    window.location = tile.id;
  });
});
