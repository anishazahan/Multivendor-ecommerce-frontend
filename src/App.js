import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// const dispatch = useDispatch()
// useEffect(() => {
//   dispatch(get_category())
// }, [])

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shops' element={<Shops />} />
        <Route path='/products?' element={<CategoryShops />} />
        <Route path='/products/search?' element={<SearchProducts />} />
        <Route path='/card' element={<Card />} />
        <Route path='/order/confirm?' element={<ConfirmOrder />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/product/details/:slug' element={<Details />} /> */}

        {/* <Route path='/dashboard' element={<ProtectUser />}>
          <Route path='' element={<Dashboard />}>
            <Route path='' element={<Index />} />
            <Route path='my-orders' element={<Orders />} />
            <Route path='my-wishlist' element={<Wishlist />} />
            <Route path='order/details/:orderId' element={<Order />} />
            <Route path='chage-password' element={<ChangePassword />} />
            <Route path='chat' element={<Chat />} />
            <Route path='chat/:sellerId' element={<Chat />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
