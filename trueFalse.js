/**Falsy:
 * 1. false
 * 2. 0
 * 3. ""
 * 4. undefined
 * 5. null
 * 6. NaN
 */

/**Truthy:
 * 1. '0'
 * 2. ' '
 * 3. []
 */

// const age = 4;
let name = 0;

if (name || name == 0) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}
