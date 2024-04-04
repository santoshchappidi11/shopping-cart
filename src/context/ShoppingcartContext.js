import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import shoppingData from "../data/Data";
import { cartReducer, filterReducer } from "./ShoppingCartReducer";
import { shoppingViewData } from "../data/Data";

const Cart = createContext();

const initialState = {
  products: shoppingData,
  cart: [],
  isCartItem: null,
};

const initialFilterState = {
  sortByPrice: "",
  inStock: false,
  delivery: false,
  searchQuery: "",
};

const ShoppingcartContext = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState();

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    initialFilterState
  );

  useEffect(() => {
    setTotalAmount(
      state.cart.reduce((acc, prod) => acc + Number(prod.price) * prod.qty, 0)
    );
  }, [state.cart]);

  // const [...cartId] = state.cart.map((c) => c.viewId);
  // const checkId = cartId.includes(id);

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,
        totalAmount,
        filterState,
        filterDispatch,
        shoppingViewData,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default ShoppingcartContext;

export const ShoppingCart = () => {
  return useContext(Cart);
};
