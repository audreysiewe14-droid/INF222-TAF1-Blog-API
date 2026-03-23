const db = require('../database');
const Article = {
	//recuperation de tous le atricles avec filtres optionnels
	getAll:(filtres,callback) => {
		let query = 'SELECT * FROM articles WHERE 1=1';
        let params = [];

		if (filtres.categorie){ 
			query +='AND categorie=?';
			params.push(filtres.categorie);
		}

		if (filtres.auteur){ 
			query +='AND auteur=? ';
			params.push(auteur);
		}

		if (filtres.date){ 
			query += 'AND date=?';
			params.push(date);
		}
		db.all(query,params,callback);
	},

	//recuperation d'un article par son ID

	getById:(id,callback)=>{
		db.get('SELECT * FROM articles WHERE id=?',[id],callback);
	},

	//recherche par titre ou contenu

	search: (texte,callback)=>{
		db.all(
			'SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?',['%${texte}%','%${texte}%'],callback);
	},

	//Creation d'un article

	create:(data,callback)=>{
		const {titre,contenu,auteur,date,categorie,tags}=data;
		db.run(
			'INSERT INTO articles(titre,contenu,auteur,date,categorie,tags)VALUES(?,?,?,?,?,?)',[titre,contenu,auteur,date,categorie,tags],function (err) {
				callback(err,{id:this.lastID});
				
			});
	},

	//Modification d'un article

	update:(id,data,callback)=>{
		const {titre,contenu,categorie,tags}=data;
		db.run(
			'UPDATE articles SET titre =?,contenu=?,categorie=?,tags=? WHERE id=?',[titre,contenu,categorie,tags,id],callback);

	},

	//Suppression d'un article

	delete:(id,callback)=>{
		db.run('DELETE FROM articles WHERE id=?',[id],callback);
	}

};

module.exports=Article;

