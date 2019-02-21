require('modules');
let form = $('.card__form'),
    code = form.find('.input-field__input--code'),
    person = form.find('.input-field__input--person'),
    numbers = form.find('.input-field__number');

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