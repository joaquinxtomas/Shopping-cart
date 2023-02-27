import { products } from "./mocks/products"
import { Cart } from "./components/Cart"
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { useFilters } from "./hooks/useFilters"
import { CartProvider } from "./contexts/cart"
import Footer from "./components/Footer"

function App() {

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)


  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
      <Footer/>
    </CartProvider>
  )
}

export default App
