import {Converter} from "@converta/api";

export class PngConverter implements Converter<File, File> {
	get name(): string {
		return 'PNG Converter';
	}
	
	get author(): string {
		return 'Shukaaa';
	}

	get description(): string {
		return 'Converts images to PNG format.';
	}

	get allowedExtensions(): string[] {
		return ['jpeg', 'jpg'];
	}

	get returnableExtensions(): string[] {
		return ['png'];
	}

	async convert(input: File) {
		return new File([], 'output.png');
	}
}
