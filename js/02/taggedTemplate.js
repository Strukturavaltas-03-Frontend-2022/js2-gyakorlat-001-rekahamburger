

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};



const taggedTemplate = (texts, ...values) => 
texts.map((text, index) =>
`${text}${values[index] ?`<strong>${values[index]()}<\strong>` : ''}` ).join ('');


const template = taggedTemplate `My name is $(johndoe.firstName) $(johndoe.lastname)`

document.body.innerHTML
export default taggedTemplate;



