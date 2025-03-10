function Leapi(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    }
    return false;
  }
  function close(year) {
    let p = year - 1;
    let nextYear = year + 1;
    while (!Leapi(p)) {
      p--;
    }
    while (!Leapi(nextYear)) {
      nextYear++;
    }
    const closest = (year - p) <= (nextYear - year) ? p : nextYear;
    return closest;
  }
  function checkYear(year) {
    if (Leapi(year)) {
      console.log("Yes");
    } else {
      console.log("No");
      console.log("Closest Leap Year: " + closestLeapYear(year));
    }
  }
  const years = [2100, 2104, 2400];
  years.forEach(year => checkYear(year));
  