import type { CustomBlockProps } from ".";
import { customBlockQuery } from ".";

export interface EducationProps {
	title: string;
	institution: string;
	dateStart: string;
	dateEnd?: string;
	city?: string;
	country?: string;
	content?: CustomBlockProps["value"];
}

export function educationQuery({
	name = "education",
}: {
	name?: string;
}): string {
	return `${name}{
		title,
		institution,
		dateStart,
		dateEnd,
		city,
		country,
		${customBlockQuery({ name: "content" })}
	}`;
}
