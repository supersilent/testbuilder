var detectNetwork = function(cardNumber) {
  let prefix = cardNumber.slice(0,2);
  let prefix3 = cardNumber.slice(0,3);
  let prefix4 = cardNumber.slice(0,4);
  let prefix6 = cardNumber.slice(0,6);
  let cLength=cardNumber.length;


  if ((cLength ===16||cLength ===18||cLength ===19) && (prefix4 === '4903'||prefix4 === '4905'||prefix4 === '4911'||prefix4 === '4936'||prefix6 === '564182'||prefix6 === '633110'||prefix4 === '6333'||prefix4 === '6759')){
  	return `Switch`;
  }

  if (cLength ===14 && (prefix === '38'||prefix === '39')){
  	return `Diner's Club`;
  }

  if (cLength ===15 && (prefix === '34'||prefix === '37')){
  	return `American Express`;
  }

  if ((cLength ===13||cLength ===16||cLength ===19) && cardNumber[0] === '4'){
  	return `Visa`;
  }

  if (cLength ===16 && (prefix === '51'||prefix === '52'||prefix === '53'||prefix === '54'||prefix === '55')){
  	return `MasterCard`;
  }

  if ((cLength ===16||cLength ===19) && (prefix3 === '644'||prefix3 === '645'||prefix3 === '646'||prefix3 === '647'||prefix3 === '648'||prefix3 === '649'||prefix4 === '6011'||prefix === '65')){
  	return `Discover`;
  }

  if ((cLength >=12 && cLength <=19) && (prefix4 === '5018'||prefix4 === '5020'||prefix4 === '5038'||prefix4 === '6304')){
    return `Maestro`;
  }

  if ((cLength >=16 && cLength <=19) && ((prefix6 >= '622126'&&prefix6 <= '622925')||(prefix3 >= '624'&&prefix3 <= '626')||(prefix4 >= '6282'&&prefix4 <= '6288'))){
    return `China UnionPay`;
  }

  return false;
};
