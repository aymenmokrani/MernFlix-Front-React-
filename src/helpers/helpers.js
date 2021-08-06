export const getReleaseDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.split("-")[0];
  const monthNum = date.split("-")[1];
  const month = months[parseInt(monthNum) - 1];
  return `${month} ${year}`;
};
