export const selectCategories = (allCategories, handleOnChangeCategory) => {
  return (
    <select name="" id="" onChange={handleOnChangeCategory}>
      <option value="full">full</option>
      {allCategories.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
