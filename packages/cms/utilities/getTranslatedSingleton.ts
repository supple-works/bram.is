import type { IconType } from "react-icons";
import { languages } from "../languages";

interface DocumentProps {
	title: string;
	type: string;
	icon: IconType;
}

/**
 * This will export a Sanity ListItem configured as a singleton so there can only be one
 */
export function getTranslatedSingleton(S: any, { title, type, icon }: DocumentProps) {
	return S.listItem()
		.title(title)
		.id(type)
		.icon(icon)
		.child(
			S.list()
				.title(title)
				.id(type)
				.items(
					languages.map(language =>
						S.documentListItem()
							.schemaType(type)
							.id(`${type}-${language.id}`)
							.title(`${title} (${language.id.toLocaleUpperCase()})`),
					),
				)
				.canHandleIntent(
					(intentName: any, params: any) => intentName === "edit" && params.id.startsWith(type),
				),
		);
}

export function getTranslatedSingletonDocument(S: any, config: DocumentProps) {
	return getTranslatedSingleton(S, { ...config });
}
