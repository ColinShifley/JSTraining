// Arrow Functions

// * remove 'function'
// * Does not have a 'this' binding
// * Cannot be used as Constructor
// * Not suitable for: 'Call, Bind, Apply' methods

// * Remove argument parentheses and brackets and return
//  Ex. 1.
//     (a) => {
//     return a + 100
//     }
    a => a + 100

// * If only one line is needed the return is implied and
//   does not need to be included. If it is multiline then
//   then you need to reintroduce the return as well as
//   the brackets. & if more than one Argument the parens.

        ((a, b) => {
        let chuck = 42;
        return a + b + chuck
    })()


