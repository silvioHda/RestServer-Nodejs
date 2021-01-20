const express = require('express');
let {verificaToken} = require('../middlewares/autenticacion');
let app = express();
let Categoria = require('../models/categoria');

//mostrar todas las categorias
app.get('/categoria', (req,res)=>{

});

//mostrar una categoria por id
app.get('/categoria/:id', (req,res)=>{

});

//Crear nueva categoria
app.post('/categoria', verificaToken,(req,res)=>{
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });

    categoria.save((err,categoriaDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            categoria:categoriaDB
        });
    });
});

//actualizar categoria
app.put('/categoria/:id', (req,res)=>{
    let id = req.params.id;
    let body = req.body;

    let descCategoria={
        descripcion: body.descripcion
    }

    Categoria.findByIdAndUpdate(id, descCategoria,{new:true},(err,categoriaDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            categoria:categoriaDB
        });
    });
});

//Eliminar categorias
app.delete('/categoria/:id', (req,res)=>{

});



module.exports=app;