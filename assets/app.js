document.querySelectorAll('.roadmap .tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.roadmap .tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.roadmap .tab-content2').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.target).classList.add('active');
    });
});


