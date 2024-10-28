class HashMap{

    constructor(size=16){
        this.size = size
        this.buckets = new Array(size)
        this.itemCount = 0
    }

    hash(key){ //returns index from key
        let hashCode = 0;
        for(let i = 0 ; i<key.length ; i++){
            hashCode += key.charCodeAt(i)
        }

        return hashCode % this.size // Modulo to get index within array size
    }

    set(key,value){//insert

        const index = this.hash(key)
        if(!this.buckets[index]){
            this.buckets[index] = []
        }

        const existingKeyValuePair = this.buckets[index].find(item=>item[0]===key)

        if(existingKeyValuePair){
            existingKeyValuePair[1] = value
        }
        else{
            this.buckets[index].push([key,value])
            this.itemCount++
        }

    }

    get(key){

        const index = this.hash(key)
        if(!this.buckets[index]){
            return undefined
        }

        const keyValuePair = this.buckets[index].find(item=>item===key)
        return keyValuePair ? keyValuePair[1] : undefined
    }

    remove(key){
        const index = this.hash(key)
        
        if(!this.buckets[index]){
            return
        }

        const bucket = this.buckets[index]
        const pairIndex = bucket.findIndex(item=> item[0]===key)

        if(pairIndex !== -1){
            bucket.splice(pairIndex,1)
            this.itemCount--
        }

    }

    length(){
        return this.itemCount
    }

    clear(){
        this.buckets = new Array(this.size)
        this.itemCount = 0
    }

    keys(){
        const keyArray = []

        for(let bucket of this.buckets){
            if(bucket){
                for(let [key] of bucket){
                    keyArray.push(key)
                }
            }
        }

        return keyArray
    }

    entries(){

        const entriesArray = []

        for (let bucket of this.buckets){
            if(bucket){
                for(let [key,value] of bucket){
                    entriesArray.push(key,value)
                }
            }

        }
        return entriesArray
    }



}


const hashMap = new HashMap();


hashMap.set('name', 'John');
hashMap.set('age', 30);
hashMap.set('job', 'Engineer');



console.log(hashMap.length()); 
console.log(hashMap.keys());
  
console.log(hashMap.entries());  


hashMap.clear();

console.log(hashMap.length()); 