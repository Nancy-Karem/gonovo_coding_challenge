const express = require('express');
const app = express();
const mergeRouter = require('./routes/merge');

app.use(express.json());

app.use('/api', mergeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});