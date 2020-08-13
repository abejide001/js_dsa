/**
 *  LFU - last frequently used
 *  LRU - least recently used
 */

 function LFUNode(value) {
     this.prev = null
     this.next = null
     this.key = key
     this.data = value
     this.freqCount = 1
 }