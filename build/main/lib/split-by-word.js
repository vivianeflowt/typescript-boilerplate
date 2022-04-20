"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitByWord(str) {
    const wordRegex = /[A-Z]?[a-z]+|\d+|[A-Z]+(?![a-z])/g;
    return str.match(wordRegex) || [];
}
exports.default = splitByWord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtYnktd29yZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc3BsaXQtYnktd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFDOUIsTUFBTSxTQUFTLEdBQUcsbUNBQW1DLENBQUM7SUFDdEQsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=