import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

//Redux Store
import { fetchBooks } from "../../redux/slices/booksSlice";
import {
  setBooks,
  setStatus,
  setQueryFields,
} from "../../redux/slices/booksSlice";

const FilterOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  //Getting state from Redux store
  const { queryFields } = useSelector((state) => state.books);

  //Saving selected filters in an array called selectedFilters

  //code for only select one check-box Category
  function onlyOneCategory(e) {
    //code to remove the filter element from filter box and selectedFilters array when click on already checked checkbox

    var checkboxes = document.getElementsByName("category");
    checkboxes.forEach((item) => {
      if (item !== e.currentTarget) item.checked = false;
    });
  }

  //code for only select one check-box Language
  function onlyOneLanguage(e) {
    //code to remove the filter element from filter box and selectedFilters array when click on already checked checkbox

    // if (selectedFilters.includes("language") === false) {
    //   let categoryName = e.currentTarget.name;
    //   setSelectedFilters([...selectedFilters, categoryName]);
    // }
    console.log("Nomi");

    var checkboxes = document.getElementsByName("language");
    checkboxes.forEach((item) => {
      if (item !== e.currentTarget) item.checked = false;
    });
  }

  //code for only select one check-box Price Range
  function onlyOnePriceRange(e) {
    // if (selectedFilters.includes("priceRange") === false) {
    //   let categoryName = e.currentTarget.name;
    //   setSelectedFilters([...selectedFilters, categoryName]);
    // }

    var checkboxes = document.getElementsByName("priceRange");
    checkboxes.forEach((item) => {
      if (item !== e.currentTarget) item.checked = false;
    });
  }

  //logic to manipulate query string
  function manipulateQueryFields(e) {
    // console.log({
    //   ...queryFields,
    //   [e.currentTarget.name]: [e.currentTarget.value],
    // });
    //if category is present on queryField object than this expression will evaluate to false
    //if category is not present on queryField object than this expression will evaluate to tre
    if (!queryFields.hasOwnProperty("category")) {
      dispatch(
        setQueryFields({
          ...queryFields,
          [e.currentTarget.name]: [e.currentTarget.value],
        })
      );
    } else {
      //fale ----.current box is unchecked
    }

    if (!queryFields.hasOwnProperty("language")) {
      dispatch(
        setQueryFields({
          ...queryFields,
          [e.currentTarget.name]: [e.currentTarget.value],
        })
      );
    }

    if (!queryFields.hasOwnProperty("priceRange")) {
      dispatch(
        setQueryFields({
          ...queryFields,
          [e.currentTarget.name]: [e.currentTarget.value],
        })
      );
    }
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
          {Object.keys(queryFields).length > 0
            ? Object.keys(queryFields).map((item, index) => {
                return (
                  <div className="item" key={index}>
                    {item}
                    <span
                      className={item}
                      onClick={(e) => {
                        // delete the seleted item from queryFields
                        const newQueryFields = { ...queryFields };
                        delete newQueryFields[item];
                        dispatch(setQueryFields(newQueryFields));

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
                value="novel"
                onChange={(e) => {
                  onlyOneCategory(e);
                  manipulateQueryFields(e);
                  // console.log(e.target.checked);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
              />
              <label htmlFor="novel">Novel</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="business"
                value="business"
                onChange={(e) => {
                  onlyOneCategory(e);
                  manipulateQueryFields(e);
                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
              />
              <label htmlFor="business">Business</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="category"
                id="health"
                value={"health"}
                onChange={(e) => {
                  onlyOneCategory(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
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
                value={"urdu"}
                onChange={(e) => {
                  onlyOneLanguage(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
              />
              <label htmlFor="urdu">Urdu</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="language"
                id="english"
                value={"english"}
                onChange={(e) => {
                  onlyOneLanguage(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
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
                value={10}
                onChange={(e) => {
                  onlyOnePriceRange(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
              />
              <label htmlFor="under10">Under $10</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="under30"
                value={30}
                onChange={(e) => {
                  onlyOnePriceRange(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
              />
              <label htmlFor="under30">$10 - $30</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="under50"
                value={50}
                onChange={(e) => {
                  onlyOnePriceRange(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
              />
              <label htmlFor="under50">$30 - $50</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                name="priceRange"
                id="above50"
                value={1000}
                onChange={(e) => {
                  onlyOnePriceRange(e);
                  manipulateQueryFields(e);

                  if (e.currentTarget.checked === false) {
                    // delete the selected item from queryFields
                    const newQueryFields = { ...queryFields };
                    // console.log(newQueryFields);
                    delete newQueryFields[e.currentTarget.name];
                    // console.log(newQueryFields);
                    dispatch(setQueryFields(newQueryFields));
                  }
                }}
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
