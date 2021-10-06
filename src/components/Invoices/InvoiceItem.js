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

	const userCard = data.map((user) => {
		const paymentDue = new Date(user.paymentDue);

		return (
			<li key={user.id} className={styles.frame}>
				<h3 className={styles.userId}>
					<span>#</span>
					{user.id}
				</h3>
				<p className={styles.userName}>{user.clientName}</p>
				<p className={styles.payment}>Due {dateFormatter.format(paymentDue)}</p>
				<p className={styles.total}>{numberFormatter.format(user.total)}</p>
				<div className={styles.statusState}>
					<div className={styles.indicator}></div>
					<p className={styles.statusText}>{user.status}</p>
				</div>
			</li>
		);
	});

	return (
		<div>
			<ul className={`${styles.invoiceBox} wrapper--noflex`}>{userCard}</ul>
		</div>
	);
};

export default InvoiceItem;
