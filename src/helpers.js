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
