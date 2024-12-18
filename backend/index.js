const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());


app.post('/save-data', (req, res) => {
  const formData = req.body;

  let existingData = [];
  try {
    const fileContent = fs.readFileSync('data.json');
    existingData = JSON.parse(fileContent);
  } catch (err) {
    console.log('data.json not found. Creating a new file.');
  }

  
  existingData.push(formData);


  fs.writeFile('data.json', JSON.stringify(existingData, null, 2), (err) => {
    if (err) {
      console.error('Error saving data:', err);
      return res.status(500).send('Failed to save data.');
    }
    res.status(200).send('Data saved successfully.');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
