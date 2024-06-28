import {Converter, ConverterRegister} from "@converta/api";
import {PngConverter} from "./modules/PngConverter";
import {JpegConverter} from "./modules/JpegConverter";

export class ConverterRegistry implements ConverterRegister {
	get converter(): Converter[] {
		return [
				new PngConverter(),
				new JpegConverter()
		];
	}
}

export default {ConverterRegistry};