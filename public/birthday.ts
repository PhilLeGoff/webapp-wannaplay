export const days: string[] = Array.from({ length: 31 }, (_, index) =>
  (index + 1).toString()
);
export const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const currentYear = new Date().getFullYear();
export const years: string[] = Array.from({ length: 100 }, (_, index) =>
  (currentYear - index).toString()
);
