//Código para inserir estrelas na seção de habilidades
const mediumRatingElements = document.getElementsByClassName("rating-medium");
const initialRatingElements = document.getElementsByClassName("rating-initial");
const highRatingElements = document.getElementsByClassName("rating-high");

addStarRating(highRatingElements, 3);
addStarRating(mediumRatingElements, 2);
addStarRating(initialRatingElements, 1);

function addStarRating(elements, rating) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = '<i class="fas fa-star"></i>'.repeat(rating);
  }
}
