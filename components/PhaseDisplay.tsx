import React from "react";

interface PhaseDisplayProps {
  phase: "waiting" | "night" | "day" | "ended";
}

export default function PhaseDisplay({ phase }: PhaseDisplayProps) {
  let message = "";

  switch (phase) {
    case "waiting":
      message = "En attente de joueurs...";
      break;
    case "night":
      message = "Nuit : Les loups-garous choisissent leur victime.";
      break;
    case "day":
      message = "Jour : Discutez et votez pour éliminer un suspect.";
      break;
    case "ended":
      message = "La partie est terminée.";
      break;
  }

  return (
    <div
      style={{
        marginTop: 20,
        padding: 12,
        backgroundColor: "#222",
        borderRadius: 10,
        fontWeight: "700",
        fontSize: "1.2rem",
        textAlign: "center",
        color: "#ffa",
        userSelect: "none",
      }}
    >
      {message}
    </div>
  );
}
