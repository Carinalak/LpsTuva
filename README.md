# Lps-Tuva 🐈 🦜🐟 🐢 🐶

This site is live at: https://github.com/Carinalak/LpsTuva

This is the site of Lps-Tuva! 

## The design:
Mobileversion:
![Mobilversion i Figma](src/assets/screenshots/Mobil.png)  

Tablet och Desktopversion:
![Tabletversion i Figma](src/assets/screenshots/Tablet.png)


## I used:
- React
- Vite
- Typescript
- Styled Components


## To run the project on your local machine:

- npm run dev

## To deploy the project to GitHubPages run this command every time you pushed and want to do a new build: 

- rm -rf dist
- npm run build
- npm run deploy

## The form uses React hook form and Reg Ex to validate:

- npm install react-hook-form @hookform/resolvers yup

## Font Awesome Social Icons:

- npm install --save @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons

- Har använt Spotify, Instagram och YouTube i Footern. 

## Install axios in front end for using fetch och post
npm install axios
npm install emailjs-com
npm install framer-motion till switchknappen


## Supabase till att Tuva själv kan uppdatera texten i sin sida, genom Admin-komponenten: 
- npm install @supabase/supabase-js


## Kortflippningsfakta:
För att vända korten i memoryspelet använder jag klassen "flipped" i kombinatione med CSS föratt skapa en flip-animation. Klassen "flipped" sätts baserat på om kortet är valt eller ej. När ett kort väljs får den klassen "flipped". Jag använder className="flipped" för att styra flippningen, och själva animeringen hanteras i CSS med transform: rotateY(180deg).

### Ljud/Sounds: 🔊

Från Freesound.com:
- Flip.ogg by egomassive -- https://freesound.org/s/536782/ -- License: Attribution 3.0
- achievement-sparkle by pigeonfriend -- https://freesound.org/s/715067/ -- License: Creative Commons 0

### To the Puzzle
- npm install react-dnd react-dnd-html5-backend


# ----------------------- Backend -------------------------- not in use right now

## PpostgreSQL:

- npm init -y
- npm install express pg dotenv
- npm install --save-dev typescript @types/node @types/express ts-node nodemon
- npm install --save-dev @types/pg


Generera en TypeScript-konfigurationsfil:
- npx tsc --init



