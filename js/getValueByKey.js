const obj = {
    key_1: "value 1",
    key_2: "value 2",
    key_3: "value 3",
    key_4: "value 4",
    key_5: "value 5",
    key_6: "value 6",
    getValueByKey(value){
      return (!this.hasOwnProperty(value)) ? undefined : this[value] 
    },
    setNewProperty(key, value){
      this[key] = value
      return this
    }
};

const getValueByKey = (key) => (obj.hasOwnProperty(key) ? obj[key] : undefined);

console.log(getValueByKey("key_1"));
console.log(getValueByKey("key"));
console.log(obj.getValueByKey('key_6'));
obj.setNewProperty('key', "value")
console.log(obj.getValueByKey('key'));



