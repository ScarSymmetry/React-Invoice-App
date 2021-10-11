import { useState } from "react";
import styles from "./Dropdown.module.scss";

const Dropdown = () => {
	const [options, setOptions] = useState([
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
		setOptions(
			options.map((option) => {
				return index === option.id
					? { ...option, checked: !option.checked }
					: { ...option, checked: false };
			})
		);
	};

	return (
		<div className={styles.popUpInputs}>
			<div className={styles.checkboxWrapper}>
				{options.map((box, index) => (
					<div className={styles.checkboxContainer} key={index}>
						<input
							type="checkbox"
							checked={box.checked}
							onChange={() => {
								handleChange(index);
							}}
						/>
						<label>{box.value}</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
