import educationDocument from "./documents/education";
import employmentTypeDocument from "./documents/employmentType";
import experienceDocument from "./documents/experience";
import payoffDocument from "./documents/payoff";

import personalDocument from "./documents/personal";
// Documents
import settingsDocument from "./documents/settings";
import skillsDocument from "./documents/skills";
import customBlockObject from "./objects/customBlock";
import linkObject from "./objects/link";
// Objects
import metaDataObject from "./objects/metaData";
import pageSelectorObject from "./objects/pageSelector";

import cvPage from "./pages/cv";
import discographyPage from "./pages/discography";
// Pages
import homepagePage from "./pages/homepage";
import recordPage from "./pages/record";

export const schemaTypes = [
	// Pages
	homepagePage,
	cvPage,
	discographyPage,
	recordPage,
	// Documents
	settingsDocument,
	personalDocument,
	employmentTypeDocument,
	experienceDocument,
	skillsDocument,
	payoffDocument,
	educationDocument,
	// Objects
	metaDataObject,
	pageSelectorObject,
	customBlockObject,
	linkObject,
];
