function splitByWord(str) {
    const wordRegex = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g;
    return str.match(wordRegex) || [];
}
export default splitByWord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnktd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc3BsaXQtYnktd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLFdBQVcsQ0FBQyxHQUFXO0lBQzlCLE1BQU0sU0FBUyxHQUFHLG1DQUFtQyxDQUFDO0lBQ3RELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEMsQ0FBQztBQUVELGVBQWUsV0FBVyxDQUFDIn0=