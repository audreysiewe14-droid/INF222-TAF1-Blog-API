//importation de la bibliotheque sqlite3
const sqlite3 = require('sqlite3').verbose();
 
 //creation du fichier de base de donnees blog.db

const db = new sqlite3.Database('./blog.db',(err) => {
	if (err){
		console.error('Erreur de connexion DB :',err.message);

	}
	else{
		console.log('Connecté à la base de données SQLite');

	}

});

//creation de la table articles 

db.run('CREATE TABLE IF NOT EXISTS articles(id INTEGER PRIMARY KEY AUTOINCREMENT, titre TEXT NOT NULL,contenu TEXT NOT NULL,auteur TEXT NOT NULL,date TEXT NOT NULL,categorie TEXT NOT NULL,tags TEXT)');

module.exports = db;