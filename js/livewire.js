document.addEventListener('livewire:load', function() {
    Livewire.on('closeModal', function(modals) {
        Object.keys(modals).forEach(function(modal) {
            const modalKey = modals[modal];
            const modalElement = document.getElementById(modalKey);
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    });
});