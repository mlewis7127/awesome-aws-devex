

/*
 * The following function can be optimised by combining the two
 * loops into a single loop
 */
function twoLoops(a, b) {
    for (i=0; i<1000; i++) {
        a[i] = i;
    }
    for (i=0; i<1000; i++) {
        b[i] = i+5;
    }
}


/*
 * The following function is initialising a 2D array (a multi-dimensional)
 * array to 0. This can be linearly indexed and so use a single for loop
 */
function multiDimensionalArray(i, j) {
    for (i=0; i<20; i+=1) {
        for (j=0; j<20; j+=1) {
        // usually a[i, j] means a[i + j*N] or some other equivalent indexing scheme, 
        // in most cases linearization is straight-forward
        a[i, j] = 0;
        }
    }
}

/*
 * The following function extracts values from the Person object on a variable by
 * variable basis. This can be optimised by destructuring the person object directly
 */
function getPersonDetails(person) {
    let firstName = person.firstName;
    let lastName = person.lastName;
    let age = person.age;
    let height = person.height;
    let weight = person.weight;
}