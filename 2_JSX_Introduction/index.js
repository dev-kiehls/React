'use strict';

function FormatName(user) {

    return user.firstName + ' ' + user.lastName;
}

function GetGreeting(user) {

    if (user) {

        return React.createElement(
            'h2',
            null,
            'Hello, ',
            FormatName(user)
        );
    } else {

        return React.createElement(
            'h1',
            null,
            'Hello, Stranger'
        );
    }
}

var user = {

    firstName: 'James',
    lastName: 'Jeong'

};

var element = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello, Welcome !!!'
    ),
    GetGreeting(user)
);

ReactDOM.render(element, document.getElementById('root'));