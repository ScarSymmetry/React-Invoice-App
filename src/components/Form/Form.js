import { useState } from "react";
import { useForm } from "react-hook-form";
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
		<div className={styles.form}>
			<form onSubmit={handleSubmit(checkShit)}>
				<label htmlFor="id">#</label>
				<input {...register("id")} id="id" />

				<label htmlFor="createdAt">Invoice Date</label>
				<input {...register("createdAt")} id="createdAt" />

				<label htmlFor="paymentDue">Payment terms</label>
				<input {...register("paymentDue")} id="paymentDue" />

				<label htmlFor="clientName">Client`s Name</label>
				<input {...register("clientName")} id="clientName" />

				<button
					onClick={() =>
						setValue("status", "pending", {
							shouldValidate: true,
						})
					}
				>
					Set Last Name
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
