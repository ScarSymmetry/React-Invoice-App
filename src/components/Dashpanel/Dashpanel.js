import styles from "./Dashpanel.module.scss";
const Dashpanel = () => {
	return (
		<div className="wrapper block-margin">
			<div className={styles.invoiceCount}>
				<h2>Invoices</h2>
				<p>7 invoices</p>
			</div>
			<button className={styles.btnInvoice}>
				<span>New</span>
			</button>
		</div>
	);
};

export default Dashpanel;
