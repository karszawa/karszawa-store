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

function wait(milliseconds: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => resolve(), milliseconds);
  });
}

/*
  Should not use PaymentRequest directly.
  Should define interface
*/
export async function pay(details: PaymentDetailsInit) {
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

  const result = await request.show();

  console.log(result);

  // Mock some time-consuming task such as calling payment API
  await wait(2000);

  await result.complete("success");
}
