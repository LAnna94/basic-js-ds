const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.head = this.tail = null
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.tail) {
      this.head = this.tail = new ListNode(value)
    } else {
      let oldTail = this.tail
      this.tail = new ListNode(value)
      oldTail.next = this.tail
    }
  }

  dequeue() {
    if (!this.head) {
      return null
    } else {
      let removedElement = this.head
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
      }
      return removedElement.value
    }
  }
}

module.exports = {
  Queue
};
