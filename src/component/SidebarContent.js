import React from "react";

const SidebarContent = ({ data, selectedLocations, setSelectedLocations }) => {

  const handleCheckboxChange = (event) => {
    const { name, checked, value } = event.target;

    // setFilter({
    //   ...filter,
    //   location: {
    //     ...filter.location,
    //     [name]: {
    //       checked,
    //       value
    //     }
    //   }
    // });

    if (checked) {
      setSelectedLocations((prevSelectedLocations) => [...prevSelectedLocations, value]);
    } else {
      const newLocations = selectedLocations.filter((e) => e !== value);
      setSelectedLocations(newLocations);
    }
  };
  return (
    <fieldset className="shopee-filter-group shopee-facet-filter">
      <legend className="shopee-filter-group__header">Theo Danh Mục</legend>
      {data.map((e, i) => {
        return (
          <div className="shopee-filter shopee-checkbox-filter">
            <label className="shopee-checkbox">
              <div className="shopee-checkbox__box">
                <input type="checkbox" name="" value={e?.value} onChange={handleCheckboxChange} />
              </div>
              <span className="shopee-checkbox__label">{e?.title}</span>
            </label>
          </div>
        );
      })}
      <button aria-expanded="false" className="shopee-filter-group__toggle-btn" aria-label="">
        Thêm
        <svg enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon icon-arrow-down">
          <g>
            <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z"></path>
          </g>
        </svg>
      </button>
    </fieldset>
  );
};

export default SidebarContent;
