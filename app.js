// app.js
const express = require('express');
const app = express();
const assignmentRoutes = require('./routes/assignmentroutes');

// Use the assignment routes
app.use('/api', assignmentRoutes);

// Start the server
const PORT = 9090;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
