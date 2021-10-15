var listaFilmes = ["Yesterday", "A Chegada" , "Escola de Rock"]
//elemento               1            2               3  
//indice                 0            1               2
// experimente o h1, strong

//adicionando novos elemnetos
//listaFilmes.push ("Harry Potter 1")

//Mesmo resultado 
//document.write("<p>" + listaFilmes[0] + "</p>");
//document.write("<p>" + listaFilmes[1] + "</p>");
//document.write("<p>" + listaFilmes[2] + "</p>");
//   document.write("<p>" + filme2 + "</p>");
//  document.write("<p>" + filme3 + "</p>");

//listaFilmes.push("Harry Potter 2");
//listaFilmes.push("Harry Potter 3");

//Mesmo resultado - porém poupando memória
// valor inicial, condicao, expressão final, parte final é a variável de iteração 
//for (var indice = 0; indice < listaFilmes.length; indice++) {
   // document.write("<p>" + listaFilmes[indice] + "</p>");
//}
//todo for precisa ter um valor inicial 

var listaFilmes = ["https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg", 
"https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg.", 
"https://canalhollywood.pt/wp-content/uploads/posters/images/hollywoodpt/poster/165883.jpg"]

for (var i =0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes [i] +">");
}

