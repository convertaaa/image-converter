import {Converter} from "@converta/api";

export class PngConverter implements Converter {
	convert(filePath: string, outputPath: string): Promise<void> {
		// Convert the file
		return Promise.resolve();
	}
	
	get allowedExtensions(): string[] {
		return ['jpeg', 'jpg'];
	}
	
	get returnableExtension(): string {
		return 'png';
	}
}
