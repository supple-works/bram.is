export function filterReference({ document }: { document: any }) {
	return {
		filter: `!defined(parent) && _id != $id && (!defined(language) || language == $lang)`,
		params: {
			id: document._id,
			lang: document.language ? document.language : "en",
		},
	};
}
