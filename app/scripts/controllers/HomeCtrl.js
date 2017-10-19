(function() {
    function HomeCtrl(Note, Detail, $uibModal) {
        this.notes = Note.all;
        this.details = Detail.all;

        this.addNote = function(){
            var modalContent = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-box',
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal',
                size: 'sm'
            }).result.then(function () {}, function () {});
        };

        this.editNote = function(note) {
            console.log("edit");
            console.log(note);
            var modalContent = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-box',
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'modal',
                size: 'sm',
                resolve: {addNote: note.$value}
            });
        };

        this.updateNote = function() {
            console.log("update");
        };

        this.deleteNote = function(note) {
            this.notes.$remove(note);
        };
    }

    angular
    .module('notes_app')
    .controller('HomeCtrl', ['Note', 'Detail', '$uibModal', HomeCtrl]);
})();
