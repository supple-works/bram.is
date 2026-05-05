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

// Pages
import homepagePage from "./pages/homepage";
import blogPage from "./pages/blog";
import discographyPage from "./pages/discography";
import recordPage from "./pages/record";
import cvPage from "./pages/cv";

export const schemaTypes = [
	// Pages
	homepagePage,
	blogPage,
	discographyPage,
	recordPage,
	cvPage,
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
