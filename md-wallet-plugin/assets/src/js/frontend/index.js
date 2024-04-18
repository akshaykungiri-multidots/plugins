/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
  "use strict";

  var publishableKey = siteConfig.publishableKey;
  var md_wallet_nonce = siteConfig.md_wallet_nonce;
  var stripe = Stripe(publishableKey);
  
  $(document).ready(function () {
    // 2. Creating a submit event and checking for errors
    const form = document.getElementById("payment-form");
    form.addEventListener("submit", async (event) => {

      event.preventDefault();
      
      fetch("/wp-json/md-wallet/v1/create-checkout-session", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: $("#md_wallet_amount").val(),
          customer_id: $("#md_wallet_customer_id").val(),
          customer_email: $("#md_wallet_customer_email").val(),
          customer_name: $("#md_wallet_customer_name").val(),
          customer_billing_address: $("#md_wallet_customer_billing_address").val(),
          customer_billing_address_2: $("#md_wallet_customer_billing_address_2").val(),
          customer_city: $("#md_wallet_customer_city").val(),
          customer_state: $("#md_wallet_customer_state").val(),
          customer_postal_code: $("#md_wallet_customer_postal_code").val(),
          customer_country: $("#md_wallet_customer_country").val(),
          md_wallet_nonce: md_wallet_nonce,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (session) {
          return stripe.redirectToCheckout({ sessionId: session.id });
        })
        .then(function (result) {
          if (result.error) {
            alert(result.error.message);
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    });
  });
})(jQuery);
