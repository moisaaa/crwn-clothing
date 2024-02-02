import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer';

const addCartItem = (cartItems, item) => {
  // Find if item already exists in cart
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );
  // If it does, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // Return new array with modified cartItems / new cart item
  return [...cartItems, { ...item, quantity: 1 }];
};

const removeCartItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    /*
      generate new cartTotal

      generate new cartCount

      dispatch new items with payload = {
        newCartItems,
        newCartTotal,
        newCartCount
      }
    */
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    dispatch(
      createAction('SET_CART_ITEMS', {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const toggleCart = () => {
    dispatch(createAction('TOGGLE_CART'));
  };

  const addItemToCart = (item) => {
    const newCartItems = addCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (item) => {
    const newCartItems = removeCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const deleteItemFromCart = (item) => {
    const newCartItems = deleteCartItem(cartItems, item);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen: () => {
      toggleCart();
    },
    addItemToCart,
    removeItemToCart,
    deleteItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
