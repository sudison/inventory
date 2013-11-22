/**
 * Created by sudison on 11/21/13.
 */
angular.module('resources.items', []);
function InventoryItems () {
    this.items = [];
}
InventoryItems.prototype.add = function(item) {
    item.id = this.items.length + 1;
   this.items.push(item);
}
InventoryItems.prototype.get = function() {
    return this.items;
}
angular.module('resources.items').factory('Items', function () {
    var Items = new InventoryItems();
    return Items;
});