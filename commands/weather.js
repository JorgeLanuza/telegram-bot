// const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot(token, { polling: true });
// const weather = require('weather-js');

// bot.onText(/^\/clima (.+)/, function (msg, match) {
//   let chatId = msg.chat.id;
//   let city = match[1];

//   let options = { search: city, degreeType: 'C', lang: 'es-ES' }

//   weather.find(options, function (err, res) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(res[0].location.name)
//       bot.sendMessage(chatId, "Lugar: " + result[0].location.name +
//         "\n\nTemperatura: " + result[0].current.temperature + "ºC\n" +
//         "Visibilidad: " + result[0].current.skytext + "\n" +
//         "Humedad: " + result[0].current.humidity + "%\n" +
//         "Dirección del viento: " + result[0].current.winddisplay + "\n"
//         , { parse_mode: 'Markdown' });
//     }
//   })
// });

// module.exports = bot;
const axios = require('axios').default;
const handleWeather = async (ctx) => {
    // Extraigo el nombre de la ciudad a partir de la palabra weather
    const city = ctx.message.text.split('/weather ')[1].trim().toLowerCase();
    // Tenemos la url a la api que nos permite recuperar la ciudad.
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.BOT_WEATHER_TOKEN}&units=metric`,)
    const res = `La temperatura en ${city} es de ${response.data.main.temp}ºC`;
    ctx.reply(res);








}

module.exports = handleWeather;