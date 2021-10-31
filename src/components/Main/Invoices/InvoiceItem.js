import { useHistory } from "react-router";
import { useContext } from "react";
import { InvoicesContext } from "../../../context/invoices.context";
import styles from "./InvoiceItem.module.scss";

const InvoiceItem = () => {
	const history = useHistory();
	const data = useContext(InvoicesContext);
	console.log(data.length);

	const numberFormatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	});
	const dateFormatter = new Intl.DateTimeFormat("en-GB", {
		dateStyle: "medium",
	});

	if (!data || data.length === 0) {
		return (
			<div>
				<h1>NO INVOiCES</h1>
			</div>
		);
	}

	return (
		<section className={styles.invoiceWrapper}>
			<ul className={styles.invoiceBox}>
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
							<p className={styles.total}>
								{numberFormatter.format(user.total)}
							</p>
							<div className={`${styles.statusState} ${styles[user.status]}`}>
								<div className={styles.indicator}></div>
								<p className={styles.statusText}>{user.status}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default InvoiceItem;
