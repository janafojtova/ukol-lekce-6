/*Parsování data

Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu 
DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 }
*/
let datumZadanyUzivatelem = prompt("Zadej datum")
const parseData = (datum)=>{
 return {
    day: Number(datum.slice(0, 2)),
    month: Number(datum.slice(3, 5)),
    year: Number(datum.slice(6)),
}
}
console.log(parseData(datumZadanyUzivatelem))
/*
Formátování data
Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující datum v 
následujícím formátu.

{ day: 12, month: 3, year: 2015 }
Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.

> formatDate({ day: 6, month: 4, year: 2021 })
"06.04.2021"
V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla funkce použít destrukturování.
*/

const formatDate = ({ day, month, year })=>{
    const datum = {
        den:String(day).padStart(2,"0"),
        mesic:String(month).padStart(2,"0"),
        rok:String(year)
    }
    const {den,mesic,rok} = datum;
    return den+"."+mesic+"."+rok;
}
console.log(formatDate({ day: 6, month: 4, year: 2021 }))
/*

Python zaokrouhlování

Jak jistě znalci jazyka Python dobře vědí, funkce round v tomto jazyce zaokrouhluje malinko jinak, než jsme zvyklí. 
Pokud je desetinná část čísla přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. JavaScriptová funkce 
Math.round naopak provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru. Někomu by se po
 po Pythonovském zaokrouhlování mohlo stýskat. Napište proto funkci jménem round, která bude zaokrouhlovat čísla na 
 celé jednotky podle následujících pravidel.

Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. Tedy například 3.5 se zaokrouhlí na 4, 
naopak 2.5 se zaokrouhlí na 2.
V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout desetinnou část čísla.
*/

const round = (cislo) =>{
    const celaCast = Math.trunc(cislo);
    const desetinaCast = cislo-celaCast;
    if(desetinaCast>0.5){
       return celaCast+1
    }else if (desetinaCast<0.5) {
        return celaCast
    }else if (desetinaCast===0.5){
        if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast + 2* desetinaCast
		}        
    } 
}
console.log(round(3.5))

/*

Bonus
Zajistěte, aby funkce správně fungovala i pro záporná čísla.

Tedy například -3.5 se zaokrouhlí na -4, naopak -2.5 se zaokrouhlí na -2.

*/

const roundBonus = (cislo) =>{
    const celaCast = Math.trunc(cislo);
    const desetinaCast = cislo-celaCast;
    if(Math.abs(desetinaCast)>0.5){
       return celaCast+1
    }else if (0<Math.abs(desetinaCast)<0.5) {
        return celaCast
    }else if (Math.abs(desetinaCast)===0.5){
        if (celaCast % 2 === 0) {
			return celaCast
		} else {
			return celaCast+ 2* desetinaCast
		}        
    } 
    
}
console.log(roundBonus(-2.5))

 