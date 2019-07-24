# Markdown Links

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

En éste pequeño proyecto individual me he propuesto crear una herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos en formato `Markdown`, para verificar los links que contengan funcionen correctamente o reportar lo contrario.

## Diagrama de flujo

[Diagrama de flujo](https://www.lucidchart.com/invitations/accept/29acda24-696b-4f9f-9ace-617b4fbefe21)

Pseudo código aplicado para obtener url de un archivo:

1. Especificar el archivo a analizar
2. Leer archivo y decodificarlo
3. Detectar url (uso de expresión regular)
4. Imprimir coincidencias

## Documentación técnica de la librería

[Nodejs Curso Desde Cero](https://www.youtube.com/watch?v=BhvLIzVL8_o&t=2181s)

[The Complete Node.js Developer Course](https://www.udemy.com/the-complete-nodejs-developer-course-2/)

[Node.js docs](https://nodejs.org/dist/latest-v12.x/docs/api/)

[Curso NodeJS - Leer archivos y programación asíncrona](https://www.youtube.com/watch?v=Q3stHsWowNg&t=424s)

[Node JS for Begginers Series (The Net Ninja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp)

[LearnYouNode](https://nodeschool.io/)

## Guía de Uso

Al abrir el archivo y ejecutar desde terminal de la siguiente manera:

\$node mdLinks file [file name]

Deberemos especificar si lo que vamos a analizar se trata de un archivo o de un directorio y finalmente su nombre. De momento la aplicación sólo soporta archivos/carpetas que se encuentren en su mismo directorio.

En caso de analizar un archivo, nos retornará un arreglo con todos los enlaces que encontró.
En caso de analizar un directorio, nos retornará un arreglo con todos los archivos encontrados.

## Instalación desde GitHub

npm install shareazc/GDL002-md-links





