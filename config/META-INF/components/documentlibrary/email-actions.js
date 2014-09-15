(function() {
    YAHOO.Bubbling.fire("registerAction",
    {
        actionName: "onActionSendAsEmail",
        fn: function mycompany_onActionSendEmail(p_items) {
            //from DataListActions_onActionDelete
            items = YAHOO.lang.isArray(p_items) ? p_items : [p_items];
            // Alfresco.util.PopupManager.displayMessage({
            //     text: items
            // });
            //Alfresco.logger.info(items);
            console.log(items);
            //items[0].displayName;items[0].nodeRef;
            //https://code.google.com/p/share-extras/source/browse/trunk/Yammer+Dashlet/source/web/extras/components/dashlets/yammer.js?r=634
            callBackFn = function(value, obj){
                tag = value;
                nodeRefs = items.map(function(i){return i.nodeRef})
                this.modules.actions.genericAction({
                    success:
                    {
                        message: "suc"
                    },
                    failure:
                    {
                        message: "fail"
                    },
                    webscript:
                    {
                        //name: "mycompany/sendDocInEmail?nodeRef={nodeRef}&userName={userName}",
                        //http://localhost:8080/share/service/tutorials/site/aa
                        //name: "tutorials/site/aa",
                        name: "tutorials/tags",
                        // tutorials/site/{shortname}
                        // stem: Alfresco.constants.PROXY_URI,
                        stem: Alfresco.constants.URL_SERVICECONTEXT,
                        // method: Alfresco.util.Ajax.GET,
                        method: Alfresco.util.Ajax.POST,
                        // params:
                        // {
                        //     // nodeRef: file.nodeRef,
                        //     // userName: Alfresco.constants.USERNAME
                        // },
                    },
                    config:
                    {
                        requestContentType : Alfresco.util.Ajax.JSON,
                        dataObj: {
                            nodeRefs: nodeRefs,
                            tags: [tag]
                        }
                    }
                });
            }
            //http://sharextras.org/jsdoc/share/community-4.0.e/symbols/Alfresco.widget.InsituEditor.tagEditor.html
            Alfresco.util.PopupManager.getUserInput({
                title: "Tag",
                text: "Input tag name",
                callback:
                {
                    fn: callBackFn,
                    scope: this
                }
            });
        }
    });
})();
