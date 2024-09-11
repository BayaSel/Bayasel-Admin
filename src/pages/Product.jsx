import  { useState } from 'react';
import ProductTable from './ProductTable';
import ProductDetails from './ProductDetails'

export default function TableComponent() {
  const [viewDetail, setViewDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setViewDetail(true);
  };

  const handleBackClick = () => {
    setViewDetail(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {viewDetail ? (
        <ProductDetails product={selectedProduct} onBackClick={handleBackClick} />
      ) : (
        <ProductTable onViewClick={handleViewClick} />
      )}
    </div>
  );
}
