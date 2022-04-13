const OrdersList = ({ ordersArray }: any) => {
  const renderOrders = () => {
    return ordersArray.map((elem: any) => (
      <li
        key={elem.id}
        data-key={elem.id}
        onClick={(e: any) => console.log(e.target.dataset.key)}
      >
        {elem.symbol}
      </li>
    ));
  };

  return <ul>{renderOrders()}</ul>;
};
export default OrdersList;
