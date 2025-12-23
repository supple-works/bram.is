export interface LinkProps {
	label: string;
	href: string;
}

export function linkQuery({
	multiple = false,
}: {
	multiple: boolean;
}): string {
	return `link${multiple ? "s[]" : ""}{
			label,
			href,
	}`;
}
