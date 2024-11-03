const breakfastMenu = ['Pancakes - $68', 'Eggs benedict - $102', 'Oatmeal - $120', 'Frittata - $80'];
const mainCourseMenu = ['Steak - $120', 'Pasta - $100', 'Burger - $130', 'Salmon - $300'];
const dessertMenu = ['Cake - $50', 'Ice Cream - $40', 'Pudding - $40', 'Fruit Salad - $30'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;