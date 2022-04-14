import { OrdersContainer, OrdersItem } from "./OrdersList.styles";

const OrdersList = ({ ordersArray }: any) => {
  const renderOrders = () => {
    return ordersArray.map((elem: any) => (
      <OrdersItem
        key={elem.id}
        data-key={elem.id}
        // onClick={(e: any) => console.log(e.target.dataset.key)}
      >
        <p>{elem.datetime}</p>
        <p>{elem.symbol}</p>
        <p>{elem.type}</p>
        <p>{elem.side}</p>
        <p>{elem.price}</p>
        <p>{elem.amount}</p>
        <p>{elem.filled}</p>
        <p>{elem.remaining}</p>
        <button>Cansel</button>
      </OrdersItem>
    ));
  };

  return (
    <OrdersContainer style={{ width: "100%" }}>
      <div>
        <p>Time</p>
        <p>Pair</p>
        <p>Type</p>
        <p>Buy/Sell</p>
        <p>Price</p>
        <p>Amount</p>
        <p>Filled</p>
        <p>Unfilled</p>
        <p>-</p>
      </div>
      <ul>
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
        {renderOrders()}
      </ul>
    </OrdersContainer>
  );
};
export default OrdersList;
