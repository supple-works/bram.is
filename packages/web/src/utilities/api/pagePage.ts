import type { PageProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import { pageQuery } from "./queries";
import { getSanityData } from "./sanity";

export interface PagePageProps extends PageProps {
	title: string;
}

export const projectionPagePage = `{
	title,
}`;

export async function getDataPagePage(): Promise<
	PagePageProps | PagePageProps[]
> {
	const query = pageQuery({
		type: "page-page",
		projection: projectionPagePage,
		multiple: true,
	});
	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
