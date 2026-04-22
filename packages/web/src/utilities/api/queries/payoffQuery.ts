export interface PayoffProps {
	name: string;
}

export function payoffQuery({
	name = "payoff",
}: {
	name?: string;
}): string {
	return `${name}{
		name,
	}`;
}
