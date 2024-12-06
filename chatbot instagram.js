// var mcExperiencia = require("./mcexperiencia");

// const cnpj = "42591651001204";
// // const mcExperiencia = McExperiencia(cnpj);
// mcExperiencia.getCupomSurvey(cnpj).then((cupomSurvey) => {
//   console.log(cupomSurvey);
// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
