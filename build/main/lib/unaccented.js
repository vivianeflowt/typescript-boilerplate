"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unaccented(str) {
    return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}
exports.default = unaccented;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5hY2NlbnRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdW5hY2NlbnRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVMsVUFBVSxDQUFDLEdBQVc7SUFDN0IsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIn0=