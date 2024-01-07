var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE butterflies;'
var seedQuery = 'INSERT INTO butterflies (title, nick, avatar, about) VALUES ("Cethosia Cyane", "cethosia_cyane", "/images/cc.png", "This butterfly species, whose males are orange and females are grey and white, lives in India and China."), ("Greta Oto", "greta_oto", "/images/go.png", "Gre Oto butterflies with transparent wings live in countries such as Ecuador, Panama and Venezuela."), ("Papilio Memnon", "papilio_memnon", "/images/pm.png","With a wing length of up to 150 millimetres, this butterfly species lives mainly in South Asia.")';
var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'butterfly'
});
connection.connect()

console.log("Running SQL seed...")

// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})