const router=require('express').Router();
let Recipe=require('../models/recipes.model');

router.route('/').get((req,res)=>{
    Recipe.find()
        .then(recipes=>res.json(recipes))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const description=req.body.description;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);

    const newRecipes=new Recipe({
        username,
        description,
        duration,
        date,
    });

    newRecipes.save()
        .then(()=>res.json('Recipes added!'))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    Recipes.findById(req.params.id)
        .then(Recipes=>res.json(Recipes))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Recipes.findById(req.params.id)
        .then(()=>res.json('Recipes deleted.'))
        .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Recipes.findById(req.params.id)
        .then(Recipes=>{
            Recipes.username=req.body.username;
            Recipes.description=req.body.description;
            Recipes.duration=Number(req.body.duration);
            Recipes.date=Date.parse(req.body.date);

            Recipes.save()
                .then(()=>res.json('Recipes updated!'))
                .catch(err=>res.status(400).json('Error: '+err));
        });
})

module.exports=router;