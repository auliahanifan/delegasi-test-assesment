export function convertNumber(number: number, isCredit: boolean) {
  return isCredit ? numberWithDots(number) : `(${numberWithDots(number)})`;
}

export function numberWithDots(number: number) {
  return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}
