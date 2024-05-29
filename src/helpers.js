export function formatTime(dt, tz) {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    timeZone: 'UTC',
  });
  return dtFormat.format(new Date((dt + tz) * 1000));
}

export function formatDate(dt, tz) {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'short',
    timeZone: 'UTC',
  });
  return dtFormat.format(new Date((dt + tz) * 1000));
}

export const inKilometers = (meters) => {
  return meters / 1000;
};
export const inKilometersPerHour = (metersPerSecond) => {
  return metersPerSecond * 3.6;
};

export function getWindDirection(degree) {
  const directions = [
    'N',
    'N / NE',
    'NE',
    'E / NE',
    'E',
    'E / SE',
    'SE',
    'S / SE',
    'S',
    'S / SW',
    'SW',
    'W / SW',
    'W',
    'W / NW',
    'NW',
    'N / NW',
  ];
  console.log(degree);
  const index = Math.round(degree / 22.5) % 16;
  return directions[index];
}

export function formatDateString(dateString) {
  // Split the date string into year, month, and day parts
  const [year, monthNum, dayOfMonth] = dateString.split('-').map(Number);

  // Create a new Date object
  const dateObj = new Date(year, monthNum - 1, dayOfMonth);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const dayOfWeek = daysOfWeek[dateObj.getDay()]; // Get day of the week
  const monthName = monthNames[dateObj.getMonth()]; // Get the real month name

  return `${dayOfWeek}, ${dayOfMonth} ${monthName}`;
}

export function formatTimeString(timeString) {
  // Split the time string into hours, minutes, and seconds
  const [hours, minutes] = timeString.split(':');
  // Construct the formatted time string with hours and minutes only
  return `${hours}:${minutes} h`;
}
