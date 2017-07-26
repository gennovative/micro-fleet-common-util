# Gennova backend common utility

# INSTALLATION

Whenever `inject`, `injectable`, or `DependencyContainer` is used:

`import 'reflect-metadata';` only once in the entire program.

# VERSIONS
## 1.0.0
- Added Types constants.
- Added AutoMapper definition.
- Added one parameter to Exception constructor.
- Added more functions to Guard. (breaking change)
- Renamed IAdapter to IAddOn. (breaking change)
- **Testing coverage**: 100%

## 0.1.0
- DependencyContainer
- Guard
- Exception
- **Testing coverage**: 66%