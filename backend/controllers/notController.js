const NotModel = require('../models/notModel')
const mongoose = require('mongoose')

const notOlustur = async (req,res) => {

    const {baslik,aciklama} = req.body;

    let bosAlanlar = []

    if(!baslik){
        bosAlanlar.push('baslik')
    }

    if(bosAlanlar.length > 0){
        return res.status(400).json({hata:'Alanlar boş geçilemez',bosAlanlar})
    }

    try {
        const kullanici_id = req.kullanici._id;
        const not = await NotModel.create({baslik,aciklama,kullanici_id})
        res.status(200).json(not)
    } catch (error) {
        res.status(400).json({hata:error.message})
    }
}

const notlarGetir = async (req,res) => {

    const kullanici_id = req.kullanici._id

    const notlar = await NotModel.find({kullanici_id}).sort({
        createdAt:-1
    })

    res.status(200).json(notlar)
}


const notGetir = async (req,res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID Geçersiz'})
    }

    const not = await NotModel.findById(id);

    if(!not){
        return res.status(404).json({hata:'Not Bulunamadı'})
    }

    res.status(200).json(not)
}


const notSil = async (req,res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID Geçersiz'})
    }
    
    const not = await NotModel.findOneAndDelete({_id:id})

    if(!not){
        return res.status(404).json({hata:'Not Bulunamadı'})
    }

    res.status(200).json(not)
}


const notGuncelle = async (req,res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({hata:'ID Geçersiz'})
    }
    
    const not = await NotModel.findOneAndUpdate({_id:id},{
        ...req.body
    },{new:true})

    if(!not){
        return res.status(404).json({hata:'Not Bulunamadı'})
    }

    res.status(200).json(not)
}


module.exports = {
    notOlustur,notlarGetir,notGetir,notSil,notGuncelle
}