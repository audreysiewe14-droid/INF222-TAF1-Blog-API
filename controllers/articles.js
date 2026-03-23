const Article = require('../models/article');

	//Recuperation de tous les articles avec filtres optionnels
exports.getAll=(req,res)=>{
	const filtres={
		categorie:req.query.categorie,
		auteur: req.query.auteur,
		date: req.query.date
	};
	Article.getAll(filtres,(err,articles)=>{
		if (err){
			return res.status(500).json({ message:'Erreur serveur',erreur:err.message});
		}
		res.status(200).json({articles});
	});

};

 	//Recuperation d'un article par ID
exports.getById=(req,res)=>{
	const id=req.params.id;

	Article.getById(id,(err,article)=>{
		if(err){
			return res.status(500).json({message:'Erreur serveur',erreur:err.message});

		}
		if(!article){
		return res.status(404).json({message:'Desole article non trouve'});
		}
		res.status(200).json(article);
	});
};

	//Recherche des articles
exports.search=(req,res)=>{
	const texte=req.query.query;

	if(!texte){
		return res.status(400).json({message:'Veuillez remplir le parametre query manquant '});
	}
	Article.search(texte,(err,articles)=>{
		if (err){
			return res.status(500).json({message:'Erreur Serveur',erreur:err.message});

		}
		res.status(200).json({articles});
	});
};


	//Creation d'un article
exports.create=(req,res)=>{
	const {titre,contenu,auteur,date,categorie,tags}= req.body;

		//Validations des champs obligatoires
		if (!titre || !contenu || !auteur || !date || !categorie){
			return res.status(400).json({message:'Veuillez remplir les champs obligatoires manquants:titre,contenu,auteur,date,categorie'});

		}
		Article.create({ titre,contenu,auteur,date,categorie,tags},(err,result)=>{
			if (err){
				return res.status(500).json({message:'Erreur serveur',erreur: err.message});
			}
			res.status(201).json({message:'Votre article a ete cree avec succes',id:result.id});
		});

};

	//Modification d'un article
exports.update=(req,res)=>{
	const id=req.params.id;
	const {titre,contenu,categorie,tags}=req.body;

	if(!titre || !contenu || !categorie){
		return res.status(400).json({message:'Veuillez remplir les champs obligatoires manquants: titre,contenu,categorie'});

	}
	Article.getById(id,(err,article)=>{
		if (!article){
			return res.status(404).json({message:'Desole article non trouve '});

		}

		Article.update(id,{titre,contenu,categorie,tags},(err)=>{
			if (err){
				return res.status(500).json({message:'Erreur Serveur',erreur:err.message});
			}
		
		res.status(200).json({message: 'Votre article a ete modifie avec succes'});

		});
	});
};

	//Suppression d'un article
exports.delete=(req,res)=>{
	const id=req.params.id;

	Article.getById(id,(err,article)=>{
		if (!article){
			return res.status(404).json({message:'Desole article non trouve'});
		}

		Article.delete(id,(err)=>{
			if (err){
				return res.status(500).json({message: 'Erreur Serveur',erreur: err.message });
			}
			res.status(200).json({message: 'Votre article a ete supprime avec succes'});

		});
	});
};