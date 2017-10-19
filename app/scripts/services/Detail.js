(function() {
    function Detail($firebaseArray) {

        var Detail = {};
        var ref = firebase.database().ref().child("details");
        var details = $firebaseArray(ref);

        Detail.all = details;

        Detail.add = function(detail) {
            details.$add(detail)
        }


        return Detail;

    }

    angular
        .module('notes_app')
        .factory('Detail', ['$firebaseArray', Detail]);
})();
