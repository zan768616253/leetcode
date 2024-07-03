class DoublyLinkedListNode {
    public Key: number;
    public Value: number;
    public Prev?: DoublyLinkedListNode;
    public Next?: DoublyLinkedListNode;

    constructor(
        key = 0,
        value = 0,
        prev?: DoublyLinkedListNode,
        next?: DoublyLinkedListNode
    ) {
        this.Key = key;
        this.Value = value;
        this.Prev = prev;
        this.Next = next;
    }
}

class LRUCache {
    private capacity: number;

    private cache: Map<number, DoublyLinkedListNode>;
    private head: DoublyLinkedListNode;
    private tail: DoublyLinkedListNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = new DoublyLinkedListNode();
        this.tail = new DoublyLinkedListNode();
        this.head.Next = this.tail;
        this.tail.Prev = this.head;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            let node = this.cache.get(key) as DoublyLinkedListNode;

            const prev = node.Prev as DoublyLinkedListNode;
            const next = node.Next as DoublyLinkedListNode;
            prev.Next = next
            next.Prev = prev
            node.Next = this.head.Next
            this.head.Next!.Prev = node
            node.Prev = this.head
            this.head.Next = node

            this.cache.set(key, node)

            return node.Value
        } else {
            return -1
        }
    }

    put(key: number, value: number): void {
        let node: DoublyLinkedListNode;
        if (!this.cache.has(key)) {
            node = new DoublyLinkedListNode(key, value);
            this.cache.set(key, node);
        } else {
            node = this.cache.get(key) as DoublyLinkedListNode;
            node.Value = value;
            const prev = node.Prev as DoublyLinkedListNode;
            const next = node.Next as DoublyLinkedListNode;
            prev.Next = next;
            next.Prev = prev;
        }
        // 将node插入到双向链表的头部
        const head = this.head!.Next as DoublyLinkedListNode;
        this.head!.Next = node;
        node.Prev = this.head;
        node.Next = head;
        head.Prev = node;
        if (this.cache.size > this.capacity) {
            // 超过限制了，就把双向链表的最后一个删除
            const lastNode = this.tail.Prev as DoublyLinkedListNode;
            this.cache.delete(lastNode.Key);
            const prev = lastNode.Prev as DoublyLinkedListNode;
            prev.Next = this.tail;
            this.tail.Prev = prev;
        }
    }
}
