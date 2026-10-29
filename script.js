const produtos = [

  { produto: "Camiseta",
     categoria: "Casual",
      quantidade: 30,
       preco: 49.90 
    },
    { produto: "Calça Jeans",
         categoria: "Calça",
          quantidade: 18,
           preco: 129.90
    },
    { produto: "Vestido", 
      categoria: "Feminino",
       quantidade: 12,
        preco: 159.90 
      },
      { produto: "Jaqueta",
         categoria: "Inverno", 
         quantidade: 10, 
         preco: 249.90
      },
      { produto: "Cropped",
         categoria: "casual",
         quantidade:30,
         preco: 39.99,
      },

      { produto: "Biquíni",
        categoria: "Verão",
        quantidade:40,
        preco: 70.00,
     },
     { produto: "Cachecol",
      categoria: "Inverno",
      quantidade:15,
      preco: 80.00 ,
   },
   { produto: "T-shirt Oversize",
    categoria: "Casual",
    quantidade:5,
    preco: 25.00 ,
 },
 { produto: "Salto Alto ",
  categoria: "calçados",
  quantidade: 4 ,
  preco: 180.00 ,
},
{ produto: "Calça Jeans Flare",
  categoria: "Jeans",
  quantidade:6,
  preco: 78.00 ,
},

];
const corpoTabela = document.getElementById("corpoTabela")

for (let produto of produtos){
const linha = document.createElement("tr")

linha.innerHTML = `
    <td>${produto.produto}</td>
    <td>${produto.categoria}</td>
    <td>${produto.quantidade}</td>
    <td class="preco">${produto.preco.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })}</td>
`

corpoTabela.appendChild(linha)
}