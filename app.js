const express = require('express');
const app = express();

app.get('/welcome', (req, res) => {
  res.json({ message: 'welcome to my API' });
});
 

module.exports = app;


if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App running on port ${port}`));
}
