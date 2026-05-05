import type { PagePostProps } from "./pagePost";
import type { PageProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import { projectionPagePost } from "./pagePost";
import { pageQuery, parentPageQuery } from "./queries";
import { getSanityData } from "./sanity";

export interface PageBlogProps extends PageProps {
	title: string;
	posts?: PagePostProps[];
}

export const projectionPageBlog = `{
	title,
	"posts": *[_type == 'page-post'] | order(publishDate desc){
		...${projectionPagePost},
		${parentPageQuery()},
		"slug": slug.current,
	},
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
