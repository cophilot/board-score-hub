<div align="center">
  <br />
  <img src="src/assets/logo-red.png" alt="board-score-hub" width="30%"/>
  <h1>board-score-hub</h1>
  <p>
     A collection of digitital score sheets for a broad variety of board games.
  </p>
</div>

<!-- Badges -->
<div align="center">
   <a href="https://github.com/cophilot/board-score-hub/blob/master/LICENSE">
       <img src="https://img.shields.io/github/license/cophilot/board-score-hub" alt="license" />
   </a>
   <a href="https://github.com/cophilot/board-score-hub/stargazers">
       <img src="https://img.shields.io/github/stars/cophilot/board-score-hub" alt="stars" />
   </a>
   <a href="https://github.com/cophilot/board-score-hub/commits/master">
       <img src="https://img.shields.io/github/last-commit/cophilot/board-score-hub" alt="last commit" />
   </a>
</div>

---

BoardScoreHub is a web application that is used for keeping track of scores for board games. It is a simple and easy-to-use application that allows users to create and manage games, players, and scores. The application is built using React.

---

## Missing a game?

Add a Game Request on the [Issues](https://github.com/cophilot/board-score-hub/issues/new?template=game-request.md) page.

---

## Development

Perquisites for development are [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/).

To start the development server, run the following command:

```bash
pnpm setup # install dependencies and setup husky
pnpm start # start the development server
```

---

## Game Definition

The game definition defines the structure of the table for the game. You can find the interface for the definition [here](./src/api/types/GameDef.ts).

---

## Add a game

Add a new folder in the [games](./src/games) directory with the structure of the other games. Alternative you can install [templify](https://github.com/cophilot/templify) and run the following command and fill out the prompts:

```bash
tpy generate game <game-name>
```

After adding the game folder you have to register the game in the [allGames.ts](./src/allGames.ts) file.

---

## Project Structure

- `src/core`: Core logic for the table page rendering and score calculation and storage.
- `src/core/main`: Contains the `BoardScorePage` and `BoardScoreTable` components that are responsible for rendering the main page and table.
- `src/core/state`: Contains state management logic for the application.
- `src/core/types`: TypeScript types used throughout the core logic.
- `src/games`: Contains all the game definitions and related assets.
- `src/providers`: Context providers for state management and other global functionalities.
- `src/views`: Different pages of the application (e.g., Home, About, ...).
- `src/components`: Common components used throughout the application.

---

by [Philipp B.](https://github.com/cophilot)
