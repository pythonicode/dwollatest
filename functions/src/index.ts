import * as functions from "firebase-functions";

const Client = require("dwolla-v2").Client;

// Navigate to https://dashboard.dwolla.com/applications (production) or https://dashboard-sandbox.dwolla.com/applications (Sandbox) for your application key and secret.
const appKey = "XUo57j57qYIP7wl5pCDS2F4EpLEaYAFRa4jXuecibyh0nCJRkQ";
const appSecret = "VIyF0U3gQPYPrJtLq2VvXdqFHfDso7Y9ol5eHFo0BBLVenruaC";
const dwolla = new Client({
  key: appKey,
  secret: appSecret,
  environment: "sandbox", // defaults to 'production'
});

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const createCustomer = functions.https.onCall((data, context) => {
  // GET api.dwolla.com/customers?limit=10&offset=20
  functions.logger.log("Hi");
  dwolla
    .get("customers", { limit: 10, offset: 20 })
    .then((res: any) => functions.logger.log(res.body.total));
});
