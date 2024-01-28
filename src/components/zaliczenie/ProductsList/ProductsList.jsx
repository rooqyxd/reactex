import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

import PropTypes from "prop-types";

function ProductsList({ onShopingList, shopingList, filteredProducts }) {
    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Products list</p>

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
