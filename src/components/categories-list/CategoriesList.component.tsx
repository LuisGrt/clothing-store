import CategoryItem from '../category-item/CategoryItem.component';
import React from 'react';

import './CategoriesList.styles.scss';

interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

const CategoriesList = () => {
  const categories: Category[] = [
    {
      'id': 1,
      'title': 'hats',
      'imageUrl': 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      'id': 2,
      'title': 'jackets',
      'imageUrl': 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      'id': 3,
      'title': 'sneakers',
      'imageUrl': 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      'id': 4,
      'title': 'womens',
      'imageUrl': 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      'id': 5,
      'title': 'mens',
      'imageUrl': 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];

  return (
    <section className="categories">
      {categories.map((category: Category) => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </section>
  );
};

export default CategoriesList;