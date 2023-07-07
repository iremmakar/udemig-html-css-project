const arrows = document.querySelectorAll(".chevron");

const movieList = document.querySelectorAll(".movies");

arrows.forEach((arrow, i) => {
  const movieLength = movieList[i].querySelectorAll("img").length;
  let x = 0;
  let y = 0;
  let counter = 0;

  arrow.addEventListener("click", () => {
    if (counter <= 2) {
      movieList[i].children[x].style.display = "none";
      counter++;
      x++;
    } else {
      for (y = 0; y < counter; y++) {
        movieList[i].children[y].style.display = "block";
      }
    }
  });
});

const mode = document.querySelector(".mode");

const items = document.querySelectorAll(
  ".main,.header,.icon i,.movie-list h1,.menu .menu-list,.dark"
);

mode.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
