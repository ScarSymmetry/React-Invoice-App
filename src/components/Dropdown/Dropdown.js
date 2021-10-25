import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ Open, filterInvoice }) => {
	const [dropDownValues, setDropDownValues] = useState([
		{
			id: 0,
			value: "draft",
			checked: false,
		},
		{
			id: 1,
			value: "pending",
			checked: false,
		},
		{
			id: 2,
			value: "paid",
			checked: false,
		},
	]);

	const handleChange = (index) => {
		setDropDownValues(
			dropDownValues.map((option) => {
				if (index === option.id) {
					filterInvoice(option.checked ? "all" : option.value);

					return { ...option, checked: !option.checked };
				}

				return { ...option, checked: false };
			})
		);
	};

	if (!Open) return null;

	return (
		<div className={styles.popUpInputs}>
			<div className={styles.checkboxWrapper}>
				{dropDownValues.map((box, index) => (
					<div className={styles.checkboxContainer} key={index}>
						<input
							type="checkbox"
							name={box.value}
							id={box.id}
							checked={box.checked}
							onChange={() => {
								handleChange(index);
							}}
						/>
						<label htmlFor={box.id}>{box.value}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
