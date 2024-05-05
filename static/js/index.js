/* FUNCIONES PARA VALIDAR EL ENVÍO DEL FORMULARIO */

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Si todos los campos son válidos, continúa con el envío del formulario
    if (isValidForm()) {
      //const form = document.getElementById('contactForm');
      //form.submit();

      cleanForm();
    }
});

function isValidForm() {
  return (
    validateEmail() &&
    validateImageInput() &&
    validateSelect() &&
    validateRadioButtons() &&
    validateCheckbox()
  );
}

/* FUNCIONES PARA VALIDAR LOS EVENTOS BLUR/CHANGE */

const emailInput = document.getElementById("correo");
emailInput.addEventListener("blur", function () {
  validateEmail();
});

const imageInput = document.getElementById("obraArte");
imageInput.addEventListener("change", function () {
  validateImageInput();
});

const selectInput = document.getElementById("tipoObra");
selectInput.addEventListener("blur", function () {
  validateSelect();
});

const radiosInput = document.getElementsByName("estiloTecnica");
radiosInput.forEach((radio) => {
  radio.addEventListener("change", function () {
    validateRadioButtons();
  });
});

const checkInput = document.getElementById("aceptoReglamento");
checkInput.addEventListener("change", function () {
  validateCheckbox();
});

/* FUNCIONES DE VALIDACIÓN Y LIMPIEZA DEL FORMULARIO */

/**
 * Valida el campo de entrada de correo electrónico y muestra el mensaje de error si es necesario.
 * @returns {boolean} Devuelve true si el correo electrónico es válido, de lo contrario, devuelve false.
 */
function validateEmail() {
  const emailInput = document.getElementById("correo");
  const invalidFeedbackEmail = document.getElementById("invalid-feedback-email");

  if (!isEmailValid(emailInput)) {
    invalidFeedbackEmail.textContent = "Por favor ingrese un correo electrónico válido";
    return false;
  } else {
    invalidFeedbackEmail.textContent = "";
    return true;
  }
}

/**
 * Valida el campo de entrada de imagen y muestra el mensaje de error si es necesario.
 * @returns {boolean} Devuelve true si la imagen es válida, de lo contrario, devuelve false.
 */
function validateImageInput() {
  const imageInput = document.getElementById("obraArte");
  const invalidFeedbackFile = document.getElementById("invalid-feedback-file");

  if (!isFileImage(imageInput)) {
    invalidFeedbackFile.textContent = "Por favor ingrese una imagen válida";
    return false;
  } else {
    invalidFeedbackFile.textContent = "";
    return true;
  }
}

/**
 * Valida el campo de selección y muestra el mensaje de error si es necesario.
 * @returns {boolean} Devuelve true si se ha seleccionado un tipo de obra válido, de lo contrario, devuelve false.
 */
function validateSelect() {
  const selectInput = document.getElementById("tipoObra");
  const invalidFeedbackSelect = document.getElementById("invalid-feedback-select");

  if (!isSelectValid(selectInput)) {
    invalidFeedbackSelect.textContent = "Por favor seleccione un tipo de obra válida";
    return false;
  } else {
    invalidFeedbackSelect.textContent = "";
    return true;
  }
}

/**
 * Valida los botones de radio y muestra el mensaje de error si es necesario.
 * @returns {boolean} Devuelve true si se ha seleccionado un estilo/técnica válido, de lo contrario, devuelve false.
 */
function validateRadioButtons() {
  const radiosInput = document.getElementsByName("estiloTecnica");
  const invalidFeedbackRadio = document.getElementById("invalid-feedback-radio");

  if (!isRadioButtonValid(radiosInput)) {
    invalidFeedbackRadio.textContent ="Por favor selecciona un estilo/técnica válido/a";
    return false;
  } else {
    invalidFeedbackRadio.textContent = "";
    return true;
  }
}

/**
 * Valida la casilla de verificación y muestra el mensaje de error si es necesario.
 * @returns {boolean} Devuelve true si la casilla de verificación está marcada, de lo contrario, devuelve false.
 */
function validateCheckbox() {
  const checkInput = document.getElementById("aceptoReglamento");
  const invalidFeedbackCheck = document.getElementById("invalid-feedback-check");

  if (!isCheckboxValid(checkInput)) {
    invalidFeedbackCheck.textContent = "Por favor debe aceptar el reglamento";
    return false;
  } else {
    invalidFeedbackCheck.textContent = "";
    return true;
  }
}

/**
 * Limpia los campos del formulario.
 */
function cleanForm() {
  const emailInput = document.getElementById("correo");
  const imageInput = document.getElementById("obraArte");
  const selectInput = document.getElementById("tipoObra");
  const radiosInput = document.getElementsByName("estiloTecnica");
  const checkInput = document.getElementById("aceptoReglamento");

  emailInput.value = "";
  imageInput.value = "";
  selectInput.value = "";
  radiosInput.forEach((radio) => (radio.checked = false));
  checkInput.checked = false;
}

/* FUNCIONES DE UTILIDAD PARA VALIDAR LOS CAMPOS DE ENTRADA */

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
  const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/bmp"];
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

  return select !== "";
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
  return input.checked;
}
