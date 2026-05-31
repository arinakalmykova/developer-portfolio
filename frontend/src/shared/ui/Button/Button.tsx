import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({ loading, children, ...props }: Props) => {
  return (
    <button {...props} disabled={loading || props.disabled}>
      {loading ? "Загрузка..." : children}
    </button>
  );
};