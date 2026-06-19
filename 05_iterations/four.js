// for in loop

const object = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java'
};
for (const key in object) {
    console.log(`${key} is the short form of ${object[key]}`);
}

const array = [1, 2, 3, 4, 5];
for(const index in array) {
    console.log(`index: ${index}, value: ${array[index]}`);
}