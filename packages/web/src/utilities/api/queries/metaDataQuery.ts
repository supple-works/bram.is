import type { ImageProps } from ".";
import { imageQuery } from ".";

export interface MetaDataProps {
	metaData: {
		title: string;
		description: string;
		image?: ImageProps;
		noIndex?: boolean;
	};
}

export function metaDataQuery(): string {
	return `metaData{
			title,
			description,
			${imageQuery({})},
			noIndex
	}`;
}
