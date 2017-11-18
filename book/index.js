var className = 'gitbook-plugin-modal';

require(['gitbook'], function (gitbook) {
  gitbook.events.bind('page.change', function () {
    var $bookBody = window.document.getElementsByClassName('book-body')[0];

    function showModal(content, closeable) {
      if ($bookBody.getElementsByClassName('gitbook-plugin-modal').length > 0) {
        return;
      }
      var div = window.document.createElement('div');
      div.style.left = $bookBody.offsetLeft + 'px';
      div.style.width = $bookBody.clientWidth + 'px';
      div.className = className;
      div.innerHTML = '<div class="gitbook-plugin-modal-content">' + content + '</div>';
      $bookBody.appendChild(div);
      if (closeable) {
        div.onclick = function () {
          window.document.body.removeChild(div);
          div = null;
        }
      }
    }

    var cfg = gitbook.state.config.pluginsConfig.modal || {};
    var html = cfg.html;
    var closeable = cfg.closeable;
    var excludeUrls = cfg.excludeUrls || [];

    for (var i = 0; i < excludeUrls.length; i++) {
      var exReg = new RegExp(excludeUrls[i], 'g');
      if (exReg.test(decodeURI(window.location.href))) {
        return;
      }
    }

    showModal(html, closeable);
    if (!closeable) {
      $bookBody.addEventListener('scroll', function () {
        showModal(cfg.html, closeable);
      });
    }
  });
});