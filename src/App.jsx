import React, { useMemo, useState } from "react";
import StartScreen from "./components/Screens/StartScreen";
import GameScreen from "./components/Screens/GameScreen";
import ResultScreen from "./components/Screens/ResultScreen";
import { getSymbolSet } from "./utils/symbolSets";

const SCREENS = {
  START: "start",
  GAME: "game",
  RESULT: "result"
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.START);
  const [level, setLevel] = useState(1);
  const [pickedSetKey, setPickedSetKey] = useState("numbers");
  const [customSymbols, setCustomSymbols] = useState("");
  const [lastResult, setLastResult] = useState(null);

  const symbolSet = useMemo(
    () => getSymbolSet(pickedSetKey, customSymbols),
    [pickedSetKey, customSymbols]
  );

  const startGame = () => {
    setLevel(1);
    setLastResult(null);
    setScreen(SCREENS.GAME);
  };

  const handleComplete = (result) => {
    setLastResult(result);
    setScreen(SCREENS.RESULT);
  };

  const handleNextLevel = () => {
    setLevel((prev) => prev + 1);
    setScreen(SCREENS.GAME);
  };

  const handleRetry = () => {
    setScreen(SCREENS.GAME);
  };

  const handleBackToStart = () => {
    setScreen(SCREENS.START);
  };

  return (
    <div className="app-shell">
      {screen === SCREENS.START && (
        <StartScreen
          pickedSetKey={pickedSetKey}
          onPickSet={setPickedSetKey}
          customSymbols={customSymbols}
          onCustomSymbolsChange={setCustomSymbols}
          onStart={startGame}
        />
      )}
      {screen === SCREENS.GAME && (
        <GameScreen
          level={level}
          symbolSet={symbolSet}
          onComplete={handleComplete}
          onQuit={handleBackToStart}
        />
      )}
      {screen === SCREENS.RESULT && lastResult && (
        <ResultScreen
          result={lastResult}
          level={level}
          onNextLevel={handleNextLevel}
          onRetry={handleRetry}
          onQuit={handleBackToStart}
        />
      )}
    </div>
  );
}
