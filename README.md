<!-- PROJECT SHIELDS -->
<!--
*** This template uses markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url]

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://NicolasBrondin.github.io/basic-map-leaflet/dist/index.html)

Here is a basic implementation of an interactive map using Leaflet, OpenStreet Map and MapBox. This is very simplistic and for education purpose, feel free to reuse the code and improve it your own way. Check the online demo : https://NicolasBrondin.github.io/basic-map-leaflet/dist/index.html

### Built With

* 🖊️ HTML/CSS/Javascript
* ⚡ Vite
* 🍃 Leaflet
* 🗺 OpenStreet Map and MapBox

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node and NPM

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/NicolasBrondin/basic-map-leaflet
```
2. Open the directory
```sh
cd basic-map-leaflet
```
3. Install the dependencies
```sh
npm install
```
3. Start the development server
```sh
npm run dev
```

<!-- USAGE EXAMPLES -->
## Usage

If you want to try the MapBox version and even test to build custom map tiles, you need to create an account on the [MapBox](https://account.mapbox.com/) website. Then you should be able to get an access token.

Once you've got the token, rename the file env.example.json to env.json and paste your token inside. To finish, uncomment the MapBox related comments in the main.js file, comment the OpenStreet Map ones, and you're done !

_For more infos about Leaflet, please refer to the [Documentation](https://leafletjs.com/)_


<!-- CONTACT -->
## Contact

Nicolas Brondin-Bernard - [@NicolasBrondin](https://twitter.com/NicolasBrondin) - nicolas@brondin.com

Project Link: [https://github.com/NicolasBrondin/basic-map-leaflet](https://github.com/NicolasBrondin/basic-map-leaflet)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NicolasBrondin/basic-map-leaflet.svg?style=flat-square
[contributors-url]: https://github.com/NicolasBrondin/basic-map-leaflet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NicolasBrondin/basic-map-leaflet.svg?style=flat-square
[forks-url]: https://github.com/NicolasBrondin/basic-map-leaflet/network/members
[stars-shield]: https://img.shields.io/github/stars/NicolasBrondin/basic-map-leaflet.svg?style=flat-square
[stars-url]: https://github.com/NicolasBrondin/basic-map-leaflet/stargazers
[issues-shield]: https://img.shields.io/github/issues/NicolasBrondin/basic-map-leaflet.svg?style=flat-square
[issues-url]: https://github.com/NicolasBrondin/basic-map-leaflet/issues
[license-shield]: https://img.shields.io/github/license/NicolasBrondin/basic-map-leaflet.svg?style=flat-square
[license-url]: https://github.com/NicolasBrondin/basic-map-leaflet/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: docs/cover.jpg
