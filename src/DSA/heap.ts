// heap is also known as priority queue , it  is a binary tree
// it is represented as array, the formulas to reach children are 2i + 1 and 2i + 2
// in deletion when u delete a node , u replace it with last node then u bubble it down if needed
// in insertion when u insert it in the end then bubble it up
//
//                  50
//              100     150
//          200    220  230 240 
//        80

export default class MinHeap{
    
    private data: number[] = []
    private length: number = 0

    constructor(){}

    traverse(){
        console.log(this.data)
    }

    insert(val : number){
        if (!this.data.length){
            this.data[this.length] = val
            this.length++
            return
        }
        this.data[this.length] = val
        this.length++
        this.heapifyUp()    
    }

    heapifyUp(){

        let valIdx = this.length - 1 
        let pIdx = this.getParent(valIdx)
        let val = this.data[valIdx]
        let p = this.data[this.getParent(valIdx)]

        while (p > val){

                this.data[pIdx] = val
                this.data[valIdx] = p
                valIdx = pIdx
                pIdx = this.getParent(valIdx)
                val = this.data[valIdx]
                p = this.data[this.getParent(valIdx)]

        }

    }

    getLeftChild(idx: number){
        return (2 * idx ) + 1
    }
    getRightChild(idx: number){
        return (2 * idx ) + 2
    }
    getParent(idx: number){
        return Math.floor((idx - 1) / 2)
    }
        
}


const startTime = performance.now();
const mh  = new MinHeap()

mh.insert(50)
mh.insert(100)
mh.insert(200)
mh.insert(220)
mh.insert(230)
mh.insert(240)
mh.insert(80)
mh.insert(30)

const endTime = performance.now();
const timeTaken = endTime - startTime;

console.log('Time taken:', timeTaken, 'milliseconds');
//mh.traverse()
