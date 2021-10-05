import logo from "../../assets/logo.svg";
import toggler from "../../assets/icon-sun.svg";
import avatar from "../../assets/eastwood.jpg";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.logoBox}>
				<img src={logo} alt="logo" className={styles.logo} />
			</div>
			<div className={styles.themeToggler}>
				<img src={toggler} alt="toggle theme" />
			</div>
			<div className={styles.avatar}>
				<img src={avatar} alt="user avatar" className="picture" />
			</div>
		</header>
	);
};

export default Header;
