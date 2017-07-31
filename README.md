# Gennova backend common utility

## USAGE

If your package uses `inject`, `injectable`, or `DependencyContainer`, must add `import 'reflect-metadata';` once at the startup file of your package.

## INSTALLATION

`npm i`: To install dependencies.
`gulp` to transpile TypeScript.

## DEVELOPMENT

`gulp watch`: To transpile and watch for edit.

## RELEASE

`gulp release`: To transpile and create `app.d.ts` definition file.

## VERSIONS
### 1.0.0
- Added Types constants.
- Added AutoMapper definition.
- Added one parameter to Exception constructor.
- Added more functions to Guard. (breaking change)
- Renamed IAdapter to IAddOn. (breaking change)
- **Testing coverage**: 100%

### 0.1.0
- DependencyContainer
- Guard
- Exception
- **Testing coverage**: 66%