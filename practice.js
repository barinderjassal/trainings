/*
fibonacci = function ( ) {
	var memo = [0, 1];
	var fib = function (n) {
		debugger;
		var result = memo[n];
		console.log('before calling again :: ' + result);
		if (typeof result !== 'number') {
			result = fib(n - 1) + fib(n - 2);
			console.log('after subtracting fac :: ' + result);
			memo[n] = result;
			console.log("value of memo["+n+"] :: " + memo[n]);
		}
		return result;
	};
	return fib;
}();
fibonacci(6);

*/

/*
	Fibonacci Series
*/
var getFib = function (n) {
	if (n <= 0) {
		alert('Number should be greater than 0');
	} else if (n == 1) {
		return 0;
	} else {
		var resultArr = [0, 1];
		for (var i=2; i<n; i++) {
			var sum = resultArr[i-2] + resultArr[i-1];
			resultArr.push(sum);
		}
		return resultArr;
	}
};
getFib(6);


/*
	count of each word
*/
function getCount(str) {
	var str = str.split(' ');
	var obj = {};
	for (var i=0; i < str.length; i++) {
		var a = str[i];
		if (!obj[a]) {
			obj[a] = 1;
		} else {
			obj[a]++;
		}
	}
	console.log(obj);
}
getCount('is is is is is am am are hello the the the hello');

/*
	count of each word
*/

function getCountofWords(str) {
	var str = str.split(' ');
	var obj ={};
	for (var i = 0; i < str.length; i++) {
		for (var j = i; j < str.length; j++) {
			debugger;
			if (str[i] == str[j]) {
				console.log(str[i]);
			}
		}
	}
};
getCountofWords('is is is am am hello');

/*
	sum of sub Array
*/
 function getSumObject(arr) {
	var subArray = [];
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] - arr[i+1] == -1) {
			subArray.push(arr[i]);
		}
	}
	console.log(subArray);
 }
getSumObject([1,2,3,4,7,8,10,11,3,4,5]);

/*
	Bubble sort
*/

function bubbleSort(arr) {
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length-1-i; j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
var arr = [91, 75, 60, 45, 23, 25];
var x = bubbleSort(arr);
console.log(x);

/*
====================
*/

(function () {
	setTimeout(function() {
		console.log(2)
	}, 100);
	for(var i=0; i< 10000; i++) {
		console.log('*');
	}
	setTimeout(function () {
		console.log(3)
	}, 0);              
})();

/*
================
*/
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.setEmploymentStatus = function (status) {
	var status = status;
	console.log('Hi' + this.name+ ', you are ' + status);
}

var p1 = new person('ABC', 25);
p1.setEmploymentStatus(true);

