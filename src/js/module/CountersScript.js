import $ from 'jquery';

export function countersScript () {
    (function ($) {
        // Custom easing function
        $.extend($.easing, {
          // This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
          spincrementEasing: function (x, t, b, c, d) {
            return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
          }
        })
      
        // Spincrement function
        $.fn.spincrement = function (opts) {
          // Default values
          var defaults = {
            from: 0,
            to: null,
            decimalPlaces: null,
            decimalPoint: '.',
            thousandSeparator: ',',
            duration: 1000, // ms; TOTAL length animation
            leeway: 50, // percent of duraion
            easing: 'spincrementEasing',
            fade: true,
            complete: null
          }
          var options = $.extend(defaults, opts)
      
          // Function for formatting number
          var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/)
          function format (num, dp) {
            num = num.toFixed(dp) // converts to string!
      
            // Non "." decimal point
            if ((dp > 0) && (options.decimalPoint !== '.')) {
              num = num.replace('.', options.decimalPoint)
            }
      
            // Thousands separator
            if (options.thousandSeparator) {
              while (re_thouSep.test(num)) {
                num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2')
              }
            }
            return num
          }
      
          // Apply to each matching item
          return this.each(function () {
            // Get handle on current obj
            var obj = $(this)
      
            // Set params FOR THIS ELEM
            var from = options.from
            if (obj.attr('data-from')) {
              from = parseFloat(obj.attr('data-from'))
            }
      
            var to
            if (obj.attr('data-to')) {
                to = parseFloat(obj.attr('data-to'))
            } else if (options.to !== null) {
                to = options.to
            } else {
                var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator
                var re = new RegExp(ts, 'g')
                to = parseFloat(obj.text().replace(re, ''))
            }
      
            var duration = options.duration
            if (options.leeway) {
                // If leeway is set, randomise duration a little
                duration += Math.round(options.duration * ((Math.random() * 2) - 1) * options.leeway / 100)
            }
      
            var dp
            if (obj.attr('data-dp')) {
              dp = parseInt(obj.attr('data-dp'), 10)
            } else if (options.decimalPlaces !== null) {
              dp = options.decimalPlaces
            } else {
              var ix = obj.text().indexOf(options.decimalPoint)
              dp = (ix > -1) ? obj.text().length - (ix + 1) : 0
            }
      
            // Start
            obj.css('counter', from)
            if (options.fade) obj.css('opacity', 0)
            obj.animate(
              {
                counter: to,
                opacity: 1
              },
              {
                easing: options.easing,
                duration: duration,
      
                // Invoke the callback for each step.
                step: function (progress) {
                  obj.html(format(progress * to, dp))
                },
                complete: function () {
                  // Cleanup
                  obj.css('counter', null)
                  obj.html(format(to, dp))
      
                  // user's callback
                  if (options.complete) {
                    options.complete(obj)
                  }
                }
              }
            )
          })
        }
      })($)

    var show = true;
    var countbox = ".projmap__counters";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // ???????????????? ?????????? ????????????????, ???????? ?????? ?????? ???????? ??????????????????
        var w_top = $(window).scrollTop(); // ???????????????????? ???????????????? ???? ?????????????? ???????? ???????????????????? ????????????????
        var e_top = $(countbox).offset().top; // ???????????????????? ???? ?????????? ???? ???????????????????? ???? ?????????? ?????????? ??????????????????
        var w_height = $(window).height(); // ???????????? ???????? ????????????????
        var d_height = $(document).height(); // ???????????? ?????????? ??????????????????
        var e_height = $(countbox).outerHeight(); // ???????????? ???????????? ?????????? ???? ????????????????????
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            const replaceDot = () => {
                for (let i = 0; i < $('.projmap__number span').length; i++) {
                    $('.projmap__number span').get(i).innerHTML = $('.projmap__number span').get(i).innerHTML.replace('.', ',');
                }
            }
            $('.projmap__number').css('opacity', '1');
            $('.projmap__number span').spincrement({
                decimalPoint: ".",
                thousandSeparator: " ",
                duration: 1000,
                complete: replaceDot,
            });
            show = false;
            
        }
    });
}