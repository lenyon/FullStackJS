import { useUsers } from "./hooks/useUsers";

export function Users() {
  const { users, isLoading, refetch, isFetching, error } = useUsers();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="bg-zinc-950 p-4">
        <button
          type="button"
          className="bg-white text-black px-4 py-2 rounded-lg"
          onClick={() => refetch()}
        >
          Listar Usuarios
        </button>

        {isLoading && <div>Carregando...</div>}
        {!isLoading && isFetching && <div>Atualizando Dados...</div>}
        {error && <h1 className="text-red-500">{error.toString()}</h1>}

        {users.map((user) => (
          <div key={user.id}>
            <strong className="block">{user.name}</strong>
            <small>{user.email}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
