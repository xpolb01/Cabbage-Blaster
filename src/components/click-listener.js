AFRAME.registerComponent('click-listener', {
 init: function () {
   var el = this.el;
   if (AFRAME.utils.device.isMobile()) {
     window.addEventListener('click', function (evt) {
       el.emit('click', null, false)
     })
   } else {
     window.addEventListener('click', function (evt) {
       el.emit('click', null, false);
     });
   }
 }

});
