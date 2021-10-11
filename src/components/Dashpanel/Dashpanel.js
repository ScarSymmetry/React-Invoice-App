import styles from "./Dashpanel.module.scss";
import arrow from "../../assets/icon-arrow-down.svg";
import { useState } from "react";
const Dashpanel = () => {
	const [filterClicked, setFilterClicked] = useState(false);

	return (
		<div className="wrapper block-margin">
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
				<span>New</span>
			</button>
		</div>
	);
};

export default Dashpanel;
