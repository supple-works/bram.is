import type { PortableText } from "astro-portabletext";
import { pageReferenceInSelectQuery } from ".";

type PortableTextProps = Parameters<typeof PortableText>[0];

export interface CustomBlockProps {
	value: PortableTextProps["value"];
	components?: PortableTextProps["components"];
}

export function customBlockQuery({ name }: { name: string }): string {
	return `${name}[]{
		...,
		markDefs[]{
			...,
			_type == "link" => @{
				"slugCollection": select(
					defined(href) => {
						"slug": href,
					},
					${pageReferenceInSelectQuery()},
				),
			},
		},
	}`;
}
