// var mcExperiencia = require("./mcexperiencia");

// const cnpj = "42591651001204";
// // const mcExperiencia = McExperiencia(cnpj);
// mcExperiencia.getCupomSurvey(cnpj).then((cupomSurvey) => {
//   console.log(cupomSurvey);
// });

const express = require("express");
const bodyParser = require("body-parser");
const Secrets = require("./secrets");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(bodyParser.json());

// Endpoint para o Webhook
app.post("/webhook", (req, res) => {
  const body = req.body;

  // Verifica se é um evento de mensagem
  if (body.object === "instagram") {
    body.entry.forEach((entry) => {
      const messaging = entry.messaging;

      if (messaging) {
        messaging.forEach((event) => {
          if (event.message && event.message.text) {
            const message = event.message.text;

            // Verifica se a mensagem começa com "!cupom"
            if (message.startsWith("!cupom")) {
              // Extrai o CNPJ do texto
              const match = message.split(" ");
              if (match && match[1]) {
                const cnpj = match[1].replace(/[^0-9]/g, ""); // Remove pontuação
                console.log(`CNPJ recebido: ${cnpj}`);
              } else {
                console.log("Formato inválido de CNPJ");
              }
            }
          }
        });
      }
    });

    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

// Endpoint de verificação (para configurar o webhook)
app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = Secrets.verifyToken;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
