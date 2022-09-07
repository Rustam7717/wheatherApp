const age = prompt('What is your age?');
const temp = prompt('What is the temperature today?');

if (age>=1 && age<=20 && temp>=10 && temp<=20) {
    alert('Your age: '+ age  + '  Temp is:  ' + temp  + ' It is better to stay at home');

}else if(age>10 && age<=60 && temp>=21 && temp<=36 ) {
    alert('Your age:  '+ age  + '  Temp is: ' + temp +  ' Good time to take a walk');

}else if(age>= 10 && temp>=37){
    alert('Your age:  ' + age + '  Temp is: '  + temp +  '  Too hot! Stay at home');
}





