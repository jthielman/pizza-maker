import utilities from '../helpers/utilities.js';

const printCheeseOptions = () => {
    let domString = 'cheese';
    utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions };
