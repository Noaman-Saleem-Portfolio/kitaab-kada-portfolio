import React, { useState, useRef } from "react";

const FilterOptions = () => {
  const navRef = useRef(null);
  //Saving selected filters in an array called selectedFilters
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isCheckedCategory, setIsCheckedCategory] = useState(false);
  const [isCheckedLanguage, setIsCheckedLanguage] = useState(false);
  const [isCheckedPrice, setIsCheckedPrice] = useState(false);

  //code for only select one check-box Category
  function onlyOneCategory(e) {
    //code to remove the filter element from filter box and selectedFilters array when click on already checked checkbox
    if (selectedFilters.includes("category") === false) {
      let categoryName = e.currentTarget.name;
      setSelectedFilters([...selectedFilters, categoryName]);
    }
    var checkboxes = document.getElementsByName("category");
    checkboxes.forEach((item) => {
      if (item !== e.currentTarget) item.checked = false;
    });
  }

  //code for only select one check-box Language
  function onlyOneLanguage(e) {
    //code to remove the filter element from filter box and selectedFilters array when click on already checked checkbox

    if (selectedFilters.includes("language") === false) {
      let categoryName = e.currentTarget.name;
      setSelectedFilters([...selectedFilters, categoryName]);
    }

    var checkboxes = document.getElementsByName("language");
    checkboxes.forEach((item) => {
      if (item !== e.currentTarget) item.checked = false;
    });
  }

  //code for only select one check-box Price Range
  function onlyOnePriceRange(e) {
    if (selectedFilters.includes("priceRange") === false) {
      let categoryName = e.currentTarget.name;
      setSelectedFilters([...selectedFilters, categoryName]);
    }
    var checkboxes = document.getElementsByName("priceRange");
    checkboxes.forEach((item) => {
      if (item !== e.currentTarget) item.checked = false;
    });
  }

  return (
    <>
      <div className="selected-box">
        <div className="selected">
          <h6>Selected</h6>
          <p>Clear</p>
        </div>
        <hr />
        <div className="items">
          {selectedFilters.length > 0
            ? selectedFilters.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    {item}
                    <span
                      className={item}
                      onClick={(e) => {
                        setSelectedFilters(
                          selectedFilters.filter(
                            (item) => item !== e.currentTarget.className
                          )
                        );

                        //when x click uncheck the relevent checkbox
                        var checkboxes = document.getElementsByName(
                          e.currentTarget.className
                        );
                        checkboxes.forEach((item) => {
                          item.checked = false;
                        });
                      }}>
                      x
                    </span>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
      <div className="filters-box">
        <div className="filters">
          <h6>Refine Your Search</h6>
          <p>Reset</p>
        </div>
        <hr />
        <div className="items-box">
          <div className="item">
            <h6>Categories</h6>
            <div className="checkbox">
              <input
                name="category"
                type="checkbox"
                id="novel"
                onChange={(e) => onlyOneCategory(e)}
              />
              <label htmlFor="novel">Novel</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="business"
                onClick={(e) => onlyOneCategory(e)}
              />
              <label htmlFor="business">Business</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="health"
                onClick={(e) => onlyOneCategory(e)}
              />
              <label htmlFor="health">Health</label>
            </div>
          </div>

          <div className="item">
            <h6>Language</h6>
            <div className="checkbox">
              <input
                type="checkbox"
                name="language"
                id="urdu"
                onClick={(e) => onlyOneLanguage(e)}
              />
              <label htmlFor="urdu">Urdu</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="language"
                id="english"
                onClick={(e) => onlyOneLanguage(e)}
              />
              <label htmlFor="english">English</label>
            </div>
          </div>

          <div className="item">
            <h6>Price Range</h6>
            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="under10"
                onClick={(e) => onlyOnePriceRange(e)}
              />
              <label htmlFor="under10">Under $10</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="under30"
                onClick={(e) => onlyOnePriceRange(e)}
              />
              <label htmlFor="under30">$10 - $30</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="under50"
                onClick={(e) => onlyOnePriceRange(e)}
              />
              <label htmlFor="under50">$30 - $50</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="above50"
                onClick={(e) => onlyOnePriceRange(e)}
              />
              <label htmlFor="above50">$50 & Above</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterOptions;
