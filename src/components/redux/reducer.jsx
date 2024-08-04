const initialState = {
    product: JSON.parse(localStorage.getItem('product')) ||[],
    search: '',
    basket: JSON.parse(localStorage.getItem('basket')) ||[],
}

export const Reducer = (state = initialState, action) => {
    if (action.type === "NEW_PRODUCT") {
      let res = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(res));
      return { ...state, product: res };
    }
    else if (action.type === 'DEL_PRODUCT') {
      const delPro = state.product.filter((el) => el.id !== action.payload)
      localStorage.setItem('product', JSON.stringify(delPro))
      return {...state, product:delPro}
    }
    else if (action.type === 'SEARCH') {
      return {...state, search: action.payload}
    }
    else if (action.type === "BAS_PRODUCT") {
      let bas = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(bas));
      return { ...state, basket: bas };
    }
    else {
      return state;
    }
  };
  