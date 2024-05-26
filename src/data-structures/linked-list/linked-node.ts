export class LinkedNode<T> {
	constructor(
		public value: T,
		public next: LinkedNode<T> | null = null,
		public previous: LinkedNode<T> | null = null
	) {}
}
