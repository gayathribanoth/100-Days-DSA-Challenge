// ✅ Day 25 DSA Challenge

// 📌 Problem Statement:
// Today’s task is to implement insertion operations in a Singly Linked List.
// You need to write functions for the following:

// Insert at Head – Add a new node at the beginning of the linked list.

// Insert at Tail – Add a new node at the end of the linked list.

// Insert at Position – Add a new node at a given position (index-based).

// 📥 Input / Operations:

// Start with an empty linked list.

// Perform the above insert operations.

// Print the list after each operation.

// 📤 Output:

// The final linked list after all operations.

// Example:

// Insert 10 at head → List: 10 -> null
// Insert 20 at tail → List: 10 -> 20  -> null
// Insert 15 at position 2 → List: 10 -> 15 -> 20 -> null


// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Insert at Head
    insertHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        this.print();
    }

    // Insert at Tail
    insertTail(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) temp = temp.next;
            temp.next = newNode;
        }
        this.length++;
        this.print();
    }

    // Insert at Position (1-based index)
    insertAtPosition(data, pos) {
        if (pos < 1 || pos > this.length + 1) {
            console.log("Invalid Position");
            return;
        }
        if (pos === 1) return this.insertHead(data);
        if (pos === this.length + 1) return this.insertTail(data);

        let newNode = new Node(data);
        let temp = this.head;
        for (let i = 1; i < pos - 1; i++) temp = temp.next;
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        this.print();
    }

    // Print Linked List
    print() {
        let result = "", temp = this.head;
        while (temp) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(result + "null");
    }
}


let ll = new LinkedList();

ll.insertHead(10);          // 10 -> null
ll.insertTail(20);          // 10 -> 20 -> null
ll.insertAtPosition(15, 2); // 10 -> 15 -> 20 -> null
