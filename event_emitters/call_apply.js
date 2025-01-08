var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
//call takes parameters normally
obj.greet.call({ name: 'Jane Doe' });
//apply takes parameters as an array of parameters
obj.greet.apply({ name: 'Jane Doe' });