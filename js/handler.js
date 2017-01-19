 function handler(handler) {


        if (!event.target.hasAttribute('data-tooltip')) return;

        var tooltipElem = document.createElement('div');
        tooltipElem.className = "tooltip";
        tooltipElem.innerHTML = event.target.getAttribute('data-tooltip');
        var coords = event.target.getBoundingClientRect();

        var left = coords.left + (event.target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0; // не вылезать за левую границу окна

        var top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) { // не вылезать за верхнюю границу окна
            top = coords.top + event.target.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

        if (event.type == 'mouseover') {
            document.body.appendChild(tooltipElem);
            showingTooltip = tooltipElem;


        }
        if (event.type == 'mouseout') {
            document.body.removeChild(showingTooltip);
            showingTooltip = null;
        }

    };