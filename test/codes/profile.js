const lunaby-canvas = require("../../index");

module.exports = {
  async image() {
    const image = await new lunaby-canvas.Profile()
    .setUser("852103749228036136")
    .build();

    return image;
  },
  name: "profile"
};