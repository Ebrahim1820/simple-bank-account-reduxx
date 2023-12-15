import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  // Modern way to connect component to redux
  const balance = useSelector((store) => store.account.balance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

// oldest way to conncet redux to component
// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     balance: state.account.balance,
//   };
// }

//export default connect(mapStateToProps)(BalanceDisplay);
export default BalanceDisplay;
