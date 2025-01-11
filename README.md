# Infinite Scroll Gallery with Lazy Loading and Redux

## Task Description:
This project implements an Infinite Scroll Gallery with Lazy Loading using Redux. The app fetches data from a fake API and displays them in a gallery format. As the user scrolls, more data is fetched and displayed. Lazy loading ensures that items are loaded only when they are about to be displayed in the viewport, improving performance.

## Key Features:
- Fetches data from a fake API.
- Infinite scrolling to load more data as the user scrolls down the page.
- Lazy loading to optimize performance by loading items only when they come into view.
- Redux is used for managing the application state efficiently.

## Tech Stack:
- React
- Vite
- Redux
- Fake API
- CSS

## Installation:

1. Clone the repository:
   ```
   git clone https://github.com/chetan4131/InfiniteScrollGallery.git

2. Navigate to the project folder:
    ```
    cd InfiniteScrollGallery

3. Install the dependencies:
    ```
    npm install

4. Start the development server:
    ```
    npm run dev

5. Open your browser and go to http://localhost:5173/

## Features:
- Infinite Scroll:
    - As you scroll down the page, more items are loaded automatically from the API without refreshing the page.
- Lazy Loading:
    - Resources are loaded only when they are about to be displayed, reducing unnecessary loading time.
- Redux for State Management:
    - The application state is managed using Redux, making it easier to manage the loading state, data, and other necessary app states.
