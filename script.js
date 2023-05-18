class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    head() {
        return this.head;
    }
    tail() {
        if (!this.head == null)
            return null;
        let ptr = this.head;
        while (ptr.next != null) {
            ptr = ptr.next;
        }
        return ptr;
    }
    append(value) {
        let list = this;
        if (!list.head) {
            list.head = new Node(value);
            return list;
        }
        let ptr = this.tail();
        ptr.next = new Node(value);
        return ptr;
    }
    prepend(value) {
        if (!this.head) {
            this.head = new Node(value);
            return this;
        }
        let ptr = this.head;
        this.head = new Node(value, ptr);
    }
    size() {
        let ptr = this.head;
        let c = 0;
        while (ptr != null) {
            ptr = ptr.next;
            c++;
        }
        return c;
    }
    at(index) {
        if (this.size() - 1 < index)
            return;
        let ptr = this.head;
        let c = 0;
        while (c < index) {
            c++;
            ptr = ptr.next;
        }
        return ptr;
    }
    pop() {
        if (!this.head)
            return null;
        let ptr = this.size() - 3;
        let last = this.at(ptr);
        last.next = null;
        return last;
    }
    contains(value) {
        if (!this.head)
            return false;
        let ptr = this.head;
        while (ptr != null) {
            if (ptr.value == value)
                return true;
            ptr = ptr.next;
        }
        return false;
    }
    find(value) {
        let ptr = this.head;
        if (!ptr)
            return null;
        let c = 0;
        while (ptr != null) {
            if (ptr.value == value)
                return c;
            c++;
            ptr = ptr.next;
        }
        return null;
    }
    toString() {
        let ptr = this.head;
        if (!ptr)
            return;
        let str = "";
        while (ptr) {
            str = str + `${ptr.value} -> `;
            ptr = ptr.next;
        }
        str = str + "null";
        return str;
    }
    insertAt(value, index) {
        let list = new Node(value);
        if (index == 0)
            this.prepend(value);
        if (index == this.size() - 1)
            this.append(value);
        let ptr = this.at(index - 1);
        list.next = ptr.next;
        ptr.next = list;
    }
    removeAt(index) {
        let pre = this.at(index - 1);
        let after = this.at(index + 1);
        pre.next = after;
        return this;
    }
}
const list = new LinkedList();
list.append(1);
list.append(3);
list.append(4);
list.insertAt(9, 2);
list.pop();
console.log(list.toString())