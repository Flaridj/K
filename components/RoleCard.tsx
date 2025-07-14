import React from "react";

interface RoleCardProps {
  role: string;
}

export default function RoleCard({ role }: RoleCardProps) {
  return (
    <div
      style={{
        marginTop: 12,
        padding: 16,
        backgroundColor: "#333",
        borderRadius: 14,
        color: "#ffa",
        fontWeight: "700",
        fontSize: "1.1rem",
        textAlign: "center",
        boxShadow: "0 0 10px #ffa",
        userSelect: "none",
      }}
    >
      Votre rôle : {role}
    </div>
  );
}
