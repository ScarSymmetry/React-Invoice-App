import styles from "./Modal.module.scss";
import chevron from "../../assets/icon-arrow-left.svg";

const Modal = () => {
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
					<div className={`${styles.statusState} ${styles.paid}`}>
						<div className={styles.indicator}></div>
						<p className={`${styles.statusText} ${styles.paid}`}>LOL</p>
					</div>
				</div>

				<section className={styles.invoiceWrapper}>
					<div className={styles.idAndSubject}>
						<h5 className={styles.idNumber}>
							{" "}
							<span>#</span> gtx1090
						</h5>
						<p className={styles.subject}>Graphic Design</p>
					</div>

					<div className={styles.detailedAdress}>
						<p className={styles.street}>19 Union Terrace</p>
						<p className={styles.city}>London</p>
						<p className={styles.postCode}> E1 3EZ</p>
						<p className={styles.country}>United Kingdom</p>
					</div>

					<div className={styles.invoicesDetails}>
						<p className={styles.invoiceEvent}>Invoice Date</p>
						<h5 className={styles.invoiceDate}>21 aug blabla</h5>

						<p className={styles.invoiceEvent}>Payment Due</p>
						<h5 className={styles.invoiceDate}>20 sep 2021</h5>
					</div>

					<div className={styles.billingDetails}>
						<p className={styles.billTo}>Bill To</p>
						<h5 className={styles.clientName}> John Johns</h5>
						<p className={styles.billingAdress}>84 Church Way</p>
						<p className={styles.billingCity}>Bradford</p>
						<p className={styles.billingPostCode}>BD1 9PB</p>
						<p className={styles.billingCountry}>United KIngdom</p>
					</div>

					<div className={styles.emailDetails}>
						<p className={styles.sentTo}>Sent to</p>
						<h5 className={styles.clientEmail}>symphonyx@jersey.com</h5>
					</div>

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
