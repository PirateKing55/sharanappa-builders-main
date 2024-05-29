import {
  getIndividualAminities,
  getIndividualAminitiesList,
  priceRange,
  bedBath,
  getIndividualCategories,
  setActiveSort,
} from "@/lib/product";
import FilterByPrice from "../FilterByPrice";
const SideBar = ({ products, getSortParams }) => {
  const aminities = getIndividualAminities(products);
  const aminitiesList = getIndividualAminitiesList(products);
  const priceRanges = priceRange(products);
  const bedBaths = bedBath(products);
  const categories = getIndividualCategories(products);

  return (
    <>
      <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
        <h3 className="mb-10">Advance Information</h3>
        <label className="mb-30">
          <small>About 9,620 results (0.62 seconds) </small>
        </label>
        {/* <!-- Advance Information widget --> */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">Property Type</h4>
          {aminities.length > 0 ? (
            <>
              <ul>
                {aminities &&
                  aminities.map((aminitie, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {aminitie.name}
                            <input
                              onClick={(e) => {
                                getSortParams("propertyTypes", aminitie.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                            {/* {products[key < aminities.length ? key : 1].price} */}
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}

          <hr />
          <h4 className="ltn__widget-title">Amenities</h4>
          {aminitiesList.length > 0 ? (
            <>
              <ul>
                {aminitiesList &&
                  aminitiesList.map((aminitie, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {aminitie.name}
                            <input
                              onClick={(e) => {
                                getSortParams("AmenitiesList", aminitie.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                            {/* {products[key < aminities.length ? key : 1].price} */}
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}

          <hr />
          <h4 className="ltn__widget-title">Price Renge</h4>
          {priceRanges.length > 0 ? (
            <>
              <ul>
                {priceRanges &&
                  priceRanges.map((price, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {price.name}
                            <input
                              onClick={(e) => {
                                getSortParams("AmenitiesList", price.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                            {/* {products[key < aminities.length ? key : 1].price} */}
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}

          {/* <hr /> */}
          {/* <!-- Price Filter Widget --> */}
          <div className="ltn__price-filter-widget mt-30">
            <h4 className="ltn__widget-title">Filter by price</h4>
            <div className="price_filter">
              <FilterByPrice />
            </div>
          </div>
          <hr />
          <h4 className="ltn__widget-title">Bed/bath</h4>
          {bedBaths.length > 0 ? (
            <>
              <ul>
                {bedBaths &&
                  bedBaths.map((bath, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {bath.name}
                            <input
                              onClick={(e) => {
                                getSortParams("AmenitiesList", bath.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                            {/* {products[key < aminities.length ? key : 1].price} */}
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}
          <hr />
          <h4 className="ltn__widget-title">Catagory</h4>
          {categories.length > 0 ? (
            <>
              <ul>
                {categories &&
                  categories.map((categorie, key) => {
                    return (
                      <li key={key}>
                        <div>
                          <label className="checkbox-item">
                            {categorie.name}
                            <input
                              onClick={(e) => {
                                getSortParams("category", categorie.name);
                                setActiveSort(e);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          <span className="categorey-no">
                            {/* {products[key < aminities.length ? key : 1].price} */}
                          </span>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </>
          ) : (
            "No categories found"
          )}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
