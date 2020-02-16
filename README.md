# TSLint Config

Template para el estilo de código de todos los repositorios TypeScript de fiuba-laboral-v2

## Más convenciones de código:

1) La estructura de carpetas/archivos de test/ imita la de src/
2) Archivos y carpetas:
    * Para componentes react y types de graphql usar CamelCase.
3) La carpetas de los modelos en singular (Company). Dentro de la carpeta se pueden guardar los 
archivos Model.ts, Repository.ts, Interface.ts y Serializer.ts
4) Los modelos se llaman sin ningun sufijo ni prefijo.
5) Los tipos de graphql se guardan en una carpeta Types dentro de la carpeta de la entidad correspondiente
 - Esta tiene un index con un array y todos los types
6) Los tipos de grahpql se nombran como: **GraphQL<TypeName>**

