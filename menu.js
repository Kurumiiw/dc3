(function () {
      
      const remote = require('electron').remote; 
      
      function init() { 
        document.getElementById("t_minimize").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("t_window").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
        
        document.getElementById("t_close").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          var r = confirm("Are you sure you want to quit? \nAll unsaved progress will be lost.");
          if (r == true) {
            window.close();
          }
        }); 
      };
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();