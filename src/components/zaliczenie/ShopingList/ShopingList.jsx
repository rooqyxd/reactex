import commonColumnsStyles from "../../../common/styles/Columns.module.scss";
import PropTypes from "prop-types";
function ShopingList({ shopingList, onShopingList }) {
    const handleRemoveProduct = (e, index) => {
        e.preventDefault();
        onShopingList(shopingList.filter((_, i) => i !== index));
    };
    return (
        <div className={commonColumnsStyles.App}>
            <header className={commonColumnsStyles.AppHeader}>
                <p>Shoping List</p>
                <ul>
                    {shopingList.map((el, index) => (
                        <li key={index} onContextMenu={(e) => handleRemoveProduct(e, index)}>
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
