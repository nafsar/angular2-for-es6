(function (angular2) {

    angular2.ListComponent = ng.core
        .Component({
            selector: 'data-name',
            templateUrl: 'list.html'
        })
        .Class({
            constructor: function () {
                this.myList = '';
                this.listObj = [];
            },
            checkItem: (myList) => {
                var lstval = true;
                if (myList === '') { lstval = false; };
                return lstval;
            },
            deleteItem: function (index) {
                this.listObj.splice(index, 1);
            },
            addItem: function (event) {
                myListObj = {
                    done: false,
                    myList: this.myList
                }
                this.listObj.push(myListObj);
                this.myList = '';
                event.preventDefault();
            }
        })

})(window.angular2 || (window.angular2 = {}));