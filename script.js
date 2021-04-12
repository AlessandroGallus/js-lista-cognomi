var lista_cognomi = ["Rossi", "verdi", "Bianchi", "Gialli"]
var cognome = prompt("Qual'è il tuo cognome? (assicurati di mettere la prima lettera maiuscola)");
var ricerca;
var i=0;
var trovato = false;
var j;
lista_cognomi.push(cognome);

lista_cognomi.sort();

while(trovato == false){
  j= i + 1;
  ricerca = lista_cognomi[i];
  if(ricerca == cognome){
    trovato = true;
  }else{
    i++;
  }
}

document.getElementById("cognome").innerHTML = cognome;
document.getElementById("posizione").innerHTML = j;

console.log(lista_cognomi);
console.log("il cognome  inserito è " + cognome + " ed è in " + j + "° posizione");

for(z=0; z<lista_cognomi.length; z++){
  var nuovo_elemento = lista_cognomi[z];
  
  var contenuto_precendente = document.getElementById('list').innerHTML;
  document.getElementById('list').innerHTML = contenuto_precendente + "<li>" +nuovo_elemento+ "</li>";
}