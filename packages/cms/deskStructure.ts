import {
	BsBriefcase,
	BsEasel,
	BsFileEarmarkRichtext,
	BsFilePerson,
	BsFileRichtext,
	BsFiletypeDoc,
	BsGear,
	BsHouse,
	BsListColumnsReverse,
	BsListStars,
	BsVinyl,
	BsVinylFill,
} from "react-icons/bs";

import { getDocumentList } from "./utilities/getDocumentList";
import { getFolder } from "./utilities/getFolder";
import { getSingleton } from "./utilities/getSingleton";
import { getTranslatedDocumentList } from "./utilities/getTranslatedDocumentList";
import { getTranslatedSingleton } from "./utilities/getTranslatedSingleton";

export default (S: any) =>
	S.list()
		.title("Content")
		.items([
			getFolder(S, {
				title: "Pagina’s",
				icon: BsFileRichtext,
				items: [
					getTranslatedSingleton(S, {
						title: "HomePage",
						type: "page-home",
						icon: BsHouse,
					}),
					getTranslatedDocumentList(S, {
						title: "Page",
						type: "page-page",
						icon: BsFileEarmarkRichtext,
					}),
					getTranslatedSingleton(S, {
						title: "Blog",
						type: "page-blog",
						icon: BsFileEarmarkRichtext,
					}),
					getTranslatedSingleton(S, {
						title: "Curriculum Vitae",
						type: "page-cv",
						icon: BsListStars,
					}),
					getTranslatedSingleton(S, {
						title: "Discography",
						type: "page-discography",
						icon: BsVinyl,
					}),
					getDocumentList(S, {
						title: "Record",
						type: "page-record",
						icon: BsVinylFill,
					}),
				],
			}),

			getFolder(S, {
				title: "Documents",
				icon: BsFiletypeDoc,
				items: [
					getTranslatedDocumentList(S, {
						title: "Experience",
						type: "experience",
						icon: BsListColumnsReverse,
					}),
					getDocumentList(S, {
						title: "Skills",
						type: "skills",
						icon: BsListColumnsReverse,
					}),
					getTranslatedDocumentList(S, {
						title: "Education",
						type: "education",
						icon: BsEasel,
					}),
					getTranslatedDocumentList(S, {
						title: "Employment Type",
						type: "employmentType",
						icon: BsBriefcase,
					}),
				],
			}),

			S.divider(),

			getTranslatedSingleton(S, {
				title: "Settings",
				type: "settings",
				icon: BsGear,
			}),

			getSingleton(S, {
				title: "Personal",
				type: "personal",
				icon: BsFilePerson,
			}),
		]);
