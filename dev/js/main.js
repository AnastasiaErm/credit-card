require('modules');
let form = $('.card__form'),
    code = form.find('.card-back__code'),
    person = form.find('.card-content__person'),
    numbers = form.find('.card-content__number');

form.on('submit', function () {
  event.preventDefault();
  search();
  validate();
});


function validate() {
  var search = form.find('.error');

  if (!search.length) {
    return true;
  } else {
    return false;
  }
}

function search() {
  (!/^([A-Za-z]+){4,}$/.test(person.val())) ? person.addClass('error'): person.removeClass('error');
  (!/^(\d{3})$/.test(code.val())) ? code.addClass('error'): code.removeClass('error');

  Array.from(numbers).forEach((element) => {
    (!/^(\d{4})$/.test(element.value)) ? element.classList.add('error'): element.classList.remove('error');
  });

}