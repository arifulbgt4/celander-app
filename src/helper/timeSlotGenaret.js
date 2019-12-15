export default (months, devide) => {
  const times = months.clone();
  let timeSlot = [];
  const devideTime = (1 / 60) * devide;
  let startOfDay = times.startOf("day");
  for (let i = 0; i < 24 / devideTime; i++) {
    timeSlot.push(startOfDay.format("hh:mm A"));
    startOfDay.add(devideTime, "hour");
  }
  return timeSlot;
};
