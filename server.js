import express from 'express'

const app = express();

app.get("/", (req, res) => {
  res.json({
    message:"we are successfully running:excloud , lets dockerized it completely , hurray we did it  ",
    status:"success chal gya"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});