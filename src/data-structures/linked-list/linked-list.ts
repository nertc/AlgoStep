import { LinkedNode } from './linked-node';

export class LinkedList<T> {
	private first: LinkedNode<T> | null = null;
	private last: LinkedNode<T> | null = null;

	public addFirst(node: LinkedNode<T>): LinkedNode<T> {
		if (this.first !== null) {
			this.first.previous = node;
		}

		node.next = this.first;
		this.first = node;
		node.previous = null;

		if (this.last == null) {
			this.last = this.first;
		}

		return this.first;
	}

	public addLast(node: LinkedNode<T>): LinkedNode<T> {
		if (this.last !== null) {
			this.last.next = node;
		}

		node.previous = this.last;
		this.last = node;
		node.next = null;

		if (this.first == null) {
			this.first = this.last;
		}

		return this.last;
	}

	public getFirst(): LinkedNode<T> | null {
		return this.first;
	}

	public getLast(): LinkedNode<T> | null {
		return this.last;
	}

	/**
	 * @param n 0 based index
	 * @returns item at n
	 */
	public at(n: number): LinkedNode<T> | null {
		let node = this.first;

		while (n > 0 && node !== null) {
			--n;
			node = node.next;
		}

		return node;
	}

	/**
	 * @returns Removed node
	 */
	public removeFirst(): LinkedNode<T> | null {
		if (this.first === null) {
			return null;
		}

		if (this.first.next !== null) {
			this.first.next.previous = null;
		}

		const oldFirst = this.first;
		this.first = this.first.next;

		return oldFirst;
	}

	/**
	 * @returns Removed node
	 */
	public removeLast(): LinkedNode<T> | null {
		if (this.last === null) {
			return null;
		}

		if (this.last.previous !== null) {
			this.last.previous.next = null;
		}

		const oldLast = this.last;
		this.last = this.last.previous;

		return oldLast;
	}
}
