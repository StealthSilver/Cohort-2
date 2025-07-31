// map, a javascript concept

const users3 = new Map<string, { age: number; name: string }>();

users3.set('4248j', { age: 32, name: 'pop' });
users3.set('4248j32', { age: 31, name: 'sdf' });


console.log(users3.get('4248j')); // { age: 32, name: 'pop' }
