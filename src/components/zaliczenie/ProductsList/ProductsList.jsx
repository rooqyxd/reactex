import commonColumnsStyles from "../../../common/styles/Columns.module.scss";

import PropTypes from "prop-types";

function ProductsList({ filteredProducts, onShopingListWithId }) {
    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Products list</p>

                <ul>
                    {filteredProducts.map((el, index) => (
                        <li key={index} onClick={() => onShopingListWithId(el)}>
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
