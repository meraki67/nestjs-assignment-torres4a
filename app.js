const express = require('express');
const app = express();
const assignmentRoutes = require('./routes/assignRoutes');

app.use('/api', assignmentRoutes);

const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
