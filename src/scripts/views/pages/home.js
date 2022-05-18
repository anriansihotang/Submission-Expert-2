import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
	  return `
	  <section class="content">
	  	<div class="latest">
		  <h1 class="titlelist">List Restaurant </h1>
		  <div class="list" id="restaurant"></div>
		</div>
	  </section>
	  `;
  },

  async afterRender() {
	  // Fungsi ini akan dipanggil setelah render()
	  const listRestaurant = await RestaurantSource.listRestaurant();
	  const restaurantContainer = document.querySelector('#restaurant');
	  listRestaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurants);
	  });
  },
};

export default Home;
