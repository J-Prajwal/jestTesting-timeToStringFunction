function timeToString(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  seconds = seconds % 60;
  minutes = minutes % 60;
  let ss = "";
  let mm = "";
  let hh = "";
  
  if (seconds == 1) {
    ss = seconds + " second";
  } else {
    ss = seconds + " seconds";
  }
  if (minutes == 1) {
    mm = minutes + " minute";
  } else {
    mm = minutes + " minutes";
  }
  if (hours == 1) {
    hh = hours + " hour";
  } else {
    hh = hours + " hours";
  }

  let res = [];
  if (hh[0] > 0) {
    res.push(hh);
  }
  if (mm[0] > 0) {
    res.push(mm);
  }
  if (ss[0] > 0) {
    res.push(ss);
  }
  return res.join(' ');
}

module.exports = timeToString;
