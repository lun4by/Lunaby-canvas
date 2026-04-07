const lunaby-canvas = require("../../index");

module.exports = {
  async image() {
    return await lunaby-canvas.Image.kiss("https://i.imgur.com/2pOpPKf.png", "https://i.imgur.com/2pOpPKf.png");
  },
  name: "kiss"
};