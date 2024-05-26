import { LinkedList } from './linked-list';
import { LinkedNode } from './linked-node';

describe('Linked List', () => {
	let linkedList: LinkedList<any>;

	beforeEach(() => {
		linkedList = new LinkedList();
	});

	it('should get empty nodes', () => {
		expect(linkedList.getFirst()).toBeNull();
		expect(linkedList.getLast()).toBeNull();
		expect(linkedList.at(5)).toBeNull();
	});

	it('should add first items', () => {
		linkedList.addFirst(new LinkedNode(1));
		linkedList.addFirst(new LinkedNode(2));
		linkedList.addFirst(new LinkedNode(3));

		expect(linkedList.getFirst()).not.toBeNull();
		expect(linkedList.getFirst()?.value).toStrictEqual(3);

		expect(linkedList.getLast()).not.toBeNull();
		expect(linkedList.getLast()?.value).toStrictEqual(1);
	});

	it('should add last items', () => {
		linkedList.addLast(new LinkedNode(1));
		linkedList.addLast(new LinkedNode(2));
		linkedList.addLast(new LinkedNode(3));

		expect(linkedList.getFirst()).not.toBeNull();
		expect(linkedList.getFirst()?.value).toStrictEqual(1);

		expect(linkedList.getLast()).not.toBeNull();
		expect(linkedList.getLast()?.value).toStrictEqual(3);
	});

	it('should get Nth item', () => {
		linkedList.addFirst(new LinkedNode(1));
		linkedList.addFirst(new LinkedNode(2));
		linkedList.addFirst(new LinkedNode(3));

		expect(linkedList.at(1)).not.toBeNull();
		expect(linkedList.at(1)?.value).toStrictEqual(2);
	});

	it('should remove first one item', () => {
		linkedList.addFirst(new LinkedNode(1));

		const removed = linkedList.removeFirst();

		expect(removed).not.toBeNull();
		expect(removed?.value).toStrictEqual(1);

		expect(linkedList.getFirst()).toBeNull();
	});

	it('should remove first item', () => {
		linkedList.addFirst(new LinkedNode(1));
		linkedList.addFirst(new LinkedNode(2));

		const removed = linkedList.removeFirst();

		expect(removed).not.toBeNull();
		expect(removed?.value).toStrictEqual(2);

		expect(linkedList.getFirst()).not.toBeNull();
		expect(linkedList.getFirst()?.value).toStrictEqual(1);
	});

	it('should remove last item', () => {
		linkedList.addLast(new LinkedNode(1));
		linkedList.addLast(new LinkedNode(2));

		const removed = linkedList.removeLast();

		expect(removed).not.toBeNull();
		expect(removed?.value).toStrictEqual(2);

		expect(linkedList.getLast()).not.toBeNull();
		expect(linkedList.getLast()?.value).toStrictEqual(1);
	});

	it('should remove last one item', () => {
		linkedList.addLast(new LinkedNode(1));

		const removed = linkedList.removeLast();

		expect(removed).not.toBeNull();
		expect(removed?.value).toStrictEqual(1);

		expect(linkedList.getLast()).toBeNull();
	});

	it('should not remove first item', () => {
		expect(linkedList.removeFirst()).toBeNull();
	});

	it('should not remove last item', () => {
		expect(linkedList.removeLast()).toBeNull();
	});
});
