import React from "react";

function CategoryFilter({ categories, onSelectCategory, selectedCategory }) {

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;