<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]
[![contributions welcome][contributions-welcome]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://openweathermap.org/">
    <img src="https://brands.home-assistant.io/_/openweathermap/logo.png" alt="Logo" height="80">
  </a>

  <h1 align="center">
	Weather Report webpage
  </h1>

  <p align="center">
    Dynamically rendering a simple weather homepage using async JS
    <br />
	  🖊️
    <a href="https://www.theodinproject.com/courses/javascript/lessons/weather-app">Assignment</a>
    🐞
    <a href="https://github.com/Israel-Laguan/Weather-Report/issues">Report a Bug</a>
    🙋‍♂️
    <a href="https://github.com/Israel-Laguan/Weather-Report/issues">Request Feature</a>
  </p>
</p>

[![Home](public/weather/home.png)](http://weather-report-israellaguan.vercel.app/)

# The Project

Your city's weather info, one click away, is just awaiting for you! Powered by [OpenWeather API][openweather].

For Microverse based in these [requirements](https://www.theodinproject.com/courses/javascript/lessons/weather-app).

- Async calls to external server
- Data Structures
- Object Oriented Programming
- Factory Functions
- Single Responsibility
- Tightly Coupled Objects
- Module Pattern
- ES6 syntax
- Export/import ES6+ notation
- Linters

# Features

[![Framework][badge-framework]][framework-url]
![javascript][]
![eslint][]

- Basic VanillaJS app with a single script or few commands
- JS modules and ES6+ available for most browsers
- connected an API using `async/await`
- Sets `stickler` on the repo
- Sets `eslint` rules
- Tests made with [`ESLint`](https://eslint.org/)
- Add `jest` and `eslint` to be callable with `npm`


# Tests

## `ESlint`

![ESlint](public/weather/lint.png)

# Built With

- Webpack
- `ESLint`
- `npm`
- `vscode` with _ESLint_ extension
- Linux/GNU
- Love and Passion for code

# Build

# Live Demo

[![Home](public/weather/home.png)](http://weather-report-israellaguan.vercel.app/)

### Try the autocomplete feature!

![Menu](public/weather/autocomplete.png)

## Prerequisites

- `npm` 6.13 +
- `node` 11.15 +
- A Text Editor like VSCode
- A browser like Firefox or Chrome

## Quick Start

```
git clone https://github.com/Israel-Laguan/Weather-Report.git
cd Weather-Report
npm i && npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see the app.

### Where are generated files?

In `development` mode `webpack` does not write generated files to disk, in order to change it
switch `devServer.writeToDisk` to `true` in [webpack.dev.js](./webpack.common.config.js). The generated files are
on `dist/` folder.

### Run development build

- `npm start`

## Production

- `npm run build` to prepare `html`, `css`, `js` files in `dist/` directory

## Run tests

Optionally you can run the linter and tests: `npm run linter && npm test`

# Author

<table style="width:100%">
  <tr>
    <td>
        <div align="center">
            <a href="./docs/img/photo.png" target="_blank" rel="author">
                <img src="https://avatars2.githubusercontent.com/u/36519478?s=460&v=4" style="border-radius: 10%; min-width: 100px;" alt="Israel Laguan's Photo" width="200px">
            </a>
            <h2>
                <a href="https://israel-laguan.github.io/" target="_blank" rel="author">
                    Israel Laguan
                </a>
            </h2>
        </div>
    </td>
    <td>
        <div align="center">
            <a href="mailto:israellaguan@gmail.com" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/message-squared.png" style="border-radius: 10%" alt="My GitHub" height="45px">
                <h3>
                    Email me to 
                    <a href="mailto:israellaguan@gmail.com">
                        israellaguan@gmail.com
                    </a>
                </h3>
            </a>
            <a href="https://www.linkedin.com/in/israellaguan/" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="My Linkedin" height="45px">
                <h3>
                    Connect to my Linkedin
                </h3>
            </a>
            <a href="https://github.com/Israel-Laguan" target="_blank" rel="author">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" 
			style="border-radius: 10%" alt="My GitHub" height="45px"
		>
                <h3>
                    Check my GitHub Profile
                </h3>
            </a>
        </div>
    </td>
  </tr>
</table> 

# Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].



# 🤗 Show your support

Give a ⭐️ if you like this project!

# 🏅 Acknowledgements

- [Microverse](https://www.microverse.org/)
- [The Odin Project](https://www.theodinproject.com/)
- [Readme header author](https://github.com/collinsugwu/Microverse201-Enumerable-Methods)
- [FlatIcon](https://www.flaticon.com/) images
- [OpenWeatherMap](https://openweathermap.org/) API

# License

[![License][badge-license]](http://badges.mit-license.org)

📝 This project is licensed under the [MIT](LICENSE)\
Feel free to fork this project and improve it

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Israel-Laguan/Weather-Report?style=for-the-badge
[contributors-url]: https://github.com/Israel-Laguan/Weather-Report/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Israel-Laguan/Weather-Report?style=for-the-badge
[forks-url]: https://github.com/Israel-Laguan/Weather-Report/network/members
[stars-shield]: https://img.shields.io/github/stars/Israel-Laguan/Weather-Report?style=for-the-badge
[stars-url]: https://github.com/Israel-Laguan/Weather-Report/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Israel-Laguan/Weather-Report?style=for-the-badge
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Israel-Laguan/Weather-Report?style=for-the-badge
[issues-url]: https://github.com/Israel-Laguan/Weather-Report/issues
[badge-framework]: https://img.shields.io/badge/webpack-v4-9cf?style=for-the-badge&logo=webpack
[framework-url]: https://webpack.js.org/
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[badge-license]: https://img.shields.io/:license-mit-blue.svg?style=for-the-badge
[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[eslint]: https://img.shields.io/badge/linter-ESLint-4B32C3?style=for-the-badge&logo=eslint
[openweather]: https://openweathermap.org/
