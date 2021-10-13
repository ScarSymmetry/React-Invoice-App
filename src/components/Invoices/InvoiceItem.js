import styles from "./InvoiceItem.module.scss";
import data from "../../data.json";

const InvoiceItem = () => {
	const numberFormatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	});
	const dateFormatter = new Intl.DateTimeFormat("en-GB", {
		dateStyle: "medium",
	});

	return (
		<ul className={`${styles.invoiceBox} wrapper`}>
			{data.map((user) => {
				const paymentDue = new Date(user.paymentDue);

				return (
					<li key={user.id} className={styles.frame}>
						<h3 className={styles.userId}>
							<span>#</span>
							{user.id}
						</h3>
						<p className={styles.userName}>{user.clientName}</p>
						<p className={styles.payment}>
							Due {dateFormatter.format(paymentDue)}
						</p>
						<p className={styles.total}>{numberFormatter.format(user.total)}</p>
						<div className={`${styles.statusState} ${styles[user.status]}`}>
							<div className={styles.indicator}></div>
							<p className={styles.statusText}>{user.status}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default InvoiceItem;
