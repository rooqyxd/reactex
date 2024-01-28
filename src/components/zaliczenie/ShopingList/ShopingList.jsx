import { useState } from "react";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import PropTypes from "prop-types";
function ShopingList({ shopingList, onShopingList, onShopingListWithId }) {
    const [markedProducts, setMarkedProducts] = useState([]);
    const handleRemoveProduct = (e, index) => {
        e.preventDefault();
        onShopingList(shopingList.filter((_, i) => i !== index));
    };
    const handleChangeProduct = (e, selectedProduct) => {
        e.preventDefault();
        if (markedProducts.includes(selectedProduct.id)) {
            setMarkedProducts(markedProducts.filter((id) => id !== selectedProduct.id));
        } else {
            setMarkedProducts([...markedProducts, selectedProduct.id]);
        }
    };
    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Shoping List</p>
                <ul>
                    {shopingList.map((el, index) => (
                        <li
                            key={index}
                            onClick={(e) => handleRemoveProduct(e, index)}
                            onContextMenu={(e) => handleChangeProduct(e, el)}
                            style={
                                markedProducts.includes(el.id)
                                    ? { textDecoration: "line-through" }
                                    : {}
                            }
                        >
                            {el.nazwa}
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}
ShopingList.propTypes = {
    onShopingList: PropTypes.func,
    shopingList: PropTypes.array,
};
export default ShopingList;
