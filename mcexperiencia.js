// var request = require("request");

// // FUNCOES DE PEGAR ID DA PRÓXIMA URL (index, survey ou finish) e o Código do cupom após finalizar a survey

// // Pegar número da survey depois da inicial
// function getNumInitialSurvey(bodyText) {
//   const pattern = /Index\.aspx\?c=(\d+)/;
//   const match = bodyText.match(pattern);

//   return match[1];
// }

// // Pegar o número das surveys
// function getNumNextSurvey(bodyText) {
//   const pattern = /Survey\.aspx\?c=(\d+)/;
//   const match = bodyText.match(pattern);

//   return match[1];
// }

// // Pegar o número do Finish
// function getNumFinishSurvey(bodyText) {
//   const pattern = /Finish\.aspx\?c=(\d+)/;
//   const match = bodyText.match(pattern);

//   return match[1];
// }

// // Pegar o código do Cupom
// function getCodigoCupom(bodyText) {
//   const pattern = /Código\: (\w+|d+)/;
//   const match = bodyText.match(pattern);

//   return match[1];
// }

// // Retorna o header padrão com o Referer da última página visitada atualizado
// function getHeaders(numAnterior, initialsSurvey) {
//   // Data e hora atuais
//   const now = new Date();

//   // Formatar a data atual para o formato desejado
//   const nowString = now.toLocaleString("en-US", {
//     month: "numeric",
//     day: "numeric",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: true,
//   });

//   // Data e hora daqui a uma hora
//   const oneHourLater = new Date(now.getTime() + 60 * 60 * 1000);

//   // Formatar a data daqui a uma hora
//   const expiresString = oneHourLater.toLocaleString("en-US", {
//     month: "numeric",
//     day: "numeric",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     hour12: true,
//   });

//   return {
//     accept:
//       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//     "cache-control": "max-age=0",
//     "content-type": "application/x-www-form-urlencoded",
//     "sec-ch-ua":
//       '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": '"Windows"',
//     "sec-fetch-dest": "document",
//     "sec-fetch-mode": "navigate",
//     "sec-fetch-site": "same-origin",
//     "sec-fetch-user": "?1",
//     "upgrade-insecure-requests": "1",
//     cookie: `AspxAutoDetectCookieSupport=1; BIGipServermcexperienciasurvey.com_pool=3395401738.19491.0000; ASP.NET_SessionId=efksrndhnwysgdjr4uixoue0; LID=pt-BR; CCID=bra; SN=CH-WEB-WSE02-P; bhtglocalcooksesstest=1; bhtglocalcookperstest=1; DF_Placed=1; T=SN=CH-WEB-WSE02-P&ST=${nowString}&FP=/bra&RA=72.14.201.197&LA=${expiresString}; TS017a8bfa=01af266ec9cfd7eaae1fbcf136da90036fac9fd59605a86a69d63a5899ad4e9cb9212496cece8d33ea966ed811c604ce53b8f7d322251a1ed4f0e2f5f90fe248c81256eda9af748f10fd381c1d39e0ce082568b9c042364750f6b3b315cb073ef33e0cc34a36c7758bc8469cc80b43fecccf7d2593eee43d2bd1bcf5a109aabe3c1fd1431e5faad97968a9d8f7574b88d477c78c7c25534168d24dc438dbb59bd266b956a7b9cb2d32bf7f93582aced86d0e2d36e2; TS196fa2bb027=084b59c7b6ab2000e9d9216f10f644736b2007ef0e0ce87cd45c8408f7894f72c4d610c641394e14086037733811300078c159804cac9acc5627b53949384f0a2c446503b6ca2514b7c2176d8e4c6782032b2bc3922570de7e5db0d733d90c17`,
//     Referer: `https://www.mcexperienciasurvey.com/${
//       initialsSurvey ? "Index" : "Survey"
//     }.aspx?c=${numAnterior}`,
//     "Referrer-Policy": "strict-origin-when-cross-origin",
//   };
// }

// // Página inicial de selecionar idioma.
// function getInitialSurvey(cnpj, resolve) {
//   var options = {
//     method: "GET",
//     url: "https://www.mcexperienciasurvey.com/bra",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     const numInitialSurvey = getNumInitialSurvey(bodyText);

//     console.log("passou: tela inicial");

//     return initSurvey(numInitialSurvey, cnpj, resolve);
//   });
// }

