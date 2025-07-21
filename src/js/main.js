import Alpine from 'alpinejs'
import blogData from './blogData.js'

window.Alpine = Alpine;
Alpine.data('blogData', blogData);
Alpine.start();