import styles from "../../../common/styles/Headers.module.scss";
import { useState } from "react";
function AddProducts({ products, onProducts, newCategories, onNewCategories }) {
    const [newProductName, setNewProductName] = useState("");
    const [newProductCategory, setNewProductCategory] = useState("");
    const [isFoodProduct, setIsFoodProduct] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            nazwa: newProductName,
            kategoria: newProductCategory,
            produktSpozywczy: isFoodProduct,
        };
        if (newProductCategory && !newCategories.includes(newProductCategory)) {
            onNewCategories([...newCategories, newProductCategory]);
        }
        onProducts([...products, newProduct]);
        console.log(`newc w addproduct ${newCategories}`);
    };

    return (
        <div className={styles.Wrapper}>
            Add products
            <form onSubmit={handleSubmit}>
                <label>nazwa</label>
                <input type="text" onChange={(e) => setNewProductName(e.target.value)} />
                <label>kategoria</label>
                <input type="text" onChange={(e) => setNewProductCategory(e.target.value)} />
                <label>produkt spozywczy?</label>
                <input
                    type="checkbox"
                    checked={isFoodProduct}
                    onChange={(e) => setIsFoodProduct(e.target.checked)}
                />
                <button>dodaj</button>
            </form>
        </div>
    );
}

export default AddProducts;
