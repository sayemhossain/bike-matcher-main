const addToDb = (id) => {
  let shoppingCart;
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    shoppingCart = storedCart;
  } else {
    shoppingCart = {};
  }

  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const getStoredCart = () => {
  let shoppingCart;
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    shoppingCart = storedCart;
  } else {
    shoppingCart = {};
  }
  return shoppingCart;
};
const removeSingleCart = (id) => {
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    const shoppingCart = storedCart;
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
const deleteCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, getStoredCart, removeSingleCart, deleteCart };
