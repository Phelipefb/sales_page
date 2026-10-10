import type { Category } from '../../types/category.ts';
import CategoryCard from '../CategoryCard/CategoryCard.tsx';
import './CategoryList.scss';

const categories: Category[] = [
  { name: 'Tecnologia', image: '/assets/device.png', selected: true },
  { name: 'Supermercado', image: '/assets/supermercados.png', selected: false },
  { name: 'Bebidas', image: '/assets/whiskey.png', selected: false },
  { name: 'Ferramentas', image: '/assets/ferramentas.png', selected: false },
  { name: 'Saúde', image: '/assets/cuidados-de-saude.png', selected: false },
  { name: 'Esportes e Fitness', image: '/assets/corrida.png', selected: false },
  { name: 'Moda', image: '/assets/moda.png', selected: false },
];

function CategoryList() {
  return (
    <section className="category-list" aria-label="Categorias de produtos">
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </section>
  );
}

export default CategoryList;
