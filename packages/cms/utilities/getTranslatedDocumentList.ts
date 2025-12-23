import type { IconType } from "react-icons";

interface DocumentListProps {
	title: string;
	type: string;
	icon: IconType;
}

/**
 * Generic function to render a list of documents
 */
function getGenericList(S: any, { type, title, icon }: DocumentListProps) {
	return S.listItem()
		.title(title)
		.icon(icon)
		.schemaType(type)
		.id(type)
		.child(
			S.documentList()
				.title(title)
				.schemaType(type)
				.filter(`_type == "${type}" && language == $baseLanguage`)
				.params({ baseLanguage: `en` })
				.canHandleIntent(S.documentTypeList(type).getCanHandleIntent()),
		);
}

/**
 * This will render a list of documents inside the CMS.
 */
export function getTranslatedDocumentList(S: any, config: DocumentListProps) {
	return getGenericList(S, { ...config });
}
