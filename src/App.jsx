import styles from "./App.module.scss";
import AddProducts from "./components/zaliczenie/AddProducts/AddProducts";
import ProductsFilters from "./components/zaliczenie/ProductsFilters/ProductsFilters";
import ProductsList from "./components/zaliczenie/ProductsList/ProductsList";
import ShopingList from "./components/zaliczenie/ShopingList/ShopingList";
import { useState } from "react";
function App() {
    const [shopingList, setShopingList] = useState([]);
    return (
        <div className={styles.appWrapper}>
            <AddProducts />
            <ProductsFilters />
            <div className={styles.columnsWrapper}>
                <ProductsList shopingList={shopingList} onShopingList={setShopingList} />
                <ShopingList shopingList={shopingList} onShopingList={setShopingList} />
            </div>
        </div>
    );
}

export default App;
