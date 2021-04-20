/* 
    As IDs are relative to the category, there are clashes.
    I'll append a category to each item for the time being,
    This will be made redundant once I move data to firebase
    as each item will have a unique ID.
*/
export const appendCategory = (arr, category) => {
    const newArr = [...arr];

    newArr.forEach((item, index) => {
        newArr[index] = { ...item, category };
    });
    
    return newArr;
};