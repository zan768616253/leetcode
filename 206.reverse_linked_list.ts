import ListNode from './LinkedListUtility';

function revserseList1(head: ListNode | null): ListNode | null {
  let preNode: ListNode | null = null;
  let curNode: ListNode | null = head;
  let next: ListNode | null;
  if (curNode == null || curNode.next == null) {
    return curNode;
  }
  while (curNode !== null) {
    next = curNode.next;
    curNode.next = preNode;
    preNode = curNode;
    curNode = next;
  }
  return preNode;
}

function revserseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next == null) {
    return head;
  }
  const prev = revserseList2(head.next);
  /*
    第一轮出栈，head为5，head.next为空，返回5
    第二轮出栈，head为4，head.next为5，执行head.next.next=head也就是5.next=4，
              把当前节点的子节点的子节点指向当前节点
              此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
              此时链表为1->2->3->4<-5
              返回节点5
    第三轮出栈，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
              此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
              此时链表为1->2->3<-4<-5
              返回节点5
    第四轮出栈，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
              此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
              此时链表为1->2<-3<-4<-5
              返回节点5
    第五轮出栈，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
              此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
              此时链表为1<-2<-3<-4<-5
              返回节点5
    出栈完成，最终头节点5->4->3->2->1
  */
  head.next.next = head;
  head.next = null;
  return prev;
}

function testReverseList(): ListNode | null {
  const head: ListNode | null = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = new ListNode(4);
  head.next.next.next.next = new ListNode(5);

  //   const result: ListNode | null = revserseList1(head);
  const result: ListNode | null = revserseList2(head);
  return result;
}

testReverseList();
