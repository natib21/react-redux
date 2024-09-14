const intialVal = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };

export default  function accountReducer(state = intialVal, action) {
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
      case "account/requestLoan":
        if (state.loan > 0) return state;
        return {
          ...state,
          loan: action.payload.ammount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.ammount,
        };
      case "account/payLoan":
        return {
          ...state,
          loan: 0,
          loanPurpose: "",
          balance: state.balance - state.loan,
        };
      default:
        return state;
    }
  };

  export function deposit (amount)  {
    return { type: "account/deposit", payload: amount };
  };
  
  export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
  };
  
  export function requestLoan(amount, purpose) {
    return {
      type: "account/requestLoan",
      payload: { ammount: amount, purpose: purpose },
    };
  };
  
 export  function payloan () {
    return { type: "account/payLoan" };
  };

