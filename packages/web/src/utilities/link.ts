import type { Locale } from "./locale";
import { localeCollection } from "./locale";

const urlReplaceRegex = /^\//;

export function isExternalUrl(url: string) {
	return url.includes("//");
}

/**
 * Small helper method that prefixes the requested url with a locale.
 */
export function prefixUrlWithlocale(href: string, locale: Locale) {
	return localeCollection.filter(
		localeTest =>
			href === localeTest.id || href.startsWith(localeTest.urlPrefix),
	).length === 0
	&& !isExternalUrl(href)
	&& !href.startsWith("#")
	&& !href.startsWith("tel:")
	&& !href.startsWith("mailto:")
		? `${
			localeCollection[0].id !== locale.id ? locale.urlPrefix : ""
		}/${href.replace(urlReplaceRegex, "")}`
		: href;
}

export function parseLink(href: string, locale: Locale): string {
	return prefixUrlWithlocale(href, locale);
}
