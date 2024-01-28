import styles from "../../../common/styles/Headers.module.scss";
import { useState, useEffect } from "react";
function ProductsFilters({ products, newCategories, onFilteredProducts }) {
    const [searchProduct, setSearchProduct] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isFood, setIsFood] = useState(false);

    // const applyFilters = (newSearchProduct, newSelectedCategory, newIsFood) => {
    //     let filteredProducts = products;

    //     if (newSelectedCategory !== "default") {
    //         filteredProducts = filteredProducts.filter((item) =>
    //             item.kategoria.includes(newSelectedCategory),
    //         );
    //     }
    //     if (newSearchProduct) {
    //         filteredProducts = filteredProducts.filter((item) =>
    //             item.nazwa.toLowerCase().includes(newSearchProduct.toLowerCase()),
    //         );
    //     }
    //     if (newIsFood) {
    //         filteredProducts = filteredProducts.filter((item) => item.produktSpozywczy === true);
    //     }
    //     onFilteredProducts(filteredProducts);
    // };

    const handleSearch = (e) => {
        const newSearchProduct = e.target.value;
        setSearchProduct(newSearchProduct);
        // applyFilters(newSearchProduct, selectedCategory, isFood);
    };

    const handleSetCategory = (e) => {
        const newSelectedCategory = e.target.value;
        setSelectedCategory(newSelectedCategory);
        // applyFilters(searchProduct, newSelectedCategory, isFood);
    };

    const handleSearchFoodOnly = (e) => {
        const newIsFood = e.target.checked;
        setIsFood(newIsFood);
        // applyFilters(searchProduct, selectedCategory, newIsFood);
    };

    useEffect(() => {
        let filteredProducts = products;

        if (selectedCategory !== "default") {
            filteredProducts = filteredProducts.filter((item) =>
                item.kategoria.includes(selectedCategory),
            );
        }
        if (searchProduct) {
            filteredProducts = filteredProducts.filter((item) =>
                item.nazwa.toLowerCase().includes(searchProduct.toLowerCase()),
            );
        }
        if (isFood) {
            filteredProducts = filteredProducts.filter((item) => item.produktSpozywczy === true);
        }
        onFilteredProducts(filteredProducts);
    }, [searchProduct, selectedCategory, isFood, products, onFilteredProducts]);
    return (
        <>
            <div className={styles.Wrapper}>
                Products Filters
                <form>
                    <input type="text" value={searchProduct} onChange={handleSearch} />
                    <select name="" id="" onChange={handleSetCategory}>
                        <option value="default">----</option>
                        {newCategories.map((el, index) => (
                            <option key={index} value={el}>
                                {el}
                            </option>
                        ))}
                        {/* <option value="nabiał">nabiał</option>
                        <option value="warzywa">warzywa</option>
                        <option value="narzędzia">narzędzia</option>
                        <option value="nasiona">nasiona</option>
                        <option value="inne">inne</option> */}
                    </select>
                    <label>
                        <input type="checkbox" checked={isFood} onChange={handleSearchFoodOnly} />
                    </label>
                    <button type="submit">Filter</button>
                </form>
            </div>
            ;
        </>
    );
}

export default ProductsFilters;
