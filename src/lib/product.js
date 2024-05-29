import slugify from "slugify";
// get products
export const getProducts = (products, category, type, limit) => {
  const finalProducts = category
    ? products.filter(
      (product) => product.category.filter((single) => single === category)[0]
    )
    : products;

  if (type && type === "featured") {
    const featuredProducts = finalProducts.filter((single) => single.featured);
    return featuredProducts.slice(0, limit ? limit : featuredProducts.length);
  }

  if (type && type === "coreFeature") {
    const coreFeatures = finalProducts.filter((single) => single.coreFeature);
    return coreFeatures.slice(0, limit ? limit : coreFeatures.length);
  }


  if (type && type === "carousel") {
    const carousel = finalProducts.filter((single) => single.carousel);
    return carousel.slice(0, limit ? limit : carousel.length);
  }


  if (type && type === "deal") {
    const dealProducts = finalProducts.filter((single) => single.dealEnd);
    return dealProducts.slice(0, limit ? limit : dealProducts.length);
  }

  if (type && type === "new") {
    const newProducts = finalProducts.filter((single) => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type === "popular") {
    return (
      finalProducts &&
      finalProducts
        .sort((a, b) => {
          return b.saleCount - a.saleCount;
        })
        .slice(0, limit ? limit : finalProducts.length)
    );
  }

  if (type && type === "country") {
    return (
      finalProducts &&
      finalProducts
        .sort((a, b) => {
          return b.saleCount - a.saleCount;
        })
        .slice(0, limit ? limit : finalProducts.length)
    );
  }
  if (type && type === "topRated") {
    return (
      finalProducts &&
      finalProducts
        .sort((a, b) => {
          return b.rating - a.rating;
        })
        .slice(0, limit ? limit : finalProducts.length)
    );
  }
  if (type && type === "sale") {
    const saleItems =
      finalProducts &&
      finalProducts.filter((single) => single.discount && single.discount > 0);
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return (
    finalProducts &&
    finalProducts.slice(0, limit ? limit : finalProducts.length)
  );
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : price;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(
    (single) =>
      single.id === product.id
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        (single) =>
          single.id === product.id

      )[0].quantity;
    } else {
      return cartItems.filter((single) => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};

//get products based on category
export const getSortedProducts = (products, sortType, sortValue) => {
  if (products && sortType && sortValue) {
    if (sortType === "propertyTypes") {
      return products.filter(
        (product) =>
          product.propertyTypes.filter((single) => single === sortValue)[0]
      );
    }
    if (sortType === "category") {
      return products.filter(
        (product) =>
          product.category.filter((single) => single === sortValue)[0]
      );
    }
    if (sortType === "tag") {
      return products.filter(
        (product) => product.tag.filter((single) => single === sortValue)[0]
      );
    }

    if (sortType === "filterSort") {
      let sortProducts = [...products];
      if (sortValue === "default") {
        return sortProducts;
      }
      if (sortValue === "priceHighToLow") {
        return sortProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sortValue === "priceLowToHigh") {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
    }
  }
  return products;
};

// get individual element
const getIndividualItemArray = (array) => {
  let individualItemArray = array.filter((v, i, self) => {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual element object
const getIndividualColorObjectArray = (array) => {
  let individualObjectArray = array.filter((v, i, self) => {
    return (
      i ===
      self.findIndex(
        (t) => t.colorName === v.colorName && t.colorCode === v.colorCode
      )
    );
  });
  return individualObjectArray;
};

// get individual categories
export const getIndividualCategories = (products) => {
  let productCategories = [];
  products &&
    products.map((product) => {
      return (
        product.category &&
        product.category.map((single) => {
          return productCategories.push(single);
        })
      );
    });
  var individualProductCategories = [];
  var obj = {};
  var newArr = [];

  function countItems(productCategories, val) {
    var count = 0,
      i;
    while ((i = productCategories.indexOf(val, i)) != -1) {
      ++count;
      ++i;
    }
    return count;
  }

  productCategories.forEach((item) => {
    let count = countItems(productCategories, item);
    var objValues = Object.values(obj);
    newArr.push(objValues[0]);
    if (newArr.indexOf(item) !== -1) return;
    obj = {
      name: item,
      count: count,
    };
    individualProductCategories.push(obj);
  });
  return individualProductCategories;
};

// get individual Aminities
export const getIndividualAminities = (products) => {
  let aminities = [];
  products &&
    products.map((product) => {
      return (
        product.propertyTypes &&
        product.propertyTypes.map((single) => {
          return aminities.push(single);
        })
      );
    });
  var individualAminities = [];
  var obj = {};
  var newArr = [];

  function countItems(aminities, val) {
    var count = 0,
      i;
    while ((i = aminities.indexOf(val, i)) != -1) {
      ++count;
      ++i;
    }
    return count;
  }

  aminities.forEach((item) => {
    let count = countItems(aminities, item);
    var objValues = Object.values(obj);
    newArr.push(objValues[0]);
    if (newArr.indexOf(item) !== -1) return;
    obj = {
      name: item,
      count: count,
    };
    individualAminities.push(obj);
  });
  return individualAminities;
};
// get individual AminitiesList
export const getIndividualAminitiesList = (products) => {
  let aminitiesList = [];
  products &&
    products.map((product) => {
      return (
        product.AmenitiesList &&
        product.AmenitiesList.map((single) => {
          return aminitiesList.push(single);
        })
      );
    });
  var individualAminitiesList = [];
  var obj = {};
  var newArr = [];

  function countItems(aminitiesList, val) {
    var count = 0,
      i;
    while ((i = aminitiesList.indexOf(val, i)) != -1) {
      ++count;
      ++i;
    }
    return count;
  }

  aminitiesList.forEach((item) => {
    let count = countItems(aminitiesList, item);
    var objValues = Object.values(obj);
    newArr.push(objValues[0]);
    if (newArr.indexOf(item) !== -1) return;
    obj = {
      name: item,
      count: count,
    };
    individualAminitiesList.push(obj);
  });
  return individualAminitiesList;
};


// get individual priceRange
export const priceRange = (products) => {
  let priceRange = [];
  products &&
    products.map((product) => {
      return (
        product.priceRange &&
        product.priceRange.map((single) => {
          return priceRange.push(single);
        })
      );
    });
  var individualPriceRange = [];
  var obj = {};
  var newArr = [];

  function countItems(priceRange, val) {
    var count = 0,
      i;
    while ((i = priceRange.indexOf(val, i)) != -1) {
      ++count;
      ++i;
    }
    return count;
  }

  priceRange.forEach((item) => {
    let count = countItems(priceRange, item);
    var objValues = Object.values(obj);
    newArr.push(objValues[0]);
    if (newArr.indexOf(item) !== -1) return;
    obj = {
      name: item,
      count: count,
    };
    individualPriceRange.push(obj);
  });
  return individualPriceRange;
};


// get individual bedBath
export const bedBath = (products) => {
  let priceRange = [];
  products &&
    products.map((product) => {
      return (
        product.bedBath &&
        product.bedBath.map((single) => {
          return priceRange.push(single);
        })
      );
    });
  var individualPriceRange = [];
  var obj = {};
  var newArr = [];

  function countItems(priceRange, val) {
    var count = 0,
      i;
    while ((i = priceRange.indexOf(val, i)) != -1) {
      ++count;
      ++i;
    }
    return count;
  }

  priceRange.forEach((item) => {
    let count = countItems(priceRange, item);
    var objValues = Object.values(obj);
    newArr.push(objValues[0]);
    if (newArr.indexOf(item) !== -1) return;
    obj = {
      name: item,
      count: count,
    };
    individualPriceRange.push(obj);
  });
  return individualPriceRange;
};

// get individual tags
export const getIndividualTags = (products) => {
  let productTags = [];
  products &&
    products.map((product) => {
      return (
        product.tag &&
        product.tag.map((single) => {
          return productTags.push(single);
        })
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

export const setActiveSort = (e) => {
  const filterButtons = document.querySelectorAll(
    ".widget__categories button, .widget__sizes button, .widget__colors button, .widget__tags button"
  );
  filterButtons.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const setActiveLayout = (e) => {
  const gridSwitchBtn = document.querySelectorAll(".products-view button");
  gridSwitchBtn.forEach((item) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

// get stock of cart item
export const cartItemStock = (item, color, size) => {
  if (item.stock) {
    return item.stock;
  }
};


export function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
      (acc, val) =>
        acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
      []
    )
    : arr.slice();
}



export const productSlug = (text) => {
  return slugify(text, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.,?()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
};

export const getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

export const getClosest = function (elem, selector) {
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
};

export const slideUp = (element, duration = 500) => {
  return new Promise(function (resolve) {
    element.style.height = element.offsetHeight + "px";
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = duration + "ms";
    element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    window.setTimeout(function () {
      element.style.display = "none";
      element.style.removeProperty("height");
      element.style.removeProperty("padding-top");
      element.style.removeProperty("padding-bottom");
      element.style.removeProperty("margin-top");
      element.style.removeProperty("margin-bottom");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
      resolve(false);
    }, duration);
  });
};

export const slideDown = (element, duration = 500) => {
  return new Promise(function () {
    element.style.removeProperty("display");
    let display = window.getComputedStyle(element).display;

    if (display === "none") display = "block";

    element.style.display = display;
    let height = element.offsetHeight;
    element.style.overflow = "hidden";
    element.style.height = 0;
    element.style.paddingTop = 0;
    element.style.paddingBottom = 0;
    element.style.marginTop = 0;
    element.style.marginBottom = 0;
    element.offsetHeight;
    element.style.transitionProperty = `height, margin, padding`;
    element.style.transitionDuration = duration + "ms";
    element.style.height = height + "px";
    element.style.removeProperty("padding-top");
    element.style.removeProperty("padding-bottom");
    element.style.removeProperty("margin-top");
    element.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      element.style.removeProperty("height");
      element.style.removeProperty("overflow");
      element.style.removeProperty("transition-duration");
      element.style.removeProperty("transition-property");
    }, duration);
  });
};

export const slideToggle = (element, duration = 500) => {
  if (window.getComputedStyle(element).display === "none") {
    return slideDown(element, duration);
  } else {
    return slideUp(element, duration);
  }
};
