
window.addEventListener('load', function() {
    let navbar = document.getElementById('navbar');
    let colors = ['#ff6347', '#4caf50', '#00bcd4', '#ff9800', '#9c27b0'];  
    let index = 0;

    function changeColor() {
        navbar.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; 
    }

    setInterval(changeColor, 1000); 
});
