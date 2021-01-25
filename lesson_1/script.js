'use strict';

let employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
let nameCourse = 'Базовый React';
let command = [];


employers.forEach((item) => {
	if (item.length > 0 && item.trim() != '') {
		command.push(item);
	}
});

command.map((item, index) => {
	item = item.toLowerCase().trim();
	item = item[0].toUpperCase() + item.slice(1);
	command[index] = item;
});

let data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

class CalcCash {
	constructor(own = 0, everyCash = []){
		this.own = own;
		this.everyCash = everyCash;
	}
	summCash(){
		let result = this.everyCash.reduce((sum, cur) => sum + cur, 0);
		return result;
	}
}
let lesson = new CalcCash(null, data.cash);

function makeBusiness(director, teacher = 'Максим', allModule, gang, course) {
	// teacher = teacher || 'Максим';
	let sumTech = data.react.concat(data.add, 'и другие');
	console.log(`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
	Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим: `);
	console.log.apply(null, sumTech);

}

makeBusiness.apply(null, ['Артем',, lesson.summCash(), command, nameCourse]);
