function hashStringToInt(string, size) {
    let hashCode = 17
  
    for (i in string) {
      hash = (13 * hashCode * s.charCodeAt(i)) % size
    }
    return hash
  }
  
  class HashTable {
    table = new Array(69420)
    numItems = 0
  
    resize = () => {
      const newTable = new Array(this.table.length * 2)
      this.table.forEach(item => {
        if (item) {
          item.forEach(([key, value]) => {
            const idx = hashStringToInt(key, newTable.length)
            if (newTable[idx]) {
              newTable[idx].push([key, value])
            } else {
              newTable[idx] = [[key, value]]
            }
          });
        }
      });
      this.table = newTable
    };
  
    setItem = (key, value) => {
      this.numItems++
      const loadFactor = this.numItems / this.table.length
      if (loadFactor > 0.8) {
        // resize
        this.resize();
      }
  
      const idx = hashStringToInt(key, this.table.length)
      if (this.table[idx]) {
        this.table[idx].push([key, value])
      } else {
        this.table[idx] = [[key, value]]
      }
    };
  
    getItem = key => {
      const idx = hashStringToInt(key, this.table.length);
      const value = this.table[idx].find(x => x[0] === key)
      if (!this.table[idx]) {
        return null;
      } else if (value) {
          return value[1]
      }
    };
  }
  const myTable = new HashTable()
  myTable.setItem("thaname", "thalastname")
  myTable.setItem("thisisnotaname", "thisisthecvalue")
  myTable.setItem("imakey", 69);
  myTable.setItem("whatsthepoint", "at all")
  console.log(myTable.getItem("firstName"))
  console.log(myTable.getItem("thisisnotaname"))
  console.log(myTable.getItem("imakey"))
  console.log(myTable.getItem("thereisnopointlol"))
