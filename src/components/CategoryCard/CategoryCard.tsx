import type { Category } from '../../types/category.ts';
import './CategoryCard.scss';

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article
      className={`category-card${category.selected ? ' is-selected' : ''}`}
    >
      <div className="category-card__tile">
        <img src={category.image} alt="" />
      </div>

      <p>{category.name}</p>
    </article>
  );
}

export default CategoryCard;
