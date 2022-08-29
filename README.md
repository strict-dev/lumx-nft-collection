<div id="top"></div>

[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/strict-dev/lumx-nft-collection">
    <img src="docs/assets/app-logo.svg" alt="Lumx NFT" height="100">
  </a>
    </br>
    </br>

  <p align="center">
    This app was made for Lumx Studio's - Frontend Developer Challenge, it's an NFT Collection dashboard to visualize the collection info and market data. 
    <br />
    <br />
    <a href="https://lumx-nft-collection-dashboard.vercel.app/">View Live</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the development process

The project was made using the following tools and standards for good development experience and good code quality:

  - **_Commitlint_** to check the commit message following Angular's style.
  - **_lint-staged_** to ensure no lint or TypeScript errors were committed.
  - **_Prettier_** to format the code following the **_ESlint_** Standard.

  _**Note 1:**_ Although it not followed gitflow, I tried to follow the best practices for git commits.

  _**Note 2:**_ Tests were also not fully implemented because that would demand much time, so only snapshots were made for the components. 

<p align="center">
  <img src="docs/assets/app-demo.gif" alt="App demo Lumx NFT" height="400" >
</p>

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
- [axios](https://axios-http.com/docs/intro)
- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [Storybook](https://storybook.js.org/)
- [recoil](https://recoiljs.org/)
- [Vercel](https://vercel.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Jest](https://jestjs.io/)


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Vercel Deploy

- [Click here to go to deploy](https://lumx-nft-collection-dashboard.vercel.app/)

Storybook Deploy

  - [Storybook Deploy](https://lumx-nft-storybook-rafae2k.vercel.app/)

### Prerequisites

This project use `pnpm` as package manager.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/strict-dev/lumx-nft-collection
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. run dev server
   ```sh
   pnpm dev
   ```
4. Running the Storybook server
   ```bash
   pnpm storybook
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- Components
  [x] Collection Info
  [x] Header
  [x] Hyper Trend
  [x] Loader
  [x] Period Selector
  [x] Sales card

- Pages (this is an SPA application 😅)
  [x] Home

- Api
  [x] /api/collection (get collection info)

  __Note:__ nextjs api route to fetch mocked data to simulate a real api

## Issues


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Email <a href="mailto:hello@rafo.work">hello@rafo.work</a>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/strict-dev/lumx-nft-collection.svg?style=for-the-badge
[forks-url]: https://github.com/strict-dev/lumx-nft-collectionfork
[stars-shield]: https://img.shields.io/github/stars/strict-dev/lumx-nft-collection.svg?style=for-the-badge
[stars-url]: https://github.com/strict-dev/lumx-nft-collectionstargazers
[issues-shield]: https://img.shields.io/github/issues/strict-dev/lumx-nft-collection.svg?style=for-the-badge
[issues-url]: https://github.com/strict-dev/lumx-nft-collectionissues
[license-shield]: https://img.shields.io/github/license/strict-dev/lumx-nft-collection.svg?style=for-the-badge
[license-url]: https://github.com/strict-dev/lumx-nft-collectionblob/main/LICENSE.txt
[product-screenshot]: docs/assets/app-demo.gif
