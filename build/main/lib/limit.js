"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function limit(count) {
    return (array) => {
        if (count < 0) {
            count = Number.MAX_SAFE_INTEGER;
        }
        return array.slice(0, count);
    };
}
exports.default = limit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2xpbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBUyxLQUFLLENBQVUsS0FBYTtJQUNuQyxPQUFPLENBQUMsS0FBVSxFQUFPLEVBQUU7UUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztTQUNqQztRQUVELE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQyJ9