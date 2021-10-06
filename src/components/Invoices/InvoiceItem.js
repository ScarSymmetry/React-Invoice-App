import styles from "./InvoiceItem.module.scss";
import data from "../../data.json";

const InvoiceItem = () => {
	const options = { day: "numeric", month: "short", year: "numeric" };

	const userCard = data.map((user) => {
		return (
			<li key={user.id} className={styles.frame}>
				<h3 className={styles.userId}>
					<span>#</span>
					{user.id}
				</h3>
				<p className={styles.userName}>{user.clientName}</p>
				<p className={styles.payment}>
					Due {new Date(user.paymentDue).toLocaleDateString("en-GB", options)}
				</p>
				<p className={styles.total}>
					{" "}
					<span>&pound;</span> {user.total}
				</p>
			</li>
		);
	});

	return (
		<div>
			<ul className="wrapper--noflex">{userCard}</ul>
		</div>
	);
};

export default InvoiceItem;
