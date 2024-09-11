import  { useState } from 'react';
import OrderList from './OrderList';
import OrderDetails from './OrderDetails'

export default function TableComponent() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setViewDetail(true);
  };

  const handleBackClick = () => {
    setViewDetail(false);
    setSelectedOrder(null);
  };

  return (
    <div>
      {viewDetail ? (
        <OrderDetails order={selectedOrder} onBackClick={handleBackClick} />
      ) : (
        <OrderList onViewClick={handleViewClick} />
      )}
    </div>
  );
}
