import $ from 'jquery';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export function mapScript () {
    // $('.project').hide('0');
    $('.projmap__map svg path').click(function(e) {
        const readyProjects = $('.mapblock-ready');
        if($(this).hasClass('ready')) {
            $('.mapblock-ready__empty_active').toggleClass('mapblock-ready__empty_active');
            $('.mapblock-ready__list_active').toggleClass('mapblock-ready__list_active');
            $('.projmap__map svg .select').toggleClass('select');
            $('.mapblock-ready__list').toggleClass('mapblock-ready__list_active');
            $(this).toggleClass('select');
            const offsetTop = e.pageY - readyProjects.height() - 13;
            const offsetLeft = e.pageX - 90;
            readyProjects.offset({top: offsetTop, left: offsetLeft});
            readyProjects.show('400', function() {
                readyProjects.offset({top: offsetTop, left: offsetLeft});
            });
        } else {
            $('.mapblock-ready__empty_active').toggleClass('mapblock-ready__empty_active');
            $('.mapblock-ready__list_active').toggleClass('mapblock-ready__list_active');
            $('.projmap__map svg .select').toggleClass('select');
            $('.mapblock-ready__empty').toggleClass('mapblock-ready__empty_active');
            const offsetTop = e.pageY - readyProjects.height() - 13;
            const offsetLeft = e.pageX - 90;
            readyProjects.offset({top: offsetTop, left: offsetLeft});
            readyProjects.show('400', function() {
                readyProjects.offset({top: offsetTop, left: offsetLeft});
            });
        }
    });

    $(document).mouseup( function(e){
		var div = $( ".projmap__map" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
            $('.mapblock-ready').hide();
            $('.projmap__map svg .select').toggleClass('select');
		}
	});

    $('.mapblock-ready__link').click(function(){
        $('html, body').animate({
            scrollTop: $(".projmap").offset().top
        }, 400);
        $('.mapblock-ready').hide();
        $('.projmap__map svg .select').toggleClass('select');
        if ($(window).width() <= '768') {
            $('.projmap__map').height('30vh');
        } else {
            $('.projmap__map').height('40vh');
        }
        $('.project').slideDown('1000');
    });

    const ctx = document.getElementById('chart').getContext('2d');
    const NUMBER_CFG = [80, 20];

    const data = {
        labels: ['Частные инвестиции', 'Гос. инвестиции'],
        datasets: [
            {
                label: 'Финансирование',
                data: NUMBER_CFG,
                backgroundColor: ['#EC7413', '#FDE3DF'],
            }
        ]
    };

    const config = {
        type: 'pie',
        data: data,
        options: {
          responsive: false,
          plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Pie Chart'
            }
          }
        },
    };

    const myChart = new Chart(ctx, config);
}