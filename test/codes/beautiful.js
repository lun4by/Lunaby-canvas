const lunaby-canvas = require("../../index");

module.exports = {
  async image() {
    return await lunaby-canvas.Image.beautiful("https://i.imgur.com/2pOpPKf.png");
  },
  name: "beautiful"
};