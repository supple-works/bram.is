import type { CustomBlockProps, ImageProps } from ".";
import { customBlockQuery } from ".";

export interface ExperienceProps {
	title: string;
	employmentType: string;
	company: string;
	url?: string;
	image?: ImageProps;
	dateStart: string;
	dateEnd?: string;
	content?: CustomBlockProps["value"];
}

export function experienceQuery({
	name = "experience",
}: {
	name?: string;
}): string {
	return `${name}{
		title,
		"employmentType": employmentType->title,
		company,
		url,
		image,
		dateStart,
		dateEnd,
		${customBlockQuery({ name: "content" })}
	}`;
}
