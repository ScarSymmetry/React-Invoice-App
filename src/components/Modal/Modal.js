import styles from "./Modal.module.scss";
import chevron from "../../assets/icon-arrow-left.svg";
import data from "../../data.json";

const Modal = () => {
	const json = data[2];

	return (
		<div className={styles.backdrop}>
			<div className={styles.modalBody}>
				<button className={styles.backButton}>
					<span>
						{" "}
						<img src={chevron} alt="back" />{" "}
					</span>{" "}
					Go back
				</button>

				<div className={styles.statusPanel}>
					<h5 className={styles.statusHeading}>Status</h5>
					<div className={`${styles.statusState} ${styles[json.status]}`}>
						<div className={styles.indicator}></div>
						<p className={styles.statusText}>{json.status}</p>
					</div>
				</div>

				<section className={styles.invoiceWrapper}>
					<div className={styles.idAndSubject}>
						<h5 className={styles.idNumber}>
							{" "}
							<span>#</span> {json.id}
						</h5>
						<p className={styles.subject}>{json.description}</p>
					</div>

					<div className={styles.detailedAdress}>
						<p className={styles.street}>{json.senderAddress.street}</p>
						<p className={styles.city}>{json.senderAddress.city}</p>
						<p className={styles.postCode}>{json.senderAddress.postCode}</p>
						<p className={styles.country}>{json.senderAddress.country}</p>
					</div>

					<div className={styles.invoicesDetails}>
						<p className={styles.invoiceEvent}>Invoice Date</p>
						<h5 className={styles.invoiceDate}>{json.createdAt}</h5>

						<p className={styles.invoiceEvent}>Payment Due</p>
						<h5 className={styles.invoiceDate}>{json.paymentDue}</h5>
					</div>

					<div className={styles.billingDetails}>
						<p className={styles.billTo}>Bill To</p>
						<h5 className={styles.clientName}>{json.clientName}</h5>
						<p className={styles.billingAdress}>{json.clientAddress.street}</p>
						<p className={styles.billingCity}>{json.clientAddress.city}</p>
						<p className={styles.billingPostCode}>
							{json.clientAddress.postCode}
						</p>
						<p className={styles.billingCountry}>
							{json.clientAddress.country}
						</p>
					</div>

					<div className={styles.emailDetails}>
						<p className={styles.sentTo}>Sent to</p>
						<h5 className={styles.clientEmail}>{json.clientEmail}</h5>
					</div>

					<section className={styles.expandoCheckout}>
						{json.items.map((item, index) => {
							return (
								<div key={index} className={styles.expandoCheckoutItem}>
									<h5 className={styles.serviceDescription}>{item.name}</h5>
									<h6 className={styles.pricePerItem}>
										<span>{item.quantity}</span> x {item.price}
									</h6>
									<h5 className={styles.totalItemsPrice}> {item.total}</h5>
								</div>
							);
						})}
						<div className={styles.expandoCheckoutTotals}>
							<p className={styles.expandoCheckoutAmount}>Amount Due</p>
							<h2 className={styles.totalPrice}>{json.total}</h2>
						</div>
					</section>
				</section>

				{/* //buttons at the bottom */}

				<div className={styles.buttonWrapper}>
					<button className={`${styles.buttonComponent} ${styles.editButton}`}>
						Edit
					</button>
					<button
						className={`${styles.buttonComponent} ${styles.deleteButton}`}
					>
						Delete
					</button>
					<button
						className={`${styles.buttonComponent} ${styles.markAsPaidButton}`}
					>
						Mark as Paid
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
