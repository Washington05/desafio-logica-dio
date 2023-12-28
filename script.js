let nome = "Washington"
let quantXp = 5000
let nivel = ""

if (quantXp < 1000){
   nivel = "Ferro"
} else if (quantXp <= 2000){
   nivel = "Bronze"
} else if (quantXp <= 5000){
   nivel = "Prata"
} else if(quantXp <= 7000){
   nivel = "Ouro"
} else if (quantXp <= 8000){
   nivel = "Platina"
} else if (quantXp <= 9000){
   nivel = "Ascendente"
} else if (quantXp <= 10000){
   nivel = "Imortal"
} else if (quantXp >= 10001){
   nivel = "Radiante"
} 

console.log(`O heroi ${nome} esta no nível de ${nivel}`)