const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_API_KEY
}

const handleWhere = async (ctx) => {
  try {
    const direccion = ctx.message.text.split('/where ')[1].trim().toLowerCase();

    // Geocode
    const geocoder = NodeGeocoder(options);
    const res = await geocoder.geocode(direccion);

    // Creación imgen Google Map Static
    const imgMap = `https://maps.googleapis.com/maps/api/staticmap?center=${res[0].latitude},${res[0].longitude}&zoom=17&size=600x300&maptype=hybrid&markers=color:blue%7Clabel:S%7C${res[0].latitude},${res[0].longitude}&key=${process.env.GOOGLE_API_KEY}`;

    ctx.replyWithLocation(res[0].latitude, res[0].longitude);
    ctx.replyWithPhoto(imgMap);
  } catch (err) {
    ctx.reply('Ha ocurrido un error. Inténtalo con otra dirección')
  }
}

module.exports = handleWhere;