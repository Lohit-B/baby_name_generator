const hindi_vowels = ["\u0905","\u0906","\u0907", "\u0908", "\u0909", "\u090A", "\u090B","\u090C", "\u090D", "\u090E", "\u090F", "\u0910","\u0911", "\u0912", "\u0913", "\u0914"]; 
const hindi_consonants = [
"\u0915", "\u0916","\u0917","\u0918","\u0919","\u091A","\u091B","\u091C","\u091D","\u091F",
"\u0920", "\u0921","\u0922","\u0923","\u0924","\u0925", "\u0926","\u0927","\u0928","\u092A","\u092B","\u092C","\u092D","\u092E","\u092F",
"\u0930","\u0932","\u0935","\u0938","\u0939"
]; 

const hindi_vowel_sign = ["",
"\u093E","\u093F", "\u0941","\u0943","\u0947","\u094B","\u094D",
]

const generateNamesFromRawInput = ()=> {
	let total_letters = document.getElementById("total_letters").value;

	let select_l1 = document.getElementById('select_first_letter')
	let select_l2 = document.getElementById('select_second_letter')
	let select_s1 = document.getElementById('select_first_symb')
	let select_s2 = document.getElementById('select_second_symb')

	let first_letter = select_l1.options[select_l1.selectedIndex].text;
	let first_symbol = select_s1.options[select_s1.selectedIndex].text;

	let prefix = first_letter+first_symbol;
	total_letters -= 1;

	let second_letter = select_l2.options[select_l2.selectedIndex].text;
	let second_symbol = select_s2.options[select_s2.selectedIndex].text;
	if(second_letter.trim() !=''){
		prefix += second_letter+second_symbol;
		total_letters -= 1;
	}
	let names = generateNames(total_letters, prefix);
	printNames(names);
}

const generateNames = (total_letters, prefix="")=>{
	let names = [prefix];
	for(let i=0; i<total_letters; i++){
		names = addLetterToAll(names);
	}
	return names;
}

const addLetterToAll = (name_array)=> {
	let names = [];
	for(let name of name_array){
		for(let j=0; j<hindi_vowels.length; j++){
			names.push(name+hindi_vowels[j])	
		}
		for(let j=0; j<hindi_consonants.length; j++){
			for(let k=0; k<hindi_vowel_sign.length; k++){
				names.push(name+hindi_consonants[j]+hindi_vowel_sign[k])	
			}
		}
	}
	return names;
}

const printNames = (names)=>{
	let html = '';
	for(let name of names) {
		html += `<div class="col text-center">${name}</div>`
	}
	document.getElementById("name_list").innerHTML = html;
}

const populateFirstLetterAndSymbols = ()=> {
	let letter_html = '';
	let symb_html = ''
	for(let letter of hindi_vowels) {
		letter_html += `<option value='${letter}'>${letter}</option>`
	}
	for(let letter of hindi_consonants) {
		letter_html += `<option value='${letter}'>${letter}</option>`
	}
	for(let symbol of hindi_vowel_sign) {
		symb_html += `<option value='${symbol}'>${symbol}</option>`
	}
	document.getElementById('select_first_letter').innerHTML = letter_html
	document.getElementById('select_second_letter').innerHTML = `<option></option> ${letter_html}`
	document.getElementById('select_first_symb').innerHTML= symb_html
	document.getElementById('select_second_symb').innerHTML= symb_html
}
populateFirstLetterAndSymbols();
