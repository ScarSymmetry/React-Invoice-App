import styles from "./Modal.module.scss";
import chevron from "../../assets/icon-arrow-left.svg";

const Modal = () => {
	return (
		<div className={styles.backdrop}>
			<div className={`${styles.modalBody} wrapper`}>
				<button className={styles.backButton}>
					<span>
						{" "}
						<img src={chevron} alt="back" />{" "}
					</span>{" "}
					Go back
				</button>

				<div className={styles.statusPanel}>
					<h5 className={styles.statusHeading}>Status</h5>
					<div className={`${styles.statusState} ${styles.paid}`}>
						<div className={styles.indicator}></div>
						<p className={`${styles.statusText} ${styles.paid}`}>LOL</p>
					</div>
				</div>

				<section className={styles.invoiceDetails}>
					<h5 className={styles.idNumber}>#gtx1090</h5>
					<p className={styles.subjest}>Subject</p>
					<p className={styles.adress}>cuntstreet123192831</p>

					<div className={styles.invoiceDate}>
						<p className={styles.invoiceDateHeading}>Invoice Date</p>
						<h5 className={styles.invoiceDateInfo}>21 aug blabla</h5>
					</div>

					<div className={styles.paymentDue}>
						<p className={styles.paymentDueHeading}>Payment Due</p>
						<h5 className={styles.paymentDueDate}>20 sep 2021</h5>
					</div>

					<div className={styles.billingDetails}>
						<p className={styles.billingHeading}>Bill To</p>
						<h5 className={styles.billingName}> John Johns</h5>
						<p className={styles.billingAdress}>
							84 Church Way Bradford BD1 9PB United Kingdom
						</p>
					</div>

					<div className={styles.sentTo}>
						<p className={styles.sentToHeading}>Sent to</p>
						<h5 className={styles.sentToEmail}>symphonyx@jersey.com</h5>
					</div>
				</section>

				<section className={styles.expandoCheckout}>
					<div className={styles.expandoCheckoutItem}>
						<h5 className={styles.serviceDescription}>Banner Design</h5>
						<h6 className={styles.pricePerItem}>1 x 160.00</h6>
						<h5 className={styles.totalItemsPrice}> 160</h5>
					</div>
					<div className={styles.expandoCheckoutTotals}>
						<p className={styles.expandoCheckoutAmount}>Amount Due</p>
						<h2 className={styles.totalPrice}>$760</h2>
					</div>
				</section>

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

				<div className={styles.footer}></div>
			</div>
		</div>
	);
};

export default Modal;
