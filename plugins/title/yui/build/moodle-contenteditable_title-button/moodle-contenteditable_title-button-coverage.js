if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/moodle-contenteditable_title-button/moodle-contenteditable_title-button.js']) {
   __coverage__['build/moodle-contenteditable_title-button/moodle-contenteditable_title-button.js'] = {"path":"build/moodle-contenteditable_title-button/moodle-contenteditable_title-button.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":66}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":11},"end":{"line":4,"column":28}}},"3":{"name":"(anonymous_3)","line":5,"loc":{"start":{"line":5,"column":23},"end":{"line":5,"column":35}}},"4":{"name":"(anonymous_4)","line":9,"loc":{"start":{"line":9,"column":23},"end":{"line":9,"column":35}}},"5":{"name":"(anonymous_5)","line":13,"loc":{"start":{"line":13,"column":31},"end":{"line":13,"column":43}}},"6":{"name":"(anonymous_6)","line":17,"loc":{"start":{"line":17,"column":22},"end":{"line":17,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":41,"column":40}},"2":{"start":{"line":3,"column":0},"end":{"line":37,"column":2}},"3":{"start":{"line":5,"column":8},"end":{"line":8,"column":10}},"4":{"start":{"line":6,"column":12},"end":{"line":6,"column":31}},"5":{"start":{"line":7,"column":12},"end":{"line":7,"column":63}},"6":{"start":{"line":9,"column":8},"end":{"line":12,"column":10}},"7":{"start":{"line":10,"column":12},"end":{"line":10,"column":31}},"8":{"start":{"line":11,"column":12},"end":{"line":11,"column":63}},"9":{"start":{"line":13,"column":8},"end":{"line":16,"column":10}},"10":{"start":{"line":14,"column":12},"end":{"line":14,"column":31}},"11":{"start":{"line":15,"column":12},"end":{"line":15,"column":71}},"12":{"start":{"line":17,"column":8},"end":{"line":20,"column":10}},"13":{"start":{"line":18,"column":12},"end":{"line":18,"column":31}},"14":{"start":{"line":19,"column":12},"end":{"line":19,"column":62}},"15":{"start":{"line":22,"column":8},"end":{"line":22,"column":86}},"16":{"start":{"line":23,"column":8},"end":{"line":23,"column":86}},"17":{"start":{"line":24,"column":8},"end":{"line":24,"column":118}},"18":{"start":{"line":25,"column":8},"end":{"line":25,"column":82}},"19":{"start":{"line":27,"column":8},"end":{"line":35,"column":53}}},"branchMap":{"1":{"line":3,"type":"binary-expr","locations":[{"start":{"line":3,"column":26},"end":{"line":3,"column":49}},{"start":{"line":3,"column":53},"end":{"line":37,"column":1}}]}},"code":["(function () { YUI.add('moodle-contenteditable_title-button', function (Y, NAME) {","","M.contenteditable_title = M.contenteditable_title || {","    init : function(params) {","        var click_h1 = function(e) {","            e.preventDefault();","            document.execCommand('formatBlock', false, '<h1>');","        };","        var click_h2 = function(e) {","            e.preventDefault();","            document.execCommand('formatBlock', false, '<h2>');","        };","        var click_blockquote = function(e) {","            e.preventDefault();","            document.execCommand('formatBlock', false, '<blockquote>');","        };","        var click_p = function(e) {","            e.preventDefault();","            document.execCommand('formatBlock', false, '<p>');","        };","","        var h1 = '<h1>' +  M.util.get_string('h1', 'contenteditable_title') + '</h1>';","        var h2 = '<h2>' +  M.util.get_string('h2', 'contenteditable_title') + '</h2>';","        var blockquote = '<blockquote>' +  M.util.get_string('blockquote', 'contenteditable_title') + '</blockquote>';","        var p = '<p>' +  M.util.get_string('p', 'contenteditable_title') + '</p>';","","        M.editor_contenteditable.add_toolbar_menu(params.elementid,","                                                  'title',","                                                  params.icon,","                                                  [","                                                      {'text' : h1, 'handler' : click_h1},","                                                      {'text' : h2, 'handler' : click_h2},","                                                      {'text' : blockquote, 'handler' : click_blockquote},","                                                      {'text' : p, 'handler' : click_p}","                                                  ]);","    }","};","","","","}, '@VERSION@', {\"requires\": [\"node\"]});","","}());"]};
}
var __cov_891a_66P0eaweC6ygjTaWA = __coverage__['build/moodle-contenteditable_title-button/moodle-contenteditable_title-button.js'];
__cov_891a_66P0eaweC6ygjTaWA.s['1']++;YUI.add('moodle-contenteditable_title-button',function(Y,NAME){__cov_891a_66P0eaweC6ygjTaWA.f['1']++;__cov_891a_66P0eaweC6ygjTaWA.s['2']++;M.contenteditable_title=(__cov_891a_66P0eaweC6ygjTaWA.b['1'][0]++,M.contenteditable_title)||(__cov_891a_66P0eaweC6ygjTaWA.b['1'][1]++,{init:function(params){__cov_891a_66P0eaweC6ygjTaWA.f['2']++;__cov_891a_66P0eaweC6ygjTaWA.s['3']++;var click_h1=function(e){__cov_891a_66P0eaweC6ygjTaWA.f['3']++;__cov_891a_66P0eaweC6ygjTaWA.s['4']++;e.preventDefault();__cov_891a_66P0eaweC6ygjTaWA.s['5']++;document.execCommand('formatBlock',false,'<h1>');};__cov_891a_66P0eaweC6ygjTaWA.s['6']++;var click_h2=function(e){__cov_891a_66P0eaweC6ygjTaWA.f['4']++;__cov_891a_66P0eaweC6ygjTaWA.s['7']++;e.preventDefault();__cov_891a_66P0eaweC6ygjTaWA.s['8']++;document.execCommand('formatBlock',false,'<h2>');};__cov_891a_66P0eaweC6ygjTaWA.s['9']++;var click_blockquote=function(e){__cov_891a_66P0eaweC6ygjTaWA.f['5']++;__cov_891a_66P0eaweC6ygjTaWA.s['10']++;e.preventDefault();__cov_891a_66P0eaweC6ygjTaWA.s['11']++;document.execCommand('formatBlock',false,'<blockquote>');};__cov_891a_66P0eaweC6ygjTaWA.s['12']++;var click_p=function(e){__cov_891a_66P0eaweC6ygjTaWA.f['6']++;__cov_891a_66P0eaweC6ygjTaWA.s['13']++;e.preventDefault();__cov_891a_66P0eaweC6ygjTaWA.s['14']++;document.execCommand('formatBlock',false,'<p>');};__cov_891a_66P0eaweC6ygjTaWA.s['15']++;var h1='<h1>'+M.util.get_string('h1','contenteditable_title')+'</h1>';__cov_891a_66P0eaweC6ygjTaWA.s['16']++;var h2='<h2>'+M.util.get_string('h2','contenteditable_title')+'</h2>';__cov_891a_66P0eaweC6ygjTaWA.s['17']++;var blockquote='<blockquote>'+M.util.get_string('blockquote','contenteditable_title')+'</blockquote>';__cov_891a_66P0eaweC6ygjTaWA.s['18']++;var p='<p>'+M.util.get_string('p','contenteditable_title')+'</p>';__cov_891a_66P0eaweC6ygjTaWA.s['19']++;M.editor_contenteditable.add_toolbar_menu(params.elementid,'title',params.icon,[{'text':h1,'handler':click_h1},{'text':h2,'handler':click_h2},{'text':blockquote,'handler':click_blockquote},{'text':p,'handler':click_p}]);}});},'@VERSION@',{'requires':['node']});