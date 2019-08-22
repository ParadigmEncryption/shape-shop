export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.name === cartItemToAdd.name
  );

  if (existingCartItem || cartItems.length >= 10) {
    return cartItems;
  } else {
    return [ ...cartItems, { ...cartItemToAdd }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => (
  cartItems.filter(cartItem =>
    cartItem.name !== cartItemToRemove.name 
  )
);
