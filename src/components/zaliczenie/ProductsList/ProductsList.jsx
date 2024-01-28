import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import produkty from "../../../common/consts/produkty.js";
function ProductsList({ onShopingList, shopingList }) {
    const [products, setProducts] = useState([...produkty]);
    const [searchProduct, setSearchProduct] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredProducts, setFilteredProdcuts] = useState([...produkty]);
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
        const category = products.filter((item) =>
            selectedCategory !== "default" ? item.kategoria.includes(selectedCategory) : item,
        );
        const matchingWord = category.filter((item) => item.nazwa.includes(searchProduct));
        setFilteredProdcuts(matchingWord);
    };

    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Products list</p>
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
                    <button type="submit">Filter</button>
                </form>
                <ul>
                    {filteredProducts.map((el) => (
                        <li
                            key={el.nazwa}
                            onClick={() => onShopingList([...shopingList, el.nazwa])}
                        >
                            {el.nazwa}
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}
ProductsList.propTypes = {
    onShopingList: PropTypes.func,
    shopingList: PropTypes.array,
};

export default ProductsList;
