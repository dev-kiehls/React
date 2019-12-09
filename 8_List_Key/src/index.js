'use strict';

function NumberList(params) {
    const numbers = params.numbers;
    const lsitItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{lsitItems}</ul>
    );
}

const numbers = [ 1, 2, 3, 4, 5, 6];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById("root")
);