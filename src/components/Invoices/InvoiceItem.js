import styles from "./InvoiceItem.module.scss";
import { useHistory } from "react-router";

const InvoiceItem = ({ data }) => {
	const history = useHistory();
	if (!data) return null;

	const numberFormatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	});
	const dateFormatter = new Intl.DateTimeFormat("en-GB", {
		dateStyle: "medium",
	});

	if (data.length === 0) {
		return (
			<div>
				<h1>NO INVOiCES</h1>
			</div>
		);
	}

	return (
		<ul className={`${styles.invoiceBox} wrapper`}>
			{data.map((user) => {
				const paymentDue = new Date(user.paymentDue);

				return (
					<li
						key={user.id}
						className={styles.frame}
						onClick={() => history.push(`/invoices/${user.id}`)}
					>
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
