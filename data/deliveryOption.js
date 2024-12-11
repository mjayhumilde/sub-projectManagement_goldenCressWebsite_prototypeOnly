export const deliveryOptions = [
    {
        id: '1',
        deliveryDate: 0,
        deliveryTime: 80,
        priceCents: 10000
    },
    {
        id: '2',
        deliveryDate: 0,
        deliveryTime: 60,
        priceCents: 15000
    },

]

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;
      
      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId){
          deliveryOption = option;
        }
      });
      return deliveryOption || deliveryOptions[0];
}