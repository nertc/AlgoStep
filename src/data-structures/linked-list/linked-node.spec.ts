import { LinkedNode } from './linked-node';

describe('Linked Node', () => {
	it('should set properties automatically', () => {
		const node = new LinkedNode(1);
		expect(node.next).toBeNull();
		expect(node.previous).toBeNull();
		expect(node.value).toStrictEqual(1);
	});

	it('should set properties manually', () => {
		const node = new LinkedNode(1, new LinkedNode(2), new LinkedNode(3));
		expect(node.next).not.toBeNull();
		expect(node.previous).not.toBeNull();
		expect(node.value).toStrictEqual(1);
	});
});
