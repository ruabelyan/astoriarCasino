function SelectLanguages({ select, onChange }) {
  return (
    <select onChange={(e) => console.log(e.target.value)} className="form-select" defaultValue={select}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="arm">ARM</option>
    </select>
  );
}

export default SelectLanguages;
