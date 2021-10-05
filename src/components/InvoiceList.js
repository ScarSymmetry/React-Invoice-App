import data from "../data.json";

const InvoiceList = () => {
	const invoice = data.map((person) => {
		return (
			<div
				key={person.id}
				style={{
					color: "white",
					padding: "20px",
					border: "1px solid white",
					maxWidth: "200px",
					margin: "10px",
				}}
			>
				<span>#{person.id}</span>
				<p>{person.clientName}</p>
			</div>
		);
	});

	return <ul>{invoice}</ul>;
};

export default InvoiceList;
