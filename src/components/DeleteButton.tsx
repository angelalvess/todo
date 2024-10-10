import React from "react";

type DeleteButtonProps = {
  deleteTask: () => void;
};

function DeleteButton({ deleteTask }: DeleteButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        deleteTask();
      }}
    >
      ❌
    </button>
  );
}

export default DeleteButton;
