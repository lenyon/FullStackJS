//import { State } from "./hooks/01-useState";
import { Reducer } from "./hooks/02-useReducer";

export function App() {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="w-full max-w-sm">
        <Reducer />
      </div>
    </div>
  );
}
