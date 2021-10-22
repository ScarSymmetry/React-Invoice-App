import { useState } from "react";
import { useForm } from "react-hook-form";
import chevron from "../../assets/icon-arrow-left.svg";
import trashcan from "../../assets/icon-delete.svg";
import styles from "./Form.module.scss";

const Form = () => {
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: testObj,
	});

	const [state, setState] = useState(testObj);

	const checkShit = (data) => {
		setState((prevState) => ({ data }));
	};

	const saveAndContinue = (e) => {
		console.log(e.target.value);
	};

	console.log(state);

	return (
		<div className={styles.formContainer}>
			<button className={styles.backButton}>
				{" "}
				<span>
					<img src={chevron} alt="back" />
				</span>{" "}
				Go back
			</button>

			<div className={styles.editId}>
				<h3>
					Edit<span>#</span>XM8123
				</h3>
			</div>

			<form className={styles.form} onSubmit={handleSubmit(checkShit)}>
				<section className={styles.billFrom}>
					<h5 className={styles.billFrom__heading}>Bill From</h5>
					<label className={styles.streetFrom} htmlFor="street">
						Street Address
						<input type="text" />
					</label>
					<label className={styles.cityFrom} htmlFor="city">
						City
						<input type="text" />
					</label>
					<label className={styles.postCodeFrom} htmlFor="postcode">
						Post Code
						<input type="text" />
					</label>
					<label className={styles.countryFrom} htmlFor="country">
						Country
						<input type="text" />
					</label>
				</section>

				<section className={styles.billTo}>
					<h5 className={styles.billTo__heading}>Bill To</h5>
					<label className={styles.clientTo} htmlFor="client">
						Client`s Name
						<input type="text" />
					</label>
					<label className={styles.emailTo} htmlFor="email">
						Client`s Email
						<input type="text" />
					</label>
					<label className={styles.streetTo} htmlFor="street">
						Street Address
						<input type="text" />
					</label>
					<label className={styles.cityTo} htmlFor="city">
						City
						<input type="text" />
					</label>
					<label className={styles.postCodeTo} htmlFor="city">
						Post Code
						<input type="text" />
					</label>
					<label className={styles.countryTo} htmlFor="city">
						Country
						<input type="text" />
					</label>
				</section>

				<section className={styles.invoiceDates}>
					<label htmlFor="">
						Invoice Date
						<input className={styles.invoiceStart} type="date" />
					</label>
					<label className={styles.paymentDropdown} htmlFor="dropdown">
						Payment Terms
						<select name="dropdown" id="dropdown">
							<option value="1">Net 1 day</option>
							<option value="7">Net 7 days</option>
							<option value="14">Net 14 days</option>
							<option value="30" selected>
								Net 30 days
							</option>
						</select>
					</label>

					<label className={styles.projectDescription} htmlFor="">
						Project / Description
						<input placeholder="e.g Design and prototype" type="text" />
					</label>
				</section>

				<section className={styles.itemsContainer}>
					<h5 className={styles.itemsContainer__title}>Item List</h5>
					<div className={styles.itemList}>
						<label className={styles.itemName} htmlFor="itemName">
							Item Name
							<input type="text" />
						</label>
						<label className={styles.itemQuantity} htmlFor="itemQuantity">
							Qty.
							<input type="text" />
						</label>
						<label className={styles.itemPrice} htmlFor="itemPrice">
							Price
							<input type="text" />
						</label>
						<div className={styles.totalCounter}>
							<p>Total</p>
							<h5>150</h5>
						</div>
						<button className={styles.deleteItem}>
							<img src={trashcan} alt="delete" />
						</button>
					</div>
				</section>

				<button
					className={`${styles.buttonComponent} ${styles.addNewItemButton}`}
				>
					+ Add new item
				</button>
			</form>
		</div>
	);
};

export default Form;

const testObj = {
	id: generateRandomId(),
	createdAt: "",
	paymentDue: "",
	description: "",
	paymentTerms: "",
	clientName: "",
	clientEmail: "",
	status: "draft",
	senderAddress: {
		street: "",
		city: "",
		postCode: "",
		country: "",
	},
	clientAddress: {
		street: "",
		city: "",
		postCode: "",
		country: "",
	},
	items: [
		{
			name: "",
			quantity: "",
			price: "",
			total: "",
		},
	],
	total: "",
};

function generateRandomId() {
	const digits = Math.floor(Math.random() * 8999 + 1000);
	let characters = "";
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	while (characters.length < 2) {
		characters += alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	return `${characters}${digits}`;
}
