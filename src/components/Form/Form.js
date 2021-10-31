import { useState } from "react";
import { useForm } from "react-hook-form";
import chevron from "../../assets/icon-arrow-left.svg";
import trashcan from "../../assets/icon-delete.svg";
import Modal from "../Modal/Modal";
import styles from "./Form.module.scss";

const Form = ({ open }) => {
	const { register, handleSubmit, setValue } = useForm({
		defaultValues: testObj,
	});

	const [state, setState] = useState(testObj);

	const checkShit = (data) => {
		setState((prevState) => ({ data }));
	};

	return (
		<Modal isOpen={open}>
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
						{/* Edit<span>#</span> */}
						New Invoice
					</h3>
				</div>

				<form className={styles.form} id="registerForm">
					<fieldset className={styles.billFrom}>
						<h5 className={styles.billFrom__heading}>Bill From</h5>
						<label className={styles.streetFrom}>
							Street Address
							<input type="text" />
						</label>
						<label className={styles.cityFrom}>
							City
							<input type="text" />
						</label>
						<label className={styles.postCodeFrom}>
							Post Code
							<input type="text" />
						</label>
						<label className={styles.countryFrom}>
							Country
							<input type="text" />
						</label>
					</fieldset>

					<fieldset className={styles.billTo}>
						<h5 className={styles.billTo__heading}>Bill To</h5>
						<label className={styles.clientTo}>
							Client`s Name
							<input type="text" />
						</label>
						<label className={styles.emailTo}>
							Client`s Email
							<input type="text" />
						</label>
						<label className={styles.streetTo}>
							Street Address
							<input type="text" />
						</label>
						<label className={styles.cityTo}>
							City
							<input type="text" />
						</label>
						<label className={styles.postCodeTo}>
							Post Code
							<input type="text" />
						</label>
						<label className={styles.countryTo}>
							Country
							<input type="text" />
						</label>
					</fieldset>

					<fieldset className={styles.invoiceDates}>
						<label className={styles.invoiceStart}>
							Invoice Date
							<input type="date" />
						</label>
						<label className={styles.paymentDropdown}>
							Payment Terms
							<select name="dropdown">
								<option value="30">Net 30 day</option>
								<option value="14">Net 14 days</option>
								<option value="7">Net 7 days</option>
								<option value="1">Net 1 day</option>
							</select>
						</label>

						<label className={styles.projectDescription}>
							Project / Description
							<input placeholder="e.g Design and prototype" type="text" />
						</label>
					</fieldset>

					<fieldset className={styles.itemsContainer}>
						<h5 className={styles.itemsContainer__title}>Item List</h5>
						<div className={styles.itemList}>
							<label className={styles.itemName}>
								Item Name
								<input type="text" />
							</label>
							<label className={styles.itemQuantity}>
								Qty.
								<input type="text" />
							</label>
							<label className={styles.itemPrice}>
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
					</fieldset>

					<button
						className={`${styles.buttonComponent} ${styles.addNewItemButton}`}
					>
						+ Add new item
					</button>
				</form>

				<fieldset className={styles.formButtonControls}>
					<div className={styles.formButtonControls__panel}>
						<button
							className={`${styles.buttonComponent} ${styles.cancelAndDiscardButton}`}
						>
							Cancel
						</button>
						<button
							className={`${styles.buttonComponent} ${styles.cancelAndDiscardButton}`}
						>
							Save as Draft
						</button>
						<button
							type="submit"
							form="registerForm"
							className={`${styles.buttonComponent} ${styles.saveChangesButton}`}
						>
							Save Changes
						</button>
					</div>
				</fieldset>
			</div>
		</Modal>
	);
};

export default Form;

const testObj = {
	id: "",
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

	return `${characters.toUpperCase()}${digits}`;
}
