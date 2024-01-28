import { useState } from "react";
import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import PropTypes from "prop-types";
function ShopingList({ shopingList, onShopingList }) {
    const [isTaken, setIsTaken] = useState([]);

    const handleRemoveProduct = (e, index) => {
        e.preventDefault();
        onShopingList(shopingList.filter((_, i) => i !== index));
    };
    const handleChooseProduct = (e, index) => {
        e.preventDefault();
        if (!isTaken.includes(index)) {
            setIsTaken([...isTaken, index]);
        } else {
            setIsTaken(isTaken.filter((i) => i !== index));
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
                            onContextMenu={(e) => handleChooseProduct(e, index)}
                            style={
                                isTaken.includes(index) ? { textDecoration: "line-through" } : {}
                            }
                        >
                            {el}
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
