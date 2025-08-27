// ✅ Day 27 DSA Challenge

// 📌 Challenge: Insertions in Singly Linked List

// You are given a singly linked list. Implement the following operations:

// Insert at Head → Add a new node at the beginning.

// Insert at Tail → Add a new node at the end.

// Insert at Position → Add a new node at a given 1-based position pos.

// Constraints & Edge Cases:

// If pos = 1, insertion happens at the head.

// If pos = length + 1, insertion happens at the tail.

// If pos > length + 1, show "Invalid Position".

// 📥 Input / Operations:
// Start with an empty linked list and perform a sequence of insertions.

// 📤 Output:
// Print the linked list after each operation in the format:
// data1 -> data2 -> data3 -> null




// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // 1. Insert at Head
    insertHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        this.printList();
    }

    // 2. Insert at Tail
    insertTail(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.length++;
        this.printList();
    }

    // 3. Insert at Position (1-based index)
    insertAtPosition(data, pos) {
        if (pos < 1 || pos > this.length + 1) {
            console.log("Invalid Position");
            return;
        }

        if (pos === 1) {
            this.insertHead(data);
            return;
        }

        if (pos === this.length + 1) {
            this.insertTail(data);
            return;
        }

        let newNode = new Node(data);
        let temp = this.head;
        for (let i = 1; i < pos - 1; i++) {
            temp = temp.next;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        this.printList();
    }

    // Print Linked List
    printList() {
        let result = "";
        let temp = this.head;
        while (temp !== null) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(result + "null");
    }
}

//           Driver Code
let ll = new SinglyLinkedList();

ll.insertHead(10);       // 10 -> null
ll.insertTail(20);       // 10 -> 20 -> null
ll.insertAtPosition(5,1);// 5 -> 10 -> 20 -> null
ll.insertAtPosition(15,3);// 5 -> 10 -> 15 -> 20 -> null
ll.insertAtPosition(100,6);// Invalid Position