// // Iniciar Survey
// function initSurvey(numInitialSurvey, cnpj, resolve) {
//   var options = {
//     method: "GET",
//     url: "https://www.mcexperienciasurvey.com/Index.aspx?c=" + numInitialSurvey,
//     headers: {
//       accept:
//         "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//       "accept-language": "pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//       "cache-control": "max-age=0",
//       "content-type": "application/x-www-form-urlencoded",
//       "sec-ch-ua":
//         '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": '"Windows"',
//       "sec-fetch-dest": "document",
//       "sec-fetch-mode": "navigate",
//       "sec-fetch-site": "same-origin",
//       "sec-fetch-user": "?1",
//       "upgrade-insecure-requests": "1",
//       cookie:
//         "AspxAutoDetectCookieSupport=1; BIGipServermcexperienciasurvey.com_pool=3395401738.19491.0000; ASP.NET_SessionId=efksrndhnwysgdjr4uixoue0; LID=pt-BR; CCID=bra; SN=CH-WEB-WSE02-P; bhtglocalcooksesstest=1; bhtglocalcookperstest=1; DF_Placed=1; T=SN=CH-WEB-WSE02-P&ST=12/3/2024 10:40:05 PM&FP=/bra&RA=72.14.201.197&LA=12/3/2024 11:41:56 PM; TS017a8bfa=01af266ec9cfd7eaae1fbcf136da90036fac9fd59605a86a69d63a5899ad4e9cb9212496cece8d33ea966ed811c604ce53b8f7d322251a1ed4f0e2f5f90fe248c81256eda9af748f10fd381c1d39e0ce082568b9c042364750f6b3b315cb073ef33e0cc34a36c7758bc8469cc80b43fecccf7d2593eee43d2bd1bcf5a109aabe3c1fd1431e5faad97968a9d8f7574b88d477c78c7c25534168d24dc438dbb59bd266b956a7b9cb2d32bf7f93582aced86d0e2d36e2; TS196fa2bb027=084b59c7b6ab2000e9d9216f10f644736b2007ef0e0ce87cd45c8408f7894f72c4d610c641394e14086037733811300078c159804cac9acc5627b53949384f0a2c446503b6ca2514b7c2176d8e4c6782032b2bc3922570de7e5db0d733d90c17",
//       Referer: "https://www.mcexperienciasurvey.com/bra",
//       "Referrer-Policy": "strict-origin-when-cross-origin",
//     },
//     body: "JavaScriptEnabled=1&FIP=True&P=1&NextButton=Continuar",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey inicial");

//     const numSurveyCnpj = getNumNextSurvey(bodyText);
//     return surveyCnpj(numSurveyCnpj, numInitialSurvey, cnpj, resolve);
//   });
// }

// // Seleciona Cnpj e Data/Hora
// function surveyCnpj(numSurveyCnpj, numInitialSurvey, cnpj, resolve) {
//   if (!cnpj) cnpj = "42591651001204";

//   const dataHora = (new Date().toLocaleString("pt-BR") + "").split(", ");
//   const data = dataHora[0].split("/");
//   const horaMinuto = dataHora[1].split(":");

//   const Index_VisitDateFormattedDate = data[2] + data[1] + data[0];
//   const Index_VisitDateDatePicker = `${data[1]}%2F${data[0]}%2F${data[2]}`;
//   const horaAgora = horaMinuto[0];
//   const minutosAgora = horaMinuto[1];

//   var options = {
//     method: "GET",
//     url: "https://www.mcexperienciasurvey.com/Survey.aspx?c=" + numSurveyCnpj,
//     headers: getHeaders(numInitialSurvey, true),
//     body: `JavaScriptEnabled=1&FIP=True&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.&InputCNPJ=${cnpj}&Index_VisitDateFormattedDate=${Index_VisitDateFormattedDate}&Index_VisitDateDatePicker=${Index_VisitDateDatePicker}&InputHour=${horaAgora}&InputMinute=${minutosAgora}&Index_OptIn=1&NextButton=Iniciar`,
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey cnpj");

//     const numSurveySetor = getNumNextSurvey(bodyText);

//     return surveySetor(numSurveySetor, numSurveyCnpj, resolve);
//   });
// }

// // Seleciona o setor do pedido (balcão por padrão)
// function surveySetor(numSurveySetor, numSurveyCnpj, resolve) {
//   var options = {
//     method: "POST",
//     url: "https://www.mcexperienciasurvey.com/Survey.aspx?c=" + numSurveySetor,
//     headers: getHeaders(numSurveyCnpj),
//     body: "R000001=1&IoNF=1&PostedFNS=R000001&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey setor");

