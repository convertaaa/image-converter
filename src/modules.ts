import {Converter, ConverterRegister} from "@converta/api";
import {PngConverter} from "./modules/PngConverter";
import {JpgConverter} from "./modules/JpgConverter";

export class ConverterRegistry implements ConverterRegister {
	get converter(): Converter[] {
		return [
				new PngConverter(),
				new JpgConverter()
		];
	}
}

export default {ConverterRegistry};