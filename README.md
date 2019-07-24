# Markdown Links

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Preamble

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a light markup language very popular with developers. It's used in a lot 
of platforms that handle plain text (GitHub, forums, blogs,...), and it's very common to find several files in that
format in any repository (starting with the traditional `README.md`).

These `Markdown` files usually contain _links_ (urls) that are often broken or invalid and that jeopardizes
the value of the information we wanted to share. 

In this small proyect, I've set to create a tool using [Node.js](https://nodejs.org/), that reads and analyzes 
files in `Markdown` format, to verify that the links are working correctly and report otherwise.

## Flowchart

[Flowchard ((Only in spanish))](https://www.lucidchart.com/invitations/accept/29acda24-696b-4f9f-9ace-617b4fbefe21)

Pseudo-code applied to get the url from a file:

1. Specify the file that needs to be analyzed.
2. Read the file and decodify it.
3. Detect urls (using regex)
4. Print matches.

## Usage

When we open the file and excecute it from CLI as it shoes:

/$node mdLinks file [file name]

We must specify if we're intending to analyze a file or a directory and finally, it's name. 

Once specified the file, we will be returned a list with all the links and their status (dead or alive)

## Github installation

npm install shareazc/GDL002-md-links





