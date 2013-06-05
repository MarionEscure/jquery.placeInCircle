/* author : Marion Escure 
 * folio : www.marion-escure.fr
 * version : 1.0
 * date : 05/06/2013
 * 
 */

jQuery(function(){
    (function($) {
       
        $.fn.placeInCircle = function(params) {
        
            // default
            var defaults = {
                duration : 500,
                effect : "easeInOutQuart",
                opacity : 0.3
            };
        
            // mix params and default
            var opts = $.extend(defaults, params); 
        
            var degree = 360/(this.length);
            var radians, sine, cos;
            this.each(function(i, item) {
                var $t = $(item);
                var currDegree = (-degree*i)+180;
                radians=currDegree*Math.PI/180;
                sine=Math.sin(radians);
                cos=Math.cos(radians);

                  
                var ecartCos = 0;
                var ecartSin = 0;
                // cosinus
                if(currDegree >270 || (currDegree>=0 && currDegree<90)){
                    ecartCos = 100;
                } else if(currDegree == 270 || currDegree==90){
                    ecartCos = -100;
                } else {
                    ecartCos = 50;
                }
                
                // sinus
                if(currDegree>0 && currDegree<180){
                    ecartSin = 0;
                } else if(currDegree==0 || currDegree==180){
                    ecartSin = 50;
                } else {
                    ecartSin = 100;
                }
                

                var topItem = ((cos*40)+40)+"%";
                var leftItem = ((sine*40)+40)+"%";
                

                // move the element
                $t.delay(opts.duration*i).animate({
                    top : topItem,
                    left : leftItem, 
                    opacity: opts.opacity
                }, opts.duration, opts.effect, function() {
                    $t.animate({
                        opacity: 1
                    }, opts.duration);
                });
            });
            
            return this;
        };
    })(jQuery)
}); 
