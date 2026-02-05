/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "@/components/ui/button";
import { useReducer, useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export function Reducer() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      console.log(action);
      return {
        user: {
          id: 0,
          name: "leo",
          age: 28,
        },
        isUnderAge: false,
      };
    },
    {
      user: {
        id: 0,
        name: "leo",
        age: 28,
      },
      isUnderAge: false,
    },
  );

  function handleChangeUser() {
    dispatch("changeUser");
  }

  function handleRefreshAge() {
    dispatch("refreshAge");
  }

  return (
    <div>
      <h1>Usuario:{state.user.name}</h1>
      <h2>Idade:{state.user.age}</h2>
      <h3>Menor: {state.isUnderAge ? "sim" : "nao"}</h3>
      <div className="space-x-4">
        <Button onClick={handleChangeUser}>Trocar usuario</Button>
        <Button onClick={handleRefreshAge}>Atualizar idade</Button>
      </div>
    </div>
  );
}
