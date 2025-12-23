import type { CustomBlockProps, EducationProps, ExperienceProps, PageProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import {

	customBlockQuery,

	educationQuery,

	experienceQuery,

	pageQuery,
} from "./queries";
import { getSanityData } from "./sanity";

export interface PageCVProps extends PageProps {
	intro: CustomBlockProps["value"];
	experience: {
		title: string;
		items: ExperienceProps[];
	};
	skills: {
		title: string;
		content: CustomBlockProps["value"];
	};
	personal: {
		title: string;
	};
	education?: {
		title?: string;
		items?: EducationProps[];
	};
}

export const projectionPageCV = `{
	${customBlockQuery({ name: "intro" })},
	experience{
		title,
		items[]->${experienceQuery({ name: "" })},
	},
	skills{
		title,
		${customBlockQuery({ name: "content" })},
	},
	personal{
		title,
	},
	education{
		title,
		items[]->${educationQuery({ name: "" })},
	},
}`;

export async function getDataPageCV(): Promise<PageCVProps | PageCVProps[]> {
	const query = pageQuery({
		type: "page-cv",
		projection: projectionPageCV,
		multiple: true,
	});
	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
