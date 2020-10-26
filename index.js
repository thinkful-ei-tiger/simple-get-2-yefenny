function displayImages(image) {
  let toReturn = '';
  if (image.status === 'success') {
    toReturn = `<a href="${image.message}" target='_blank'> <img src=${image.message} alt='dog image' /> </a> `;
  } else toReturn = `<p>${image.message}</p>`;
  $('.js-image').html(toReturn);
  $('.js-results').removeClass('hidden');
}
function getDogImage(breed) {
  url = `https://dog.ceo/api/breed/${breed}/images/random`;
  fetch(url)
    .then((response) => response.json())
    .then((jsonResponse) => displayImages(jsonResponse))
    .catch((error) => console.log(error));
}

function handleForm() {
  $('form').on('submit', function (event) {
    event.preventDefault();
    getDogImage($('#breed').val());
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  handleForm();
});
