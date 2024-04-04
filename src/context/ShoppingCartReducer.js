export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        isCartItem: [state.cart.map((item) => item.viewId)],
      };
    }
    case "CLEAR-CART": {
      return {
        ...state,
        cart: [],
      };
    }

    case "INCREMENT_ITEM_QTY": {
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id ? item.qty++ : item.qty
        ),
      };
    }

    case "DECREMENT_ITEM_QTY": {
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? item.qty === 1
              ? item.id !== action.payload.id
              : item.qty--
            : item.qty
        ),
      };
    }
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return {
        ...state,
        sortByPrice: action.payload,
      };

    case "FILTER_BY_STOCK":
      return {
        ...state,
        inStock: !state.inStock,
      };

    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        delivery: !state.delivery,
      };

    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };

    case "CLEAR_ALL_FILTERS":
      return {
        sortByPrice: null,
        inStock: false,
        delivery: false,
        searchQuery: "",
      };

    default:
      return state;
  }
};
