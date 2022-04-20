"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function occurrences(value) {
    return (list) => {
        return [...list].reduce((a, v) => (v === value ? a + 1 : a), 0);
    };
}
exports.default = occurrences;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjdXJyZW5jZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL29jY3VycmVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBUyxXQUFXLENBQUksS0FBUTtJQUM5QixPQUFPLENBQUMsSUFBUyxFQUFVLEVBQUU7UUFDM0IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsa0JBQWUsV0FBVyxDQUFDIn0=