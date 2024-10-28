class Node{

    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{

    constructor(){
        this.root = null
    }

    insert(value){

        const newNode = new Node(value)

        if(this.root === null){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){

        if(newNode.value < node.value){
            if(node.left===null){
                node.left = newNode
            }
            else{
                this.insertNode(node,newNode)
            }
        }
        else{
            if(node.right === null){
                node.right = newNode
            }
            else{
                this.insertNode(node,newNode)
            }
        }
    }


    search(value){
        return this.searchNode(this.root,value)
    }

    searchNode(node,value){
        if(node === null){
            return false
        }

        if(value < node.value){
            return this.searchNode(node.left,value)
        }
        else if(value > node.value){
            return this.searchNode(node.right , value)
        }
        else{
            return true
        }
    }

     prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
     

}