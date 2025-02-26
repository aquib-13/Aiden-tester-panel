// Toggle button click color
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('clicked');
    });
});

// Show tooltip on hover
document.querySelectorAll('.more-info').forEach(infoIcon => {
    infoIcon.addEventListener('mouseenter', () => {
        const tooltipId = 'tooltip-' + infoIcon.id.split('-')[1];
        const tooltip = document.getElementById(tooltipId);
        tooltip.style.display = 'block';
    });

    infoIcon.addEventListener('mouseleave', () => {
        const tooltipId = 'tooltip-' + infoIcon.id.split('-')[1];
        const tooltip = document.getElementById(tooltipId);
        tooltip.style.display = 'none';
    });
});
