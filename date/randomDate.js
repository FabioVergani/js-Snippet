const randomDate = (rangeOfDays, startHour, hourRange) => {
  const { max, random: r } = Math,
    t = new Date(Date.now());
  return new Date(
    t.getFullYear(),
    t.getMonth(),
    t.getDate() + (rangeOfDays > 1 ? rangeOfDays * r() : 0),
    hourRange ? startHour + r() * hourRange : t.getHours(),
    t.getMinutes() * r()
  );
};


//console.log(randomDate());
