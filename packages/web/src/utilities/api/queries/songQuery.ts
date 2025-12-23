import type { ImageProps } from ".";

export interface SongProps {
	title: string;
	releaseDate: string;
	album: string;
	artist: string;
	albumArt: ImageProps;
}

export function songQuery({ name = "song" }: { name?: string }): string {
	return `${name}`;
}
