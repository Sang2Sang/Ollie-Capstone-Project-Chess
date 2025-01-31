# Ollie-Capstone-Project-Chess
Chess Application Development Challenge
Project Overview The goal of this challenge is to build a chess application where students can
select a chess piece on a board and visualise all possible moves for that piece. The project
focuses on building UI templates with HTML and CSS, simulating a database using a mock
JSON server, and implementing the functionality with JavaScript. The main purpose of the app
is to add a visual effect (e.g., a coloured border or background) to highlight possible moves
when a piece is selected.
Challenge 1: Create UI Templates
Timelines
●
●
Expected Length to Complete: 4 days
Due Date: 23rd Jan 2025
Challenge Summary
In this challenge, you will design the user interface for the chess application. The focus will be
on creating an interactive and responsive chessboard. You will not implement the logic for move
calculation yet; your work will solely involve building the UI and making it visually appealing.
Requirements
1. Chessboard Design:
○
Create an 8x8 chessboard grid using HTML and CSS.
○
Ensure alternating black and white tiles to mimic a standard chessboard.
○
Each tile should be identifiable by unique data attributes (e.g., data-row and
data-col).
2. Chess Pieces:
○
Use images or Unicode symbols to represent the standard chess pieces (e.g., ♔
for White King, ♚ for Black King).
○
Ensure pieces are positioned correctly based on the initial chessboard setup.
3. Responsiveness:
○
Ensure the chessboard scales appropriately on various screen sizes (desktop,
tablet, mobile).
4. No Frameworks:
○
Do not use CSS frameworks like Bootstrap or Tailwind. Custom CSS only.
Implementation Steps
1. HTML Structure:
○
○
Create a chessboard container with 64 tiles.
Each tile should have a unique identifier (e.g., id=
corner).
2. CSS Styling:
"tile-0-0" for the top-left
○
Style the chessboard with alternating colors.
○
Style the chess pieces for visual clarity.
○
Add hover effects for better interactivity.
3. Deployment:
○
Host the UI templates on GitHub Pages or a similar platform.
Challenge 2: Mock Database Setup
Timelines
●
Expected Length to Complete: 1 day
Challenge Summary
Set up a mock JSON server to simulate the backend data. The server should store the current
state of the chessboard and allow fetching or updating the position of pieces.
Requirements
Database Schema:
{
"chessboard": [
{ "piece": "pawn"
,
{ "piece": "knight"
,
{ "piece": "king"
,
"colour": "white"
,
"colour": "black"
,
"colour": "white"
,
"position": "a2" },
"position": "b8" },
"position": "e1" }
]
}
1.
2. Mock Server Setup:
○
○
Use JSON Server to create a RESTful API.
Allow endpoints for fetching and updating piece positions.
○
Example endpoints:
■ GET /chessboard: Retrieve the current state.
■
PUT /chessboard/:id: Update the position of a piece.
Implementation Steps
Install JSON Server:
npm install -g json-server
1. Create a db.json file with the schema above.
Start the server:
json-server --watch db.json
2. Test the endpoints using tools like Postman or a browser.
Challenge 3: Add JavaScript Functionality
Timelines
●
●
Expected Length to Complete: 2 days
Due Date: 27th Jan 2025
Challenge Summary
Implement the functionality to display all possible moves for a selected chess piece using
JavaScript. This will involve fetching the chessboard state from the mock JSON server,
calculating valid moves, and highlighting tiles on the board.
Requirements
1. Event Handling:
○
Add event listeners to each tile to detect when a piece is clicked.
2. Fetch Chessboard State:
○
Use fetch to retrieve the chessboard state from the mock JSON server.
○
Display the fetched state on the board.
3. Calculate Possible Moves:
○
Implement basic move rules for each piece (e.g., pawns move forward, knights
move in an L-shape).
○
Ensure the logic considers board boundaries and other pieces.
4. Highlight Moves:
○
Dynamically add a CSS class to tiles representing valid moves.
○
Remove highlights when another piece is selected.
5. Update the Server:
○
Send a PUT request to the JSON server when a piece is moved.
Implementation Steps
1. Fetch and Render:
○
Fetch the chessboard state on page load and render it.
2. Add Click Events:
○
Attach click events to tiles.
○
On click, identify the piece and calculate its valid moves.
3. Calculate Moves:
○
Use JavaScript functions for each piece’s movement logic.
4. Highlight Moves:
○
Add visual feedback for possible moves.
5. Update Server:
○
Update the chessboard state on move confirmation.
Target Skills
After completing this challenge, students should be able to demonstrate:
1. UI Design:
○
Create interactive and responsive interfaces with HTML and CSS.
2. Mock Backend Setup:
○
Simulate a backend using JSON Server.
3. JavaScript Logic:
○
Implement chess piece movement logic.
4. API Interaction:
○
Use fetch for GET and PUT requests to interact with the mock server.
Assessment Criteria
Criterion Does Not Meet
Expectations
Meets Expectation Exceeds Expectation
UI Design Chessboard lacks
interactivity
Mock Server
Setup
JavaScript
Logic
Server not functional Moves not
calculated correctly
API
Interaction
No interaction with a
server
The chessboard is
functional and
responsive
The server fetches and
updates data
Basic movement rules
implemented
Data is fetched and
updated
The chessboard is visually
appealing and intuitive
The server handles edge
cases and errors
The selected piece
movement rules are
implemented
Error handling and
optimised interactions