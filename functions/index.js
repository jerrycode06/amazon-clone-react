const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQNpcEUXZBOXczrqwuVBlFGk04ehrOs1YQz2FzdqMaxDHbO4IN5T12k40pXIyUDn9MYzlKdhNujS3rHiDnbGBPk00j1JX0YVs"
);

//API

// App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Received BOOM!! >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  //OK- Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-3349b/us-central1/api
