import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import { useState } from "react";
import produkty from "./common/consts/produkty";
function App() {
    const [shopingList, setShopingList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([...produkty]);

    return (
        <div className={styles.appWrapper}>
            <AddProducts />
            <ProductsFilters produkty={produkty} onFilteredProducts={setFilteredProducts} />
            <div className={styles.columnsWrapper}>
                <ProductsList
                    shopingList={shopingList}
                    filteredProducts={filteredProducts}
                    onShopingList={setShopingList}
                />
                <ShopingList shopingList={shopingList} onShopingList={setShopingList} />
            </div>
        </div>
    );
}

export default App;
