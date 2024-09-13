import { createStore } from "redux";
const intialVal = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = intialVal, action) => {
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

const store = createStore(reducer);
// store.dispatch({ type: "account/deposit", payload: 50 });
// console.log(store.getState());
// store.dispatch({ type: "account/withdraw", payload: 10 });
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { ammount: 1000, purpose: "To Buy A Car" },
// });

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { ammount: amount, purpose: purpose },
  };
};

const payloan = () => {
  return { type: "account/payLoan" };
};

store.dispatch(deposit(1000));
store.dispatch(withdraw(100));
console.log(store.getState());

store.dispatch(requestLoan(5000, "To Buy A home"));
console.log(store.getState());
