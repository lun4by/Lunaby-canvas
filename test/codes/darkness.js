const lunaby-canvas = require("../../index");

module.exports = {
  async image() {
    return await lunaby-canvas.Image.darkness("https://i.imgur.com/2pOpPKf.png", 100);
  },
  name: "darkness"
};