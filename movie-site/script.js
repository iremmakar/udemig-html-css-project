const arrows = document.querySelectorAll(".chevron");

const movieList = document.querySelectorAll(".movies");

console.log(movieList);

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieList[i].querySelectorAll("img").length;

  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
    }
  });
});

/*dark mode */

const ball = document.querySelector(".toggle-ball");

const items = document.querySelectorAll(
  ".main,.header,.icon i,.movie-list h1,.menu .menu-list,.toggle,.toggle-ball"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
