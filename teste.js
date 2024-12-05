var mcExperiencia = require("./mcexperiencia");

const cnpj = "42591651001204";
// const mcExperiencia = McExperiencia(cnpj);
mcExperiencia.getCupomSurvey(cnpj).then((cupomSurvey) => {
  console.log(cupomSurvey);
});
