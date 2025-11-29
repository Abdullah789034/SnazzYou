const mongoose = require("mongoose");
const app = require("./app");

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err);
    console.log(`App is live on http://localhost:${process.env.PORT}`);
  });
})();
