import React from "react";

interface Player {
  id: number;
  name: string;
  role?: string;
  alive: boolean;
}

interface PlayerListProps {
  players: Player[];
  revealRoles?: boolean;
}

export default function PlayerList({ players, revealRoles = false }: PlayerListProps) {
  return (
    <div style={{marginTop: 20}}>
      <h2>Joueurs ({players.length})</h2>
      <ul style={{listStyle: "none", padding: 0}}>
        {players.map((p) => (
          <li
            key={p.id}
            style={{
              padding: "6px 12px",
              backgroundColor: p.alive ? "#222" : "#600",
              marginBottom: 6,
              borderRadius: 8,
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "600",
              color: p.alive ? "#eee" : "#f66",
              filter: p.alive ? "none" : "grayscale(70%)",
            }}
          >
            <span>{p.name}</span>
            {revealRoles && <span style={{fontStyle: "italic"}}>{p.role}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
