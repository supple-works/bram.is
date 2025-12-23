import type { Locale, localeCollection } from "src/utilities/locale";
import type { ImageProps, LinkProps } from ".";
import {

	locales,
} from "src/utilities/locale";
import { imageQuery, linkQuery } from ".";
import { getSanityData } from "../sanity";

export interface SettingsProps {
	baseUrl: string;
	metaTitleSuffix: string;
	ogImage: ImageProps;
	labels: {
		name: string;
		dateOfBirth: string;
		location: string;
		email: string;
		phone: string;
		present: string;
		a: string;
		from: string;
		iAm: string;
		salutation: string;
	};
	personal: {
		givenName: string;
		familyName: string;
		birthDate: string;
		jobTitle: string;
		city: string;
		country: string;
		email: string;
		phone: string;
		links: LinkProps[];
	};
}

export type SettingsByLocale = {
	[K in (typeof localeCollection)[number]["id"]]: SettingsProps;
};

export function settingsQuery({ locale }: { locale: Locale }): string {
	return `
	*[_type == "settings" && language == "${locale.id}"][0]{
		baseUrl,
		metaTitleSuffix,
		${imageQuery({ name: "ogImage" })},
		labels{
			name,
			dateOfBirth,
			location,
			email,
			phone,
			present,
			a,
			from,
			iAm,
			salutation,
		},
		personal{
			...*[_type == "personal"][0]{
				givenName,
				familyName,
				birthDate,
				jobTitle,
				city,
				email,
				phone,
				${linkQuery({ multiple: true })},
			},
			country,
		},
	}`;
}

let settingsTranslated: SettingsByLocale;
async function storeSettings() {
	if (settingsTranslated)
		return;

	settingsTranslated = await Object.entries(locales).reduce(
		async (acc, [, value]) => ({
			...(await acc),
			[value.id]: (await getSanityData({
				query: settingsQuery({ locale: value }),
			})) as SettingsProps,
		}),
		{} as any,
	);
}

/**
 * Function to use global siteSettings inside components
 *
 * Usage:
 * const settings = await useSettings({locale});
 */
export async function useSettings({
	locale = locales[0],
}: {
	locale?: Locale;
}): Promise<SettingsProps> {
	await storeSettings();
	return settingsTranslated[locale.id] || settingsTranslated[locales[0].id];
}
