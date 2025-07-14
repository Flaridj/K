import React from "react";
import "./Button3D.css";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button3D({ children, ...props }: Button3DProps) {
  return (
    <button {...props} className="btn-3d">
      {children}
    </button>
  );
}
