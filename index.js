// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));	//false
console.log(Array.isArray(b));	//true


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a.forEach(function(item, index, arr){
	arr[index] = item * 2;
});
console.log(a);	//[2,4,6,8,10]
/* //这里还可以用map()，写法如下：
	a = a.map(function(item) {
		return item * 2;
	});
	console.log(a);	//[2,4,6,8,10]
*/

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var choose = 1;
switch(choose) {
	case 1: console.log(colors.join(' '));break;	//Red Green White Black
	case 2: console.log(colors.join('+'));break;	//Red+Green+White+Black
	case 3: console.log(colors.join(','));break;	//Red,Green,White,Black
	default: break;
}

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function(x, y) {	//从大到小
	if(x > y) return -1;
	if(x < y) return 1;
	return 0;
});
console.log(a);	//[10,8,5,4,1]

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var maxCount = 0;
var maxVal = a[0];
var countObj = {};	//用一个对象存储每个值的计数
a.reduce(function(obj, currentValue) {	//回调函数，第一个参数是reduce函数的第二个传入的参数，也就是countObj，第二个参数是a数组的第一个值。
	obj[currentValue] ? obj[currentValue]++ : obj[currentValue] = 1;	//对a数组的每一项进行计数，存储到obj数组里
	if(obj[currentValue] > maxCount) {
		maxCount = obj[currentValue];
		maxVal = currentValue;
	}
	return obj;
}, countObj);	//reduce函数的第二个参数，也就是传给回调函数的第一个参数
console.log(maxVal);	// 'a'
