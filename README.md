
# Pokedex Application

A React-based Pokedex application that fetches data from the Pokémon API and provides an interactive interface for exploring Pokémon, their types, stats, and moves.

---

## Features

- **Dynamic Pokémon Data**: Fetch and display Pokémon details including types, stats, and moves.
- **Interactive Side Navigation**: Search and select Pokémon from the first 151.
- **Move Details**: Fetch and display additional information about moves.
- **Caching with `localStorage`**: Optimizes performance by caching fetched data.
- **Responsive Design**: Ensures a great experience across devices.

---

## Technologies Used

- **React**: Frontend framework for building the application.
- **PokeAPI**: Public Pokémon API used for fetching Pokémon data.
- **CSS**: Styling for responsive and user-friendly design.

---

## Components

### `App.jsx`
- Manages global state for the application.
- Controls the visibility of the side navigation and passes down props to child components.

### `Header.jsx`
- Contains the header bar with a toggle button to open/close the side navigation.

### `SideNav.jsx`
- Displays a searchable list of Pokémon.
- Allows users to select a Pokémon to view its details.

### `PokeCard.jsx`
- Fetches and displays detailed information about the selected Pokémon.
- Includes a modal to show move details.

### `TypeCard.jsx`
- Displays type information with dynamic background colors based on the Pokémon's type.

### `Modal.jsx`
- Used to display detailed move information.

---

## API Integration

### Pokémon API
The application integrates with the PokeAPI to fetch the following:
- Pokémon details: `https://pokeapi.co/api/v2/pokemon/{id}`
- Move details: `https://pokeapi.co/api/v2/move/{id}`

---

## How to Run

### Prerequisites
- Node.js installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/pokedex-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pokedex-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Folder Structure

```
pokedex-app/
│
├── public/                # Public files
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   ├── PokeCard.jsx
│   │   ├── SideNav.jsx
│   │   └── TypeCard.jsx
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   └── index.js           # Entry point
└── package.json           # Project dependencies and scripts
```

---

## Enhancements

### Possible Future Features
- Add support for more Pokémon generations.
- Include a feature to compare stats of different Pokémon.
- Implement a dark mode for better accessibility.

---

## Acknowledgments
- **PokeAPI** for providing a robust API for Pokémon data.
- React for enabling a seamless development experience.

