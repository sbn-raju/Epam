class Stack<T> {
private items: T[] = [];

push(item: T): void {
    this.items.push(item);
}

pop(): T | undefined {
    return this.items.pop();
}

peek(): T | undefined {
    return this.items[this.items.length - 1];
}

isEmpty(): boolean {
    return this.items.length === 0;
}

print(): void {
    console.log(this.items);
}
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Top element:", numberStack.peek()); // 30
numberStack.pop();
numberStack.print(); 
console.log("Is empty:", numberStack.isEmpty()); // false
