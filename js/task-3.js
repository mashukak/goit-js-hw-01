function getElementWidth(content, padding, border) {
    const contentValue = parseFloat(content);  
    const paddingValue = parseFloat(padding) * 2;  
    const borderValue = parseFloat(border) * 2; 
    const boxWidth = contentValue + paddingValue + borderValue; 
    return boxWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
