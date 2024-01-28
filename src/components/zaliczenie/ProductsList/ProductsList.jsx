import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import produkty from "../../../common/consts/produkty.js";
function ProductsList({ onShopingList, shopingList }) {
    const [products, setProducts] = useState([...produkty]);

    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Products list</p>
                <ul>
                    {products.map((el) => (
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
