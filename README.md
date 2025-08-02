🧊 Rubik's Cube Solver

  An interactive, web-based Rubik’s Cube solver that allows users to input their cube's state and receive a step-by-step solution using advanced solving algorithms.

💡 Project Overview

  This project was built for [AeroHack] with the goal of making Rubik’s Cube solving intuitive and accessible. By leveraging the Two-Phase Algorithm and a 3D visual cube interface, users can input their current cube configuration and solve it in real-time.

🚀 Features

  🧩 3D Rubik’s Cube Visualization

  🔄 Interactive Input – Customize the cube state directly via the UI.

  🧠 Two-Phase Solving Algorithm – Efficient and optimal solution generator.

  📱 Responsive Design – Works seamlessly on desktop and mobile.

🛠️ Tech Stack

  Frontend: HTML, CSS, JavaScript

  Libraries:

    cubejs – Solving algorithm

    cuber.js – 3D Cube rendering and interaction

📂 Project Structure

rubiks-cube-solver/
  
├── index.html                                                               # Main entry point

├── assets/                                                                  # Images and icons

├── cube/                                                                    # Core solving logic and input handling

│   └── js/

├── lib/                                                                     # Third-party libraries

│   └── cubejs/

│   └── cuber/

🧪 How to Use

  1. Clone or Download this repository:
    git clone https://github.com/Sowjanya732/rubiks-cube-solver.git

  2. Open index.html in your browser.

  3. Customize the cube state using the interactive interface.

  4. Click Solve to get a step-by-step solution.

🧠 Algorithm: Two-Phase Solver

  The core solver uses the Kociemba’s Two-Phase Algorithm, which efficiently finds near-optimal solutions in under a second. This method divides the solving process into two phases:

    1. Reduce the cube to a subset of positions.

    2. Solve the remaining subset using optimized moves.
📜 License

  This project is licensed under the MIT License.
