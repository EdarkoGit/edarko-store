export const selectCategories = (allCategories) => {
  return (
    <select name="" id="">
      <option value="full">full</option>
      {allCategories.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
