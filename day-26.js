// ✅ Day 26 DSA Challenge

// 📌 Challenge: Linked List Insertions 

// You are given a singly linked list. Implement the following operations:

// Insert at Head → Add a new node at the beginning of the list.

// Insert at Tail → Add a new node at the end of the list.

// Insert at Position → Add a new node at a given 1-based position pos.

// If pos = 1, insert at the head.

// If pos = length + 1, insert at the tail.

// If pos is greater than the length + 1, handle it gracefully.

// 🔹 After performing the operations, print the linked list in the format:
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

    // Insert at Head
    insertHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        this.printList();
    }

    // Insert at Tail
    insertTail(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.length++;
        this.printList();
    }

    // Insert at Position (1-based index)
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
        let temp = this.head;
        let result = "";
        while (temp) {
            result += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(result + "null");
    }
}

//          Driver Code 
let ll = new SinglyLinkedList();

ll.insertHead(10);        // 10 -> null
ll.insertTail(20);        // 10 -> 20 -> null
ll.insertAtPosition(5, 1);// 5 -> 10 -> 20 -> null
ll.insertAtPosition(15, 3);// 5 -> 10 -> 15 -> 20 -> null
ll.insertAtPosition(100, 10);// Invalid Position
