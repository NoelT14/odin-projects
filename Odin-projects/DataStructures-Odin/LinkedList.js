import Node from "./Node.js"

class LinkedList{

    constructor(){
        this.headNode = null
        this.length = 0
    }

    append(value){

        let newNode = new Node(value)
        if(!this.headNode){
            this.headNode = newNode
        }
        else{
            let currentNode = this.headNode
            while(currentNode.pointer){
                currentNode = currentNode.pointer
            }
            currentNode.pointer = newNode
        }
        this.length++

    }

    prepend(value){
        let newNode = new Node(value,this.headNode)
        this.headNode = newNode
        this.length++
    }

    size(){
        return this.length
    }

    head(){
        return this.headNode
    }

    tail(){
        if(!this.headNode){
            return null
        }
        let currentNode = this.headNode
        while(currentNode.pointer){
            currentNode = currentNode.pointer
        }
        return currentNode
    }

    at(index){
        if(index<0 || index>=this.length){
            return null
        }
        let currentNode = this.headNode
        for(let i =0 ; i<index ; i++){
            currentNode = currentNode.pointer
        }   
        return currentNode
    }

    pop(){

        if(!this.headNode){
            return null
        }
        if(this.length===1){
            const poppedNode = this.headNode
            this.headNode = null
            this.length--
            return poppedNode
        }
        let currentNode = this.headNode
        let previousNode = null
        while(currentNode.pointer){
            previousNode = currentNode
            currentNode = currentNode.pointer
        }
        previousNode.pointer = null
        this.length--
        return currentNode

    }

    contains(value){

        let currentNode = this.headNode

        while(currentNode){
            if(currentNode.value === value){
                return true
            }
            currentNode = currentNode.pointer
        }
        return false

    }

    find(value){
        let currentNode = this.headNode
        let index = 0

        while(currentNode.pointer){
            if(currentNode.value === value){
                return index
            }
            currentNode = currentNode.pointer
            index++
        }

        return null

    }

    toString(){
        let str = ''
        let currentNode = this.headNode
        while(currentNode){
             str += `( ${currentNode.value} ) -> `
            currentNode = currentNode.pointer
        }
        return str + "null"
    }

    insertAt(value,index){
        if(index<0 || index >= this.length){
            return 
        }
        if(index===0){
            this.prepend(value)
        }

        else{
            const newNode = new Node(value)
            let previousNode = this.at(index-1)
            newNode.pointer = previousNode.pointer
            previousNode.pointer = newNode
            this.length++
        }
    }

    removeAt(index){
        if(index <0 || index>=this.length){
            return null
        }
        if(index===0){
            let removedNode = this.headNode
            this.headNode = this.headNode.pointer
            this.length--
            return removedNode
        }

        let previousNode = this.at(index - 1);
        const removedNode = previousNode.pointer;
        previousNode.pointer = removedNode.pointer;
        this.length--;
        return removedNode;

    }

}

let list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
console.log(list.toString());  // "( 5 ) -> ( 10 ) -> ( 20 ) -> null"
console.log(list.size());      // 3
console.log(list.head().value); // 5
console.log(list.tail().value); // 20
console.log(list.at(1).value);  // 10
list.pop();