'use strict';
class Collection {
    constructor(model) {
        this.model = model
    }
    create(item) {
        const dta = new this.model(item);
        return dta.save();
    };
    read(id) {
        if (id) {
            return this.model.find({_id:id});
          } else {
            return this.model.find({});
          }
      }
    update(id, item) {
        return this.model.findByIdAndUpdate(id, item, { new: true });
    }
    delete(id) {
        return this.model.findByIdAndDelete(id);
    }
}
module.exports = Collection ;