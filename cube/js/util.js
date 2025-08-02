function typeInfo(sentence, if_del) {
  const terminal = document.getElementById('terminal');
  const typewriter = new Typewriter(terminal);

  if(if_del == true) {
    typewriter.typeString(sentence)
      .pauseFor(500)
      .deleteAll()
      .start();
  }
  else typewriter.typeString(sentence).start();
}

function cubeShuffle() {
  clearMovesInfo();

  const shuffle_step = cubeGL.shuffle(20);
  typeInfo("Shuffle: " + shuffle_step, true);

  const el = document.getElementById('scrambleMoves');
  if (el) el.textContent = `Scramble (${shuffle_step.split('').length}): ${shuffle_step}`;
}



function cubeReset() {
  // Clear Moves Info
  clearMovesInfo();

  updateCubeTwoPhase();
  const solve_step = cubeTwoPhase.solve();
  cubeGL.twistDuration = 0;
  cubeGL.twist(solve_step);
  setTimeout(() => cubeGL.twistDuration = 300, 1000);
}

function clearTerminal() {
  const terminal = document.getElementById('terminal');
  if (terminal) terminal.innerHTML = "";
}

function clearMovesInfo() {

  const steps = document.getElementById("stepMoves");
  const solveMethod = document.getElementById("solveMethod");
  const solution = document.getElementById("solutionMoves");
  const scramble = document.getElementById("scrambleMoves");

  if (steps) steps.innerHTML = "";
  if (solveMethod) solveMethod.textContent = "Solving method :";
  if (solution) solution.textContent = "Solution :";
  if (scramble) scramble.textContent = "Scramble: ";

  clearTerminal();
}


