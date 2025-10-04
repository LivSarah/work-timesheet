export type WorkdayEntry = {
	date: Date,
	title: string,
	note: string,
	millisecondsWorked: number,
};

export const MOCK_WORKDAY_ENTRIES: WorkdayEntry[] = [
	{
		date: new Date("December 17, 2024 03:24:00"),
		title: "My first work entry",
		note: "",
		millisecondsWorked: 0,
	},
		{
		date: new Date("January 21, 2025 12:42:00"),
		title: "My second work entry",
		note: "Here is a note",
		millisecondsWorked: 0,
	},
	{
		date: new Date("April 26, 2025 13:37:00"),
		title: "My third work entry",
		note: "",
		millisecondsWorked: 0,
	},
]