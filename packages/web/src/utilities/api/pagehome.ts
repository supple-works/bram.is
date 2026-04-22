import type { PageProps, PayoffProps } from "./queries";
import { getAdditionalPageData } from "./helpers/getAdditionalPageData";
import { pageQuery, payoffQuery } from "./queries";
import { getSanityData } from "./sanity";

export interface PageHomeProps extends PageProps {
	title: string;
	payoffs: PayoffProps[];
}

export const projectionHome = `{
	title,
	payoffs[]->${payoffQuery({ name: "" })},
}`;

export async function getDataHome(): Promise<PageHomeProps[]> {
	const query = pageQuery({
		type: "page-home",
		projection: projectionHome,
		multiple: true,
	});

	const data = await getSanityData({ query });

	return getAdditionalPageData(data);
}
