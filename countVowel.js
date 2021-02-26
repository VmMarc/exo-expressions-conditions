let text =
  "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."

text = text.toLowerCase()
console.log(`${text}\n`)


let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

for (let i = 0; i < text.length; ++i) {
  switch (text[i]) {
    case `a`:
      ++nbA
    case `e`:
      ++nbE
    case `i`:
      ++nbI
    case `o`:
      ++nbO
    case `u`:
      ++nbU
    case `y`:
      ++nbY
  }
}





console.log(`Il y a ${nbA} "a" dans ce texte.`)
console.log(`Il y a ${nbE} "e" dans ce texte.`)
console.log(`Il y a ${nbI} "i" dans ce texte.`)
console.log(`Il y a ${nbO} "o" dans ce texte.`)
console.log(`Il y a ${nbU} "u" dans ce texte.`)
console.log(`Il y a ${nbY} "y" dans ce texte.`)