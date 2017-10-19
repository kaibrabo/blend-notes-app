(function() {
    function HomeCtrl(Note, Detail, $uibModal) {
        this.notes = Note.all;
        this.details = Detail.all;

        this.addNote = function(){
			$uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: 'ModalInstanceCtrl',
				controllerAs: 'modal',
				size: 'sm'
			}).result.then(function(){}, function(res){});
            console.log("clicked, no modal tho?");
		};

        this.editNote = function() {
            console.log("edit");
        };

        this.deleteNote = function() {
            console.log("delete");
        };
    }

    angular
        .module('notes_app')
        .controller('HomeCtrl', ['Note', 'Detail', '$uibModal', HomeCtrl]);
})();
