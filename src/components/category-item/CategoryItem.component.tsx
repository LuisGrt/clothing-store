import React from 'react';
import './CategoryItem.styles.scss';

interface CategoryItemProps {
  title: string;
  imageUrl: string;
}

const CategoryItem = ({title, imageUrl}: CategoryItemProps) => {
  return (
    <div className="category">
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;