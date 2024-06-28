import {Converter} from "@converta/api";
import sharp from "sharp";
import {allowedExtensions} from "../consts";

export class JpegConverter implements Converter {
	async convert(filePath: string, outputPath: string): Promise<void> {
		const image = sharp(filePath);
		await image.jpeg().toFile(outputPath);
		return Promise.resolve();
	}
	
	get allowedExtensions(): string[] {
		return allowedExtensions;
	}
	
	get returnableExtension(): string {
		return 'png';
	}
}
