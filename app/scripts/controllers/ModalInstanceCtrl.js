(function() {
    function ModalInstanceCtrl(Note, Detail, $uibModal, $uibModalInstance) {
        this.submit = function() {
            Note.add(this.addNote.title);
            Detail.add(this.addDetail.details);
            $uibModalInstance.close();
        };

        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('notes_app')
        .controller('ModalInstanceCtrl', ['Note', 'Detail', '$uibModal', '$uibModalInstance', ModalInstanceCtrl]);
})();
