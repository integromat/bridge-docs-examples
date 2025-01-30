// JavaScript to handle modal functionality
document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('modal');
	const openModalButton = document.getElementById('openModalButton');
	const closeModalButton = document.getElementById('closeModalButton');
	const maximizeButton = document.getElementById('maximizeButton');
	const modalTitle = document.getElementById('modalTitle');
	const modalHeader = document.getElementById('modalHeader');
	let isMaximized = false;

	openModalButton.onclick = function () {
		modal.style.display = 'block';
	};

	closeModalButton.onclick = function () {
		modal.style.display = 'none';
		if (isMaximized) {
			toggleMaximize(); // Reset to minimized state when closing
		}
	};

	maximizeButton.onclick = function () {
		toggleMaximize();
	};

	function toggleMaximize() {
		isMaximized = !isMaximized;
		if (isMaximized) {
			modal.classList.add('maximized');
			modalHeader.classList.add('large');
			maximizeButton.innerHTML = '<i class="fa fa-compress"></i>'; // Font Awesome icon for minimize
			modalTitle.classList.add('visible'); // Show title
			modalTitle.style.order = '1'; // Ensure title is on the left
		} else {
			modal.classList.remove('maximized');
			modalHeader.classList.remove('large');
			maximizeButton.innerHTML = '<i class="fa fa-expand"></i>'; // Font Awesome icon for maximize
			modalTitle.classList.remove('visible'); // Hide title
			modalTitle.style.order = ''; // Reset order
		}
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
			if (isMaximized) {
				toggleMaximize();
			}
		}
	};
});
