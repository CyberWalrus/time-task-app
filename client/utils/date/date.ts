export const getJDN = (year: number, month: number, day: number): number => {
  const a = Math.floor((13 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 2;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
};
export const stringToJDN = (value: string): number => {
  const dateAll = new Date(value);
  return getJDN(dateAll.getFullYear(), dateAll.getMonth(), dateAll.getDate());
};
/*
interface DateJulianInterface {
  JDN: number;
}
class DateJulian {
  constructor(date: string) {
    const dateAll = new Date(date);
    this.JDN = getJDN(
      dateAll.getFullYear(),
      dateAll.getMonth(),
      dateAll.getDate(),
    );
  }
}

*/
