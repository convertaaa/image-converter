# Image Converter for the converta ui

## Description

The image converter is used to convert images to different formats. And use them in the converta ui.

## Development

converta ui scans the repository for converters.
To add a new converter, create a new converter inside the `src/modules` directory.
After that, the converter needs to be added to the `src/modules.ts` file. To get the converter registered in the converta ui.
<br/><br/>
When committing the changes, the `build` script will be executed. 
This script will create a bundled version of the converter.
The bundled version will be placed in the `dist` directory and needs to be committed as well.