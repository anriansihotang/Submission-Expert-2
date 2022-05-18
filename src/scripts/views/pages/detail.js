import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
	  return `
		<h2 class="detailtitle">Detail Page</h2>
		<div id="detailRestaurant" class="restaurantDetail">
		</div>
	  `;
  },

  async afterRender() {
	  // Fungsi ini akan dipanggil setelah render()
	  const url = UrlParser.parseActiveUrlWithoutCombiner();
	  const restaurant = await RestaurantSource.detailRestaurant(url.id);
	  const restaurantContainer = document.querySelector('#detailRestaurant');
	  restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
