function week() {
  let today = new Date();
  let weekArray = [];

  if (today.getDay() === 0) {
    for (let i = 6; i > 0; i--) {
      let nextDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - i
      );
      weekArray.push(nextDay);
    }
    weekArray.push(today);
    return weekArray;
  }

  if (today.getDay() === 1) {
    weekArray.push(today);
    for (let i = 1; i < 7; i++) {
      let nextDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + i
      );
      weekArray.push(nextDay);
    }
    return weekArray;
  }

  let before = today.getDay() - 1;
  let after = 7 - today.getDay();

  for (let i = before; i >= 1; i--) {
    let nextDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - i
    );
    weekArray.push(nextDay);
  }
  weekArray.push(today);

  for (let i = 1; i <= after; i++) {
    let nextDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + i
    );
    weekArray.push(nextDay);
  }

  return weekArray;
}

export default week;
