import type { PageRecordProps } from "./pageRecord";
import type { PageProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import { projectionPageRecord } from "./pageRecord";
import { pageQuery, parentPageQuery } from "./queries";
import { getSanityData } from "./sanity";

export interface PageDiscographyProps extends PageProps {
	title: string;
	records?: PageRecordProps[];
}

export const projectionPageDiscography = `{
	title,
	"records": *[_type == 'page-record']{
		...${projectionPageRecord},
		${parentPageQuery()},
		"slug": slug.current,
	},
}`;

export async function getDataPageDiscography(): Promise<
	PageDiscographyProps | PageDiscographyProps[]
> {
	const query = pageQuery({
		type: "page-discography",
		projection: projectionPageDiscography,
		multiple: true,
	});
	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
