import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
    if (items.length === 0) {
        return <p>No items available.</p>;
    }

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

// Add PropTypes for type safety
ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
};

// Provide default props to prevent errors if no items are passed
ItemList.defaultProps = {
    items: [],
};

const App = () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return (
        <div>
            <h1>Item List</h1>
            <ItemList items={items} />
        </div>
    );
};

export default App;
