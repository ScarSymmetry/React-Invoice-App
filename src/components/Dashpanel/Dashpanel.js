import styles from "./Dashpanel.module.scss";
const Dashpanel = () => {
	return (
		<div className="wrapper">
			<button className={styles.btnInvoice}>
				<span>New</span>
			</button>
		</div>
	);
};

export default Dashpanel;