//     const numSurveyUltimaCompra = getNumNextSurvey(bodyText);
//     return surveyUltimaCompra(numSurveyUltimaCompra, numSurveySetor, resolve);
//   });
// }

// // Seleciona que consumiu dentro da loja a última compra
// function surveyUltimaCompra(numSurveyUltimaCompra, numSurveySetor, resolve) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" +
//       numSurveyUltimaCompra,
//     headers: getHeaders(numSurveySetor),
//     body: "R000002=1&IoNF=2&PostedFNS=R000002&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey última compra");

//     const numSurveyAcompanhado = getNumNextSurvey(bodyText);
//     return surveyAcompanhado(
//       numSurveyAcompanhado,
//       numSurveyUltimaCompra,
//       resolve
//     );
//   });
// }

// // Seleciona que não estava acompanhado de crianças de 3 a 7 anos
// function surveyAcompanhado(
//   numSurveyAcompanhado,
//   numSurveyUltimaCompra,
//   resolve
// ) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" +
//       numSurveyAcompanhado,
//     headers: getHeaders(numSurveyUltimaCompra),
//     body: "R000003=2&IoNF=3&PostedFNS=R000003&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey acompanhado");

//     const numSurveySatisfacaoGeral = getNumNextSurvey(bodyText);
//     return surveySatisfacaoGeral(
//       numSurveySatisfacaoGeral,
//       numSurveyAcompanhado,
//       resolve
//     );
//   });
// }

// // Preenche as satisfações gerais
// function surveySatisfacaoGeral(
//   numSurveySatisfacaoGeral,
//   numSurveyAcompanhado,
//   resolve
// ) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" +
//       numSurveySatisfacaoGeral,
//     headers: getHeaders(numSurveyAcompanhado),
//     body: "R000004=5&IoNF=4&PostedFNS=R000004&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey satisfação geral");

//     const numSurveySatisfacaoCliente = getNumNextSurvey(bodyText);
//     return surveySatisfacaoCliente(
//       numSurveySatisfacaoCliente,
//       numSurveySatisfacaoGeral,
//       resolve
//     );
//   });
// }

// // Preenche as satisfações de cliente
// function surveySatisfacaoCliente(
//   numSurveySatisfacaoCliente,
//   numSurveySatisfacaoGeral,
//   resolve
// ) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" +
//       numSurveySatisfacaoCliente,
//     headers: getHeaders(numSurveySatisfacaoGeral),
//     body: "R000010=5&R000009=5&R000006=5&R000007=5&R000008=5&R000012=5&IoNF=11&PostedFNS=R000010%7CR000009%7CR000006%7CR000007%7CR000008%7CR000012&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey satisfação cliente");

//     const numSurveyEntregue = getNumNextSurvey(bodyText);
//     return surveyEntregue(
//       numSurveyEntregue,
//       numSurveySatisfacaoCliente,
//       resolve
//     );
//   });
// }

// // Seleciona que o pedido foi entregue corretamente
// function surveyEntregue(
//   numSurveyEntregue,
//   numSurveySatisfacaoCliente,
//   resolve
// ) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" + numSurveyEntregue,
//     headers: getHeaders(numSurveySatisfacaoCliente),
//     body: "R000013=1&IoNF=20&PostedFNS=R000013&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey entregue");

//     const numSurveyExperiencia = getNumNextSurvey(bodyText);
//     return surveyExperiencia(numSurveyExperiencia, numSurveyEntregue, resolve);
//   });
// }

// // Preenche positivamente as experiências que teve no mcdonalds
// function surveyExperiencia(numSurveyExperiencia, numSurveyEntregue, resolve) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" +
//       numSurveyExperiencia,
//     headers: getHeaders(numSurveyEntregue),
//     body: "R000015=5&R000016=10&IoNF=44&PostedFNS=R000015%7CR000016&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey experiência");

//     const numSurveyComentario = getNumNextSurvey(bodyText);
//     return surveyComentario(numSurveyComentario, numSurveyExperiencia, resolve);
//   });
// }

// // Preenche o comentário com "Muito Satisfeito!"
// function surveyComentario(numSurveyComentario, numSurveyExperiencia, resolve) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" +
//       numSurveyComentario,
//     headers: getHeaders(numSurveyExperiencia),
//     body: "S000019=Muito+Satisfeito%21&IoNF=47&PostedFNS=S000019&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey comentário");

