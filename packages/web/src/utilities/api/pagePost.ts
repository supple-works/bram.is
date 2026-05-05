import type { CustomBlockProps, PageProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import { customBlockQuery, pageQuery } from "./queries";
import { getSanityData } from "./sanity";

export interface PagePostProps extends PageProps {
	title: string;
	publishDate: string;
	content: CustomBlockProps["value"];
}

export const projectionPagePost = `{
	title,
	publishDate,
	${customBlockQuery({ name: "content" })}
}`;

export async function getDataPagePost(): Promise<
	PagePostProps | PagePostProps[]
> {
	const query = pageQuery({
		type: "page-post",
		projection: projectionPagePost,
		multiple: true,
	});
	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
