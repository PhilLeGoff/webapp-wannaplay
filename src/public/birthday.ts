export const days: string[] = Array.from({ length: 31 }, (_, index) =>
  (index + 1).toString()
);
export const months = [
  { name: 'Jan', number: 1 },
  { name: 'Feb', number: 2 },
  { name: 'Mar', number: 3 },
  { name: 'Apr', number: 4 },
  { name: 'May', number: 5 },
  { name: 'Jun', number: 6 },
  { name: 'Jul', number: 7 },
  { name: 'Aug', number: 8 },
  { name: 'Sep', number: 9 },
  { name: 'Oct', number: 10 },
  { name: 'Nov', number: 11 },
  { name: 'Dec', number: 12 },
];
const currentYear = new Date().getFullYear();
export const years: string[] = Array.from({ length: 100 }, (_, index) =>
  (currentYear - index).toString()
);
