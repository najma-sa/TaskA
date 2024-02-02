const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'postForm.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//to handle POST requests
app.post('/:retailUnitCode/:customerId', (req, res) => {
  const retailUnitCode = req.params.retailUnitCode;
  const customerId = req.params.customerId;
  const formData = req.body;
  });

  // to read existing data from the JSON file
  let existingData = [];
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
    existingData = JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
  }
  
  // add the uodated data to the JSON file
  try {
    fs.writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2), 'utf-8');
    console.log('Data written to data.json');
  } catch (error) {

  res.send('POST request successful');
};

