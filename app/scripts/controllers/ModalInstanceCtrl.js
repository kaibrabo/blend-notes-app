(function() {
    function ModalInstanceCtrl(Note, Detail, $uibModalInstance) {
        this.submit = function() {

            var noteTitle = this.addNote;
            var detailText = this.addDetail;

            Note.add(noteTitle, function(note) {
                Detail.add({detail: detailText, noteId: note.key}, function(detail) {
                    $uibModalInstance.close();
                });
            });
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('notes_app')
        .controller('ModalInstanceCtrl', ['Note', 'Detail', '$uibModalInstance', ModalInstanceCtrl]);
})();
