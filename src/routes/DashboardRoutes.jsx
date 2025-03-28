import React from 'react'
import { Route } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'
import Products from '../pages/Products'
import ProductsList from '../pages/ProductsList'
import Reviews from '../pages/Reviews'

const DashboardRoutes = () => {
  return (

        <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={ <Orders />} />
        <Route path="/add-products" element={<Products />} />
        <Route path="/products-listed" element={<ProductsList />} />
        <Route path="/reviews" element={<Reviews />} />
        </Route>

  )
}

export default DashboardRoutes