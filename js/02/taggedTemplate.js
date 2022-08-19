

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};



function taggedTemplate(text){
    if (typeof(text) === 'string'){
        console.log('<strong>' + text + '</strong>');
    }else{
        console.log('<i>' + text + '</i>');
    }
}
document.body.innerHTML = ${text};

export default taggedTemplate