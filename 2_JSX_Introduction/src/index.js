'use strict';

function FormatName(user) {

    return user.firstName + ' ' + user.lastName;

}

function GetGreeting(user) {

    if (user) {

        return <h2>Hello, {FormatName(user)}</h2>;

    } else {

        return <h1>Hello, Stranger</h1>;
    }

}

const user = {

    firstName: 'James',
    lastName: 'Jeong'

};

const element = (

    <div>
        <h1>
            Hello, Welcome !!!
        </h1>        
            {GetGreeting(user)}        
    </div>


);

ReactDOM.render(
    element,
    document.getElementById('root')

);
