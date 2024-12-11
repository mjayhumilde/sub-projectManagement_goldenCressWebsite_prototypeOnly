import { cart, calculateCartQuantity } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOption.js";
import formatCurrency from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });
  // deliveryOptions.forEach((deliveryOption) => {
  //     shippingFee += deliveryOption.priceCents;
  // });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.01;
  const totalCents = totalBeforeTaxCents + taxCents;

 

  const paymentSummaryHTML = `
        <div class="payment-summary-title">
        Order Summary
        </div>

        <div class="payment-summary-row">
        <div class=""js-items">Items (${calculateCartQuantity()}):</div>
        <div class="payment-summary-money">&#8369;${formatCurrency(
          productPriceCents
        )}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">&#8369;${formatCurrency(
          shippingPriceCents
        )}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">&#8369;${formatCurrency(
          totalBeforeTaxCents
        )}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (1%):</div>
        <div class="payment-summary-money">&#8369;${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">&#8369;${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
        Place your order
        </button>
    `;

    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}


