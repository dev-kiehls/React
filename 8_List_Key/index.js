'use strict';

function NumberList(params) {
    var numbers = params.numbers;
    var lsitItems = numbers.map(function (number) {
        return React.createElement(
            "li",
            { key: number.toString() },
            number
        );
    });
    return React.createElement(
        "ul",
        null,
        lsitItems
    );
}

var numbers = [1, 2, 3, 4, 5, 6];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById("root"));