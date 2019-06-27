const METHOD_DATA: PaymentMethodData[] = [
  {
    supportedMethods: "basic-card",
    data: {
      supportedNetworks: ["visa", "mastercard"]
    }
  }
];

const PAYMENT_OPTIONS: PaymentOptions = {
  requestShipping: true,
  requestPayerEmail: true,
  requestPayerPhone: true,
  requestPayerName: true
};

// const details = {
//   displayItems: [
//     {
//       label: "Original donation amount",
//       amount: { currency: "JPY", value: "65.00" }
//     },
//     {
//       label: "Friends and family discount",
//       amount: { currency: "JPY", value: "-10.00" }
//     }
//   ],
//   total: {
//     label: "Total",
//     amount: { currency: "JPY", value: "55.00" }
//   }
// };

export function pay(details: PaymentDetailsInit) {
  const request = new PaymentRequest(METHOD_DATA, details, PAYMENT_OPTIONS);

  request.addEventListener(
    "shippingaddresschange",
    (e: PaymentRequestUpdateEvent) => {
      e.updateWith(Promise.resolve(details));
    }
  );

  request.addEventListener(
    "shippingoptionchange",
    (e: PaymentRequestUpdateEvent) => {
      e.updateWith(Promise.resolve(details));
    }
  );

  request
    .show()
    .then(result => {
      console.log(result);

      setTimeout(() => {
        result.complete("success").then(() => {
          alert("Payment completed!");
        });
      }, 2000);
    })
    .catch(function(err) {
      console.error("Uh oh, something bad happened: " + err.message);
    });
}
