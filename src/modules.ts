import {Converter, ConverterRegister} from "@converta/api";
import {PngConverter} from "./modules/PngConverter";

export class ConverterRegistry implements ConverterRegister {
	get converter(): Converter<any, any>[] {
		return [new PngConverter()];
	}
}

export default {ConverterRegistry};