const axios = require('axios').default;

const handleWeather = async (ctx) => {
  // const ciudad = ctx.message.text.split(' ')[1];
  // const ciudad = ctx.message.text.slice(9);
  const ciudad = ctx.message.text.split('/weather ')[1].trim().toLowerCase();

  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OWM_API_KEY}&units=metric`);

  const res = `La temperatura en ${ciudad} es:
    🌡 TEMP: ${response.data.main.temp}º
    🔥 MÁX: ${response.data.main.temp_max}º
    ❄️ MIN: ${response.data.main.temp_min}º
    💧 HUMEDAD: ${response.data.main.humidity}%`;

  ctx.reply(res);
}

// /weather Madrid

module.exports = handleWeather;