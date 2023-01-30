import React from "react";

import styles from "../App.module.css";

import { ShoesDetails } from "../static/shoedata";
import IconShoppingBasketLine from "./IconShoppingBasketLine";
import Item from "./Item";

const ProductItems = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Products of Shop</h1>
      <div className={styles.wrapper__shoes}>
        {ShoesDetails.map((shoe, idx) => (
          <div className={styles.shoe__item}>
            <Item shoe={shoe} idx={idx} />
            <div className={styles.button__block}>
              <button className={styles.button__buy}>
                <IconShoppingBasketLine />
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItems;
