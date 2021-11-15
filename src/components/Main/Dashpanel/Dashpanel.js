import { useState } from "react";
import styles from "./Dashpanel.module.scss";
import arrow from "../../../assets/icon-arrow-down.svg";
import Dropdown from "../Dropdown/Dropdown";

const Dashpanel = ({ setInvoiceFilterStatus }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);

	return (
		<nav className={styles.navWrapper}>
			<div className={styles.invoiceCount}>
				<h2>Invoices</h2>
				<p>7 invoices</p>
			</div>
			<button
				className={styles.filterBtn}
				onClick={(e) => {
					setDropDownOpen(!dropDownOpen);
				}}
			>
				<span>
					Filter{" "}
					<img
						className={dropDownOpen ? styles.active : undefined}
						src={arrow}
						alt="filter"
					/>
				</span>
			</button>
			<button onClick={() => console.log("YO")} className={styles.btnInvoice}>
				<span className={styles.mobileInvoice}>New</span>
			</button>

			<Dropdown
				open={dropDownOpen}
				setFilterInvoice={setInvoiceFilterStatus}
				onClickOutside={setDropDownOpen}
			/>
		</nav>
	);
};

export default Dashpanel;
