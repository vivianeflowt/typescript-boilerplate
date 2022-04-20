function limit(count) {
    return (array) => {
        if (count < 0) {
            count = Number.MAX_SAFE_INTEGER;
        }
        return array.slice(0, count);
    };
}
export default limit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2xpbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVMsS0FBSyxDQUFVLEtBQWE7SUFDbkMsT0FBTyxDQUFDLEtBQVUsRUFBTyxFQUFFO1FBQ3pCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7U0FDakM7UUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxlQUFlLEtBQUssQ0FBQyJ9