import Button from "./Button";

function AddTodoForm() {
  return (
    <form className="">
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        placeholder="E.g. Buy groceries"
        type="text"
        className="border h-[45px] border-black/[12%] rounded-[5px]  my-[9px] text-[14px] block w-full px-[16px]"
      />
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
