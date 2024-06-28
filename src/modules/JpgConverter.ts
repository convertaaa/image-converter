import {Converter} from "@converta/api";

export class JpgConverter implements Converter {
	convert(filePath: string, outputPath: string): Promise<void> {
		// Convert the file
		return Promise.resolve();
	}
	
	get allowedExtensions(): string[] {
		return ['png'];
	}
	
	get returnableExtension(): string {
		return 'jpg';
	}
}
