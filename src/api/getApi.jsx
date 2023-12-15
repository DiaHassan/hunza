import axios from 'axios';

const axios = require('axios');

// Replace with the published CSV URL from your Google Sheets document
const googleSheetsCSVURL = 'YOUR_PUBLISHED_CSV_URL';

const fetchDataFromGoogleSheets = async () => {
  try {
    const response = await axios.get(googleSheetsCSVURL);
    const rows = response.data.split('\n');
    const headers = rows[0].split(',');
    const blogData = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i].split(',');
      if (row.length === headers.length) {
        const blogItem = {
          id: row[0],
          title: row[1],
          date: row[2],
          image: row[3],
          text: row[4],
        };
        blogData.push(blogItem);
      }
    }

    return blogData;
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    return [];
  }
};

// Call the function to fetch data
const blogData = fetchDataFromGoogleSheets();

// Example usage of the fetched data
blogData.then(data => {
  console.log(data);
});