//     const numSurveyVisita = getNumNextSurvey(bodyText);
//     return surveyVisita(numSurveyVisita, numSurveyComentario, resolve);
//   });
// }

// // Preenche como foi a visita ao mcdonalds
// function surveyVisita(numSurveyVisita, numSurveyComentario, resolve) {
//   var options = {
//     method: "POST",
//     url: "https://www.mcexperienciasurvey.com/Survey.aspx?c=" + numSurveyVisita,
//     headers: getHeaders(numSurveyComentario),
//     body: "R000020=2&IoNF=48&PostedFNS=R000020&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.",
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey visita");

//     const numSurveyDados = getNumNextSurvey(bodyText);
//     return surveyDados(numSurveyDados, numSurveyVisita, resolve);
//   });
// }

// // Preenche os dados com nome e email aleatórios
// function surveyDados(numSurveyDados, numSurveyVisita, resolve) {
//   request(
//     { method: "GET", url: "https://randomuser.me/api/" },
//     function (error, response) {
//       if (error) throw new Error(error);

//       const dados = JSON.parse(response.body).results[0];
//       const nome = dados.name.first;
//       const email = dados.email;

//       var options = {
//         method: "POST",
//         url:
//           "https://www.mcexperienciasurvey.com/Survey.aspx?c=" + numSurveyDados,
//         headers: getHeaders(numSurveyVisita),
//         body: `S000036=${nome}&S000028=&S000035=&S000033=${email}&S000034=${email}&IoNF=63&PostedFNS=S000036%7CS000028%7CS000035%7CS000033%7CS000034%7CS000062&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.`,
//       };

//       request(options, function (error, response) {
//         if (error) throw new Error(error);

//         const bodyText = response.body;

//         console.log("passou: survey dados");

//         const numSurveyMarketing = getNumNextSurvey(bodyText);
//         return surveyMarketing(numSurveyMarketing, numSurveyDados, resolve);
//       });
//     }
//   );
// }

// // Seleciona para não receber informações de marketing
// function surveyMarketing(numSurveyMarketing, numSurveyDados, resolve) {
//   var options = {
//     method: "POST",
//     url:
//       "https://www.mcexperienciasurvey.com/Survey.aspx?c=" + numSurveyMarketing,
//     headers: getHeaders(numSurveyDados),
//     body: `R000040=2&IoNF=64&PostedFNS=R000040&OneQuestionLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erro+na+p%C3%A1gina.&MoreQuestionsLeftUnansweredErrorMessageTemplate=H%C3%A1+%7B0%7D+erros+na+p%C3%A1gina.`,
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey marketing");

//     const numSurveyFinish = getNumFinishSurvey(bodyText);
//     return surveyFinish(numSurveyFinish, numSurveyMarketing, resolve);
//   });
// }

// // Retorna o número do cupom do top sundae
// function surveyFinish(numSurveyFinish, numSurveyMarketing, resolve) {
//   var options = {
//     method: "GET",
//     url: "https://www.mcexperienciasurvey.com/Finish.aspx?c=" + numSurveyFinish,
//     headers: getHeaders(numSurveyMarketing),
//   };

//   request(options, function (error, response) {
//     if (error) throw new Error(error);

//     const bodyText = response.body;

//     console.log("passou: survey finish");

//     const codigoCupom = getCodigoCupom(bodyText);

//     resolve(codigoCupom);
//     return codigoCupom;
//   });
// }

// function getCupom(cnpj) {
//   return new Promise((resolve) => {
//     getInitialSurvey(cnpj, resolve);
//   });
// }

// // class McExperiencia {
// //   constructor(cnpj) {
// //     this.cnpj = cnpj;
// //   }
// //   getCupomSurvey() {
// //     return new Promise((resolve) => {
// //       getCupom(this.cnpj).then((cupomSurvey) => {
// //         resolve(cupomSurvey);
// //       });
// //     });
// //   }
// // }

// // const mcExperiencia = new McExperiencia("42591651001204");
// // mcExperiencia.getCupomSurvey().then((cupomSurvey) => {
// //   console.log(cupomSurvey);
// // });

// exports.getCupomSurvey = (cnpj) => {
//   return new Promise((resolve) => {
//     getCupom(cnpj).then((cupomSurvey) => {
//       resolve(cupomSurvey);
//     });
//   });
// };
