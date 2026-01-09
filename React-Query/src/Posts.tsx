//import { useQuery } from "@tanstack/react-query";
//import type { IUser } from "./types";
//import { sleep } from "./sleep";

import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { sleep } from "./sleep";
import type { IUser } from "./types";

export function Posts() {
  //return JSON.stringify(data, null, 2)
  const queryClient = useQueryClient();

  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ["users"],
      queryFn: async (): Promise<IUser[]> => {
        await sleep();
        const response = await fetch("http://localhost:3000/users");
        return response.json();
      },
    });
  }

  return (
    <pre>
      <h1>Posts</h1>
      <br />
      <br />
      <Link to="/" onMouseEnter={handleMouseEnter}>
        {" "}
        Ir para Usuario
      </Link>
    </pre>
  );
}
