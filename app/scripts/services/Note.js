(function() {
    function Note($firebaseArray) {
        var Note = {};
        var ref = firebase.database().ref().child('notes');
        var notes = $firebaseArray(ref);

        Note.all = notes;

        Note.add = function(note) {
            notes.$add(note)
        }

        return Note;
    }
    angular
        .module('notes_app')
        .factory('Note', ['$firebaseArray', Note]);
})();
