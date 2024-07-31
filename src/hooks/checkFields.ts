export function checkFields(fields: string[]) {
  let valid = true;
  fields.map((e) => (e.length === 0 ? (valid = false) : null));
  return valid;
}
