import type { PageProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import { pageQuery } from "./queries";
import { getSanityData } from "./sanity";

export interface PageBlogProps extends PageProps {
	title: string;
}

export const projectionPageBlog = `{
	title,
}`;

export async function getDataPageBlog(): Promise<
	PageBlogProps | PageBlogProps[]
> {
	const query = pageQuery({
		type: "page-blog",
		projection: projectionPageBlog,
		multiple: true,
	});
	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
