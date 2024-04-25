document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validación del campo de correo electrónico
  const emailInput = document.getElementById('correo');
  const invalidFeedbackEmail = document.getElementById('invalid-feedback-email');
  if (!isEmailValid(emailInput)) {
    invalidFeedbackEmail.textContent = 'Por favor ingrese un correo electrónico válido';
  } else {
    invalidFeedbackEmail.textContent = '';
  }

  // Validación de obra de arte (imagen)
  const imageInput = document.getElementById('obraArte');
  const invalidFeedbackFile = document.getElementById('invalid-feedback-file');
  if (!isFileImage(imageInput)) {
    invalidFeedbackFile.textContent = 'Por favor ingrese una imagen válida';
  } else {
    invalidFeedbackFile.textContent = '';
  }

  // Validación del tipo de obra (select)
  const selectInput = document.getElementById('tipoObra');
  const invalidFeedbackSelect = document.getElementById('invalid-feedback-select');
  if (!isSelectValid(selectInput)) {
    invalidFeedbackSelect.textContent = 'Por favor seleccione un tipo de obra válida';
  } else {
    invalidFeedbackSelect.textContent = '';
  }

  // Validación de estilo/técnica (radiobutton)
  const radiosInput = document.getElementsByName('estiloTecnica');
  const invalidFeedbackRadio = document.getElementById('invalid-feedback-radio');
  if (!isRadioButtonValid(radiosInput)) {
    invalidFeedbackRadio.textContent = 'Por favor selecciona un estilo/técnica válido/a';
  } else {
    invalidFeedbackRadio.textContent = '';
  }

  // Validación de aceptar el reglamento (checkbox)
  const checkInput = document.getElementById('aceptoReglamento');
  const invalidFeedbackCheck = document.getElementById('invalid-feedback-check');
  if (!isCheckboxValid(checkInput)) {
    invalidFeedbackCheck.textContent = 'Por favor debe aceptar el reglamento';
  } else {
    invalidFeedbackCheck.textContent = '';
  }

  // Si todos los campos son válidos, continúa con el envío del formulario
  /* const form = document.getElementById('contactForm');
    form.submit(); */

  // Limpia todos los campos de entrada después del envío exitoso
  cleanForm(emailInput, imageInput, selectInput, radiosInput, checkInput);
});


/**
 * Verifica si el valor de un campo de entrada de correo electrónico es válido.
 * @param {HTMLInputElement} input - El campo de entrada de correo electrónico.
 * @returns {boolean} - Devuelve true si el valor es un correo electrónico válido, de lo contrario, devuelve false.
 */
function isEmailValid(input) {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = input.value.trim();

  return EMAIL_REGEX.test(email);
}

/**
 * Verifica si el archivo seleccionado en un campo de entrada de tipo archivo es una imagen válida.
 * @param {HTMLInputElement} input - El campo de entrada de tipo archivo.
 * @returns {boolean} - Devuelve true si el archivo seleccionado es una imagen válida, de lo contrario, devuelve false.
 */
function isFileImage(input) {
  const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/bmp'];
  const image = input.files[0];

  return image && IMAGE_TYPES.includes(image.type);
}

/**
 * Verifica si se ha seleccionado una opción en un campo de selección.
 * @param {HTMLSelectElement} input - El campo de selección.
 * @returns {boolean} - Devuelve true si se ha seleccionado una opción válida, de lo contrario, devuelve false.
 */
function isSelectValid(input) {
  const select = input.value;

  return select !== '';
}

/**
 * Verifica si al menos un botón de radio de un conjunto está seleccionado.
 * @param {NodeList} inputs - Los botones de radio del conjunto.
 * @returns {boolean} - Devuelve true si al menos un botón de radio está seleccionado, de lo contrario, devuelve false.
 */
function isRadioButtonValid(inputs) {
  for (const input of inputs) {
    if (input.checked) {
      return true;
    }
  }

  return false;
}

/**
 * Verifica si una casilla de verificación está marcada.
 * @param {HTMLInputElement} input - La casilla de verificación.
 * @returns {boolean} - Devuelve true si la casilla de verificación está marcada, de lo contrario, devuelve false.
 */
function isCheckboxValid(input) {
  return input.checked ? true : false;
}

/**
 * Limpia los campos del formulario.
 * @param {HTMLInputElement} emailInput - El campo de entrada de correo electrónico.
 * @param {HTMLInputElement} imageInput - El campo de entrada de tipo archivo.
 * @param {HTMLSelectElement} selectInput - El campo de selección.
 * @param {NodeList} radiosInput - Los botones de radio del conjunto.
 * @param {HTMLInputElement} checkInput - La casilla de verificación.
 */
function cleanForm(emailInput, imageInput, selectInput, radiosInput, checkInput) {
  emailInput.value = '';
  imageInput.value = '';
  selectInput.value = '';
  radiosInput.forEach(radio => radio.checked = false);
  checkInput.checked = false;
}