import type { Category } from '../../types/category.ts';
import CategoryCard from '../CategoryCard/CategoryCard.tsx';
import './CategoryList.scss';

const categories: Category[] = [
  {
    name: 'Tecnologia',
    image: '/assets/device.png',
    imageSize: 61,
    selected: true,
  },
  {
    name: 'Supermercado',
    image: '/assets/supermercados.png',
    imageSize: 61,
    selected: false,
  },
  {
    name: 'Bebidas',
    image: '/assets/whiskey.png',
    imageSize: 61,
    selected: false,
  },
  {
    name: 'Ferramentas',
    image: '/assets/ferramentas.png',
    imageSize: 61,
    selected: false,
  },
  {
    name: 'Saúde',
    image: '/assets/cuidados-de-saude.png',
    imageSize: 61,
    selected: false,
  },
  {
    name: 'Esportes e Fitness',
    image: '/assets/corrida.png',
    imageSize: 61,
    selected: false,
  },
  {
    name: 'Moda',
    image: '/assets/moda.png',
    imageSize: 63,
    selected: false,
  },
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
