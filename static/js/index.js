document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validación del campo de correo electrónico
  const emailInput = document.getElementById('correo');
  if (!isEmailValid(emailInput)) {
    alert('EMAIL INCORRECTO');
  }

  // Validación de obrea de arte (imagen)
  const imageInput = document.getElementById('obraArte');
  if (!isFileImage(imageInput)) {
    alert('OBRA DE ARTE INCORRECTA');
  }

  // Validación del tipo de obra (select)
  const selectInput = document.getElementById('tipoObra');
  if (!isSelectValid(selectInput)) {
    alert('TIPO DE OBRA INCORRECTA');
  }

  // Validación de estilo/técnica (radiobutton)
  const radiosInput = document.getElementsByName('estiloTecnica');
  if (!isRadioButtonValid(radiosInput)) {
    alert('ESTILO/TÉCNICA INCORRECTO');
  }

  // Validación de aceptar el reglamento (checkbox)
  const checkInput = document.getElementById('aceptoReglamento');
  if (!isCheckboxValid(checkInput)) {
    alert('DEBE ACEPTAR EL REGLAMENTO');
  }
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