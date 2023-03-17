// var h1 = document.querySelector('h1')

// h1.style.cssText = 'color: red; padding: 35px;'
// h1.innerText = 'Something Else'

// var span = document.createElement('span');

// span.innerText = 'Some Span';

// h1.append(span);

// function jQuery(selector){
//     var el = document.querySelector(selector);
//     var methodStack = {};

//     methodStack.text = function(str){
//         el.innerText = str;
//         //this allows us to chain our methods
//         return methodStack;
//     }

//     methodStack.css = function(prop, val){
//         el.style[prop] = val;

//         return methodStack;
//     }

//     return methodStack;
// }

// jQuery('h1').text('Something Else').css('color', 'red');

//we used jQuery library to short hand the function
//the $ is calling the same function above but is much more simple
// $('h1').text('Changed!').css({
//     color: 'red',
//     backgroundColor: '#444',
//     padding: '25px 30px'
// }).append('<span> This is added to the end!</span>');


// Vanilla way over creating button
// var wrapper = document.querySelector('.wrapper');
// var btn = document.createElement('button');
// btn.innerText = 'Submit';

// wrapper.append(btn);

// $('h1').text('Changed!')

// jQuery way to make button
// $('.wrapper').append('<button>Submit</button>');


//Some practice, this is a fast way of creating and adding elements to your html
// $('.wrapper').append('<h3>Hello This is Adding an Element Via jQuery!</h3>');

//Vanilla way of changing list items
// var lis = document.querySelectorAll('li');

// for (var li of lis){
//     li.innerText = 'changed';
// }


// jQuery way of changing all elements of a list
// var lis = $('li');

// lis.text('Something Else');

