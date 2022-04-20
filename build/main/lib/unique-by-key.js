"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fp_1 = __importDefault(require("lodash/fp"));
function uniqueByKey(predicate) {
    return (array) => {
        return fp_1.default.pipe(fp_1.default.reverse, fp_1.default.reduce((acc, cur) => (Object.assign(Object.assign({}, acc), { [cur[predicate]]: cur })), {}), fp_1.default.values)(array);
    };
}
exports.default = uniqueByKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWJ5LWtleS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdW5pcXVlLWJ5LWtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1EQUEwQjtBQUkxQixTQUFTLFdBQVcsQ0FBQyxTQUFjO0lBQ2pDLE9BQU8sQ0FBQyxLQUFrQixFQUFFLEVBQUU7UUFDNUIsT0FBTyxZQUFDLENBQUMsSUFBSSxDQUNYLFlBQUMsQ0FBQyxPQUFPLEVBQ1QsWUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLGlDQUFNLEdBQUcsS0FBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUMvRCxZQUFDLENBQUMsTUFBTSxDQUNULENBQUMsS0FBSyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=