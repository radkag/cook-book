export const regexValidator = fieldValue =>
  fieldValue.match(/^[a-zA-Z0-9,.\-/:()\n ]*$/);
