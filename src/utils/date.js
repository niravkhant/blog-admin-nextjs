export function formatDate(inputDateStr) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(inputDateStr);
  const day = date.getDate(); // Get the day (1-31)
  const monthIndex = date.getMonth(); // Get the month (0-11)
  const year = date.getFullYear(); // Get the year (four digits)

  // Format the date string as "DD Month YYYY"
  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
}