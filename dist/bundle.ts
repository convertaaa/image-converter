// src/modules/PngConverter.ts
var PngConverter = class {
  get name() {
    return "PNG Converter";
  }
  get author() {
    return "Shukaaa";
  }
  get description() {
    return "Converts images to PNG format.";
  }
  get allowedExtensions() {
    return ["jpeg", "jpg"];
  }
  get returnableExtensions() {
    return ["png"];
  }
  async convert(input) {
    return new File([], "output.png");
  }
};

// src/modules.ts
var ConverterRegistry = class {
  get converter() {
    return [new PngConverter()];
  }
};
export {
  ConverterRegistry
};
