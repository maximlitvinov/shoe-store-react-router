import React from "react";

import { Link } from "react-router-dom";

import styles from "../App.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <button>
        <Link to="/" className={styles.link}>
          Shop Store
        </Link>
      </button>
      <div>
        <button>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
