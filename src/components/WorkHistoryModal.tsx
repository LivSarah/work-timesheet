import type { WorkdayEntry } from "../types/time.types";

type Props = {
	savedEntries: WorkdayEntry[];
	onClose: () => void;
}

export const WorkHistoryModal = ({savedEntries, onClose}: Props) => {
	
	return (
	<div style={{
		position: "absolute", 
		top: 0, 
		width: "100vw", 
		height: "100vh", 
		backgroundColor: "rgba(10, 10, 10, 0.6", 
		display: "flex", 
		justifyContent: "center", 
		alignItems: "center"
	}}>
		<div style={{
			height: "70%", 
			width: "50%", 
			backgroundColor: "#27262a", 
			borderRadius: "6px", display: "grid", 
			gridTemplateRows: "auto 1fr"
		}}>
			<div style={{
				display: "flex", 
				justifyContent: "space-between", 
				alignItems: "center", 
				padding: "4px 24px"
			}}>
				<h3>Arbeidshistorikk</h3>

				<button onClick={onClose}>X</button>
			</div>

			<div style={{display: "flex", flexDirection: "column", rowGap: "16px", padding: "24px"}}>
				{savedEntries.map((entry) => 
					<div 
						key={entry.date.getMilliseconds()} 
						style={{display: "flex", flexDirection: "column", rowGap: "4px", backgroundColor: "#3d3c42", padding: "16px", borderRadius: "6px" }}
					>
						<span style={{fontStyle: "italic", display: "flex", justifyContent: "space-between"}}>
							{entry.date.toLocaleDateString()}

							<button style={{padding: "4px", backgroundColor: "unset"}}>
								<i role="button" className="bi-trash" style={{color: "#a82c2c"}} />
							</button>
						</span>

						<span style={{fontWeight: "bold"}}>{entry.title ?? "[No title]"}</span>

						<span>{entry.note.length ? entry.note : "–"}</span>
					</div>
				)}
			</div>
		</div>
	</div>
	)
}