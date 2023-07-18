"use strict";

document.addEventListener('livewire:load', function () {
    Livewire.on('closeModal', function (modals) {
        modals.forEach(function (modal) {
            const modalElement = document.getElementById(modal);
            console.log(modalElement);
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    });
});