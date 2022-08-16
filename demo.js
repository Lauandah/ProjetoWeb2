let bcrypt = require ('bcryptjs')

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("lauh3379", salt);

console.log(bcrypt.compareSync('lauh3379', hash)); //true
console.log(bcrypt.compareSync('ellen1234', hash)); //false

console.log(hash)

