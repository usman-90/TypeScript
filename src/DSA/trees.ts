type treeNode<T> = {
	data?: T;
	left?: treeNode<T>;
	right?: treeNode<T>;
}

const insert = <T>(node: treeNode<T>, x: T) => {

	if (!node?.data) {
		node.data = x;
		return;
	} else if (node?.data > x) {
		if (!node?.left) {
			node.left = {}

		}
		insert(node.left, x);
	}
	else if (node?.data < x) {
		if (!node?.right) {
			node.right = {}

		}
		insert(node.right, x);
	}
	else {
		console.log("Data is already inserted cant be inserted again! ");
		return;
	}
};
const inOrderTraverse = <T>(node: treeNode<T>): void => {
	if (!node?.data) {
		return
	}
	inOrderTraverse(node?.left);
	console.log(node?.data);
	inOrderTraverse(node?.right);

};
let i: number = 0
const seti = () => {
	i = 0
}

const findMin = <T>(node: treeNode<T>): treeNode<T> => {
	if (!node?.left) {
		return node;
	}

	return findMin(node.left)
}
const deleteNode = <T>(node: treeNode<T>, x: T): void => {
	if (!node.left && !node.right && node.data === x) {
		node.data = null;
		return
	}
	else if (!node.right && node.left && node.data === x) {
		node.data = node.left.data;
		node.left.data = null;
		node.left.right ? node.right = node.left.right : null
		node.left.left ? node.left = node.left.left : null
		return

	}
	else if (!node.left && node.right && node.data === x) {
		node.data = node.right.data;
		node.right.data = null;
		node.right.left ? node.left = node.right.left : null
		node.right.right ? node.right = node.right.right : null
		return

	}
	else if (node?.left && node?.right && node?.data === x) {
		let temp: treeNode<T> = findMin(node?.right)
		node.data = temp.data;
		if (temp?.right) {
			temp.data = temp.right.data
			temp.left = temp?.right?.left
			temp.right = temp?.right?.left
		}
		return

	}
	if (node?.data > x) {
		deleteNode(node.left, x)
	}
	else if (node?.data < x) {
		deleteNode(node.right, x)
	}
}

//			10
//		5 		19
//	3 		 15		25
//2 		4 		22 		27
// 			20
//   				21
let node: treeNode<number> = {};
insert(node, 10);
insert(node, 5);
insert(node, 3);
insert(node, 4);
insert(node, 2);
insert(node, 19);
insert(node, 15);
insert(node, 25);
insert(node, 22);
insert(node, 27);
insert(node, 20);
insert(node, 21)
inOrderTraverse(node);
console.log("After deletion!")
deleteNode(node, 19)
inOrderTraverse(node);

