import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import CategoryShops from "./pages/CategoryShops";
import SearchProducts from "./pages/SearchProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Card from "./pages/Card";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import ProtectUser from "./utils/ProtectUser";
import Dashboard from "./pages/Dashbroad";
import Index from "./components/dashbroad/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/card" element={<Card />} />
        {/* <Route path='/product/details/:slug' element={<Details />} />  */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/products?" element={<CategoryShops />} />
        <Route path="/products/search?" element={<SearchProducts />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />

        {/* <Route path='/order/confirm?' element={<ConfirmOrder />} />
        
        <Route path='/product/details/:slug' element={<Details />} /> */}

        <Route path="/dashboard" element={<ProtectUser />}>
          <Route path="" element={<Dashboard />}>
            <Route path="" element={<Index />} />
            <Route path="my-orders" element={<Order />} />
            {/* <Route path="my-wishlist" element={<Wishlist />} />
            <Route path="order/details/:orderId" element={<Order />} />
            <Route path="chage-password" element={<ChangePassword />} />
            <Route path="chat" element={<Chat />} />
            <Route path="chat/:sellerId" element={<Chat />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
