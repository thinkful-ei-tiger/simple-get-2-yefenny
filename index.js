function displayImages(images) {
  let toDisplay = '';
  images.forEach((image) => {
    toDisplay += `<a href="${image}" target='_blank'> <img src=${image} alt='dog image' /> </a> `;
  });

  $('.js-images').html(toDisplay);
  $('.js-results').removeClass('hidden');
}
function getDogImage(number) {
  url = `https://dog.ceo/api/breeds/image/random/${number}`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => displayImages(jsonResponse.message));
}

function handleForm() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    getDogImage($('#amountOfImage').val());
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  handleForm();
});
