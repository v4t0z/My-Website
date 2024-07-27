document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.querySelector('p').style.display = 'block';
            } else {
                this.querySelector('p').style.display = 'none';
            }
        });
    });
});
