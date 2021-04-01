export const addItemToBag = (bagItems, itemToAdd) => {
    // I need to check if product with same size exists already to increase quantity
    const compareItems = item => {
        if (item.id === itemToAdd.id && item.name === itemToAdd.name && item.size === itemToAdd.size) {
            return true;
        } else {
            return false;
        }
    } 

    const itemExists = bagItems.find(compareItems);

    if (itemExists) {
        return bagItems.map(item => 
                compareItems(item) ?
                {...item, quantity: item.quantity + 1}
                : item
            );
    } else {
        return [...bagItems, {...itemToAdd, quantity: 1}];
    }
}