import type { Category } from '../../types/category.ts';
import './CategoryCard.scss';

interface CategoryCardProps {
  category: Category;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div
      className={`category-card${category.selected ? ' is-selected' : ''}`}
    >
      <div className="category-card__tile">
        <img
          src={category.image}
          alt=""
          width={category.imageSize}
          height={category.imageSize}
        />
      </div>

      <p>{category.name}</p>
    </div>
  );
}

export default CategoryCard;
