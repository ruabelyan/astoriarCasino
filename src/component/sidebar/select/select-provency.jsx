function SelectProvency({select}) {
    return (
        <select className="form-select" defaultValue={select}>
            <option value="all">Select Provency</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Dhanmondi">Dhanmondi</option>
            <option value="Bonani">Bonani</option>
        </select>
    );
}

export default SelectProvency;