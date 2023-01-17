import React from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {
  const handleCategory = (category) => {
    handleSelectedCategory(category)
  }

  const categoryButton = categories.map(category => {
    return <button 
    key={category} 
    onClick={() => handleCategory(category)}
    className={category === selectedCategory ? "selected" : null}
    >{category}
    </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;