export const cart = [];

export function addToCart(productId){
       let matchingItem;
        cart.forEach((product) => {
            if(product.productId === productId)
            {
                matchingItem = product;
            }
            
        });
        let quantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
        if(matchingItem){
            matchingItem.quantity += quantity;
        }

        else{
          cart.push({
                 productId : productId,
                 quantity : quantity
               });
        }
};