const users = [
  { id: 1, name: "Ana", age: 25, online: true },
  { id: 2, name: "Bruno", age: 30, online: false },
  { id: 3, name: "Carla", age: 22, online: true },
  { id: 4, name: "Daniel", age: 30, online: true },
  { id: 5, name: "Eduardo", age: 25, online: false },
];

function Collection(data) {
  this.items = [...data];
}

Collection.prototype.where = function(key, value) {
    this.items = this.items.filter(item => item[key] === value);
    return this;
};

Collection.prototype.sortBy = function(key) {
    this.items.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
    });
    return this;
};

Collection.prototype.paginate = function(page, limit) {
    const start = (page - 1) * limit;
    const end = start + limit;
    this.items = this.items.slice(start, end)
    return this;
};

Collection.prototype.get = function() {
    return this.items;
};

const result = new Collection(users)
  .where('online', true)
  .sortBy('age')
  .paginate(1, 2)
  .get();

console.log(result); 
