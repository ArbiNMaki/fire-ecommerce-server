var admin = require("firebase-admin");

var serviceAccount = require("../config/service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
