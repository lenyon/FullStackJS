import { Button } from "@/components/ui/button";
import { useState } from "react";

export function State() {
  const [counter, setCounter] = useState(0);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div>
      <div className="space-x-4">
        <Button onClick={handleMinus}>-</Button>
        <span>Counter = {counter}</span>
        <Button onClick={handlePlus}>+</Button>
      </div>
    </div>
  );
}
