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
