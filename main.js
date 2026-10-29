const corpoTabela = document.getElementById("corpoTabela")

for (let produto of produtos){
    const linha = document.createElement

    linha.inner = `
    <td>${produto.nome}</td>
    <td>${produto.categoria}</td>
    <td>${}</td>
    <td>${}</td>
    <td>${}</td>
    <td class= "preco" >${produto.preco.TolocaleString("pt-br")}</td>
    `
    corpoTabela.appendChild()
}