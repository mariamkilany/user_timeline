function formatAMPM(date: Date) {
  var hours = date.getHours();
  var minutes: any = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function durationFormat(duration: string) {
  const [hours, minutes] = duration.split(":").map(Number);
  return `${hours}hrs, ${minutes}mins`;
}

function extractDatePart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

const extractLatLng = (latLongString: string) => {
  const [lat, lng] = latLongString.split(",").map(parseFloat);
  return { lat, lng };
};

export { formatAMPM, durationFormat, extractDatePart, extractLatLng };
