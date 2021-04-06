// I need to check if product with same size exists already to increase/decrease quantity
const compareItems = (item, itemToAdd) => {
    if (item.id === itemToAdd.id && item.name === itemToAdd.name && item.size === itemToAdd.size) {
        return true;
    } else {
        return false;
    }
};

export const addItemToBag = (bagItems, itemToAdd) => {
    const itemExists = bagItems.find(item => compareItems(item, itemToAdd));

    if (itemExists) {
        console.log('EXISTS!');
        return bagItems.map(item => 
                compareItems(item, itemToAdd) ?
                {...item, quantity: item.quantity + 1}
                : item
            );
    } else {
        return [...bagItems, {...itemToAdd, quantity: 1}];
    }
};

export const removeItemFromBag = (bagItems, itemToRemove) => {
    const newQuantity = itemToRemove.quantity - 1;

    if (newQuantity) {
        return bagItems.map(item => 
                compareItems(item, itemToRemove) ?
                {...item, quantity: item.quantity - 1}
                : item
            );
    } else {
        return bagItems.filter(item => item !== itemToRemove);
    }
};