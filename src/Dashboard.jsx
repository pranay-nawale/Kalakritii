import React from 'react'
import SellerForm from "./Components/SellerForm";
import AdminPanel from "./Components/AdminPanel";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";

const Dashboard = () => {
  return (
    <div>
      <SellerForm />
      <AdminPanel />
      <ProductList />
      <Cart />
    </div>
  )
}

export default Dashboard;