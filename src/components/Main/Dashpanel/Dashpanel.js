import styles from "./Dashpanel.module.scss";
import arrow from "../../../assets/icon-arrow-down.svg";
import Dropdown from "../Dropdown/Dropdown";

const Dashpanel = ({
	filterClicked,
	setFilterClicked,
	setInvoiceFilterStatus,
}) => {
	return (
		<nav className={styles.navWrapper}>
			<div className={styles.invoiceCount}>
				<h2>Invoices</h2>
				<p>7 invoices</p>
			</div>
			<button
				className={styles.filterBtn}
				onClick={() => setFilterClicked(!filterClicked)}
			>
				<span>
					Filter{" "}
					<img
						className={filterClicked ? styles.active : undefined}
						src={arrow}
						alt="filter"
					/>
				</span>
			</button>
			<button className={styles.btnInvoice}>
				<span className={styles.mobileInvoice}>New</span>
			</button>

			<Dropdown
				open={filterClicked}
				setFilterInvoice={setInvoiceFilterStatus}
			/>
		</nav>
	);
};

export default Dashpanel;
