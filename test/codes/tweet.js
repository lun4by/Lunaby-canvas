const lunaby-canvas = require("../../index");

module.exports = {
  async image() {
const image = await new lunaby-canvas.Tweet()
.setTheme("dim")
.setUser({displayName: "Beş", username: "fivesobes"})
.setVerified(true)
.setAvatar("https://cdn.discordapp.com/avatars/928259219038302258/299ebac2bc13f5a8f44d2dd1f0c9f856.png?size=1024")
.build();
    return image;
  },
  name: "tweet"
};