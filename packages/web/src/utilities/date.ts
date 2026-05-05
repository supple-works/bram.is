export function formatDate(date: Date, locale: string): string {
	return date
		? date
				.toLocaleDateString(locale.replace("_", "-"), {
					month: "long",
					day: "numeric",
					weekday: "long",
				})
				.replace(".", "")
		: "";
}

export function formatLongDate(date: Date, locale: string) {
	return date.toLocaleDateString(locale.replace("_", "-"), {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}

export function formatMonthYearDate(date: Date, locale: string) {
	return date.toLocaleDateString(locale.replace("_", "-"), {
		day: undefined,
		month: "long",
		year: "numeric",
	});
}

export function formatDateToISO(date: Date) {
	return date.toISOString();
}
