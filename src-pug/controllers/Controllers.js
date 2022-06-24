let i = 3
let productos = [
    {
       title:'Regla',
       price:100,
       url:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-512.png",
       id:1
    },
    {
        title:'Lapiz',
       price:20,
       url:"https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-512.png",
       id:2
    }
]

const addProducts = (req,res)=>{
    const { title,price,url }= req.body

    productos.push({
        title,
        price,
        url,
        id: i++
    })
    res.render('form')
}

const form = (req,res)=>{
    res.render('form')
}
const allProducts = (req,res)=>{
    res.render('products',{productos, hasAny: true})
}



module.exports = {addProducts,form,allProducts}