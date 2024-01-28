import styles from "../../../common/styles/Headers.module.scss";
import { useState } from "react";
function ProductsFilters({ produkty, onFilteredProducts }) {
    const [products, setProducts] = useState([...produkty]);
    const [searchProduct, setSearchProduct] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    // const [isFood, setIsFood] = useState(false);
    const handleSearch = (e) => {
        setSearchProduct(e.target.value);
    };
    const handleSetCategory = (e) => {
        setSelectedCategory(e.target.value);
    };
    // const productsByCategory = products.filter((item) =>
    //     selectedCategory !== "default" ? item.kategoria.includes(selectedCategory) : products,
    // );

    // const filteredProducts = productsByCategory.filter((item) =>
    //     item.nazwa.includes(searchProduct),
    // );
    const handleFilter = (e) => {
        e.preventDefault();
        const byCategory = products.filter((item) =>
            selectedCategory !== "default" ? item.kategoria.includes(selectedCategory) : item,
        );
        const matchingWord = byCategory.filter((item) => item.nazwa.includes(searchProduct));
        onFilteredProducts(matchingWord);
    };
    return (
        <>
            <div className={styles.Wrapper}>Products Filters</div>;
            <form onSubmit={(e) => handleFilter(e)}>
                <input type="text" value={searchProduct} onChange={handleSearch} />
                <select name="" id="" onChange={handleSetCategory}>
                    <option value="default">----</option>
                    <option value="nabiał">nabiał</option>
                    <option value="warzywa">warzywa</option>
                    <option value="narzędzia">narzędzia</option>
                    <option value="nasiona">nasiona</option>
                    <option value="inne">inne</option>
                </select>
                <input type="checkbox" />
                <button type="submit" style={{ fontSize: "0.5em" }}>
                    Filter
                </button>
            </form>
        </>
    );
}

export default ProductsFilters;
