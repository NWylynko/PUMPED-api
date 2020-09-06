function timeConversion(milliseconds: number) {
  // adapted from https://stackoverflow.com/a/32180863

  const seconds = (milliseconds / 1000);
  const minutes = (milliseconds / (1000 * 60));
  const hours = (milliseconds / (1000 * 60 * 60));
  const days = (milliseconds / (1000 * 60 * 60 * 24));

  if (seconds < 60) {
    return `${Math.floor(seconds)} Seconds`;
  } if (minutes < 60) {
    return `${Math.floor(minutes)} Minutes`;
  } if (hours < 24) {
    return `${Math.floor(hours)} Hours`;
  }
  return `${Math.floor(days)} Days`;
}

export default timeConversion;
