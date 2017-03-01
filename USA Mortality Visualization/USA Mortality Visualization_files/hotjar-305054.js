window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"polls":[{"persist_condition":"once","targeting":[{"negate":false,"pattern":"http:\/\/www.infino.me\/","match_operation":"simple","component":"url"},{"negate":false,"pattern":"phone","match_operation":"exact","component":"device"},{"negate":false,"pattern":"tablet","match_operation":"exact","component":"device"},{"negate":false,"pattern":"desktop","match_operation":"exact","component":"device"}],"language":"en","targeting_percentage":100,"created_epoch_time":1475851578,"display_condition":"delay","content":{"thankyou":"Thank you for answering this Poll. Your feedback is highly appreciated!","questions":[{"nextByAnswer":[],"text":"How can we make this better?","labels":null,"answers":null,"next":"byOrder","type":"single-open-ended-multiple-line","randomize_answer_order":false}]},"effective_show_branding":true,"background":"#333333","skin":"dark","position":"right","display_delay":3,"id":84364}],"recording_capture_keystrokes":false,"site_id":305054,"deferred_page_contents":[],"record_targeting_rules":[],"surveys":[],"heatmaps":[{"targeting":[{"negate":false,"pattern":"https:\/\/www.infino.me\/mortality\/usmap","match_operation":"simple","component":"url"}],"created_epoch_time":1475851546,"id":820197,"selector_version":0}],"feedback_widgets":[],"forms":[],"record":false,"r":1.0,"state_change_listen_mode":"manual"};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var s = document.createElement('script');
    s.src = scriptUrl;
    document.getElementsByTagName('head')[0].appendChild(s);
    window.hjBootstrap = function() {};
};

hjBootstrap('https://script.hotjar.com/modules-ffbd00664e78855b6751d2c04b4e24a4.js');