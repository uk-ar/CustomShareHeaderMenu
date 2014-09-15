//<import resource="classpath:/alfresco/templates/org/alfresco/import/alfresco-util.js">

function main()
{
    //AlfrescoUtil.param('nodeRef', '');
    //AlfrescoUtil.param('site', null);

    // Get the node from the URL
    // var pathSegments = url.match.split("/");
    // var reference = [ url.templateArgs.store_type, url.templateArgs.store_id ].concat(url.templateArgs.id.split("/"));
    //http://docs.alfresco.com/4.1/references/api-ws-obj-json.html
    var tags = json.getJSONArray("tags") //json.tags //json.getString("tags")
    var nodeRefs = json.getJSONArray("nodeRefs") //jsonUtils.toObject() //json.nodeRefs //json.getString("nodeRefs")
    for(var i = 0; i<nodeRefs.length(); i++){
        var nodeRef = nodeRefs.get(i);
        //http://stackoverflow.com/questions/15192962/how-to-acess-remote-root-scoped-object-in-alfresco-webscript
        var connector = remote.connect("http")
        // url = "http://localhost:8080/share/service/modules/"
        if (connector == null) {
            activityLog.push("HTTP Connector has not been configured, cannot enable site (" + ")");
        } else {
            //Fix me by constant variable
            // http://localhost:8080/share/proxy/alfresco/api/tag/workspace/SpacesStore
            // curl -v -u admin:admin -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '["aaa","bbb"]' http://localhost:8080/alfresco/service/api/node/workspace/SpacesStore/23614f2d-d2df-4b97-adf0-88a041e96844/tags
            var repoResponse = connector.post(
                "http://localhost:8080/alfresco/service/api/node/" + nodeRef.replace(":/","") + "/tags",
                jsonUtils.toJSONString(["ccc", "ddd"]),
                //tags,
                "application/json");
            //var repoResponse = connector.call(url);
            if (repoResponse.status == 200) {
                //activityLog.push("Enabled site (" + siteName + ")");
            } else {
                //activityLog.push("Could not enable site (" + siteName + ") HTTP Status code : " + repoResponse.status);
                //status.setCode(status.STATUS_NOT_FOUND, "The node could not be found");
                status.setCode(repoResponse.status, "The node could not be found");
                model.msg = "fail";
                model.result = false;
                return;
            }
        }
        // not working...
        // //https://gist.github.com/plus-/3690512
        // var node = AlfrescoUtil.getNodeDetails(nodeRef).getNode() //.item.node;//search.findNode(nodeRef);getNodeDetails(nodeRef).getNode()
        // logger.log(node)
        // //this.alfLog("log", node);
        // //console.log(node)
        // // 404 if the node is not found
        // if (node == null)
        // {
        //     status.setCode(status.STATUS_NOT_FOUND, "The node could not be found");
        //     return;
        // }
        // for(var j = 0; j<tags.length(); j++){
        //     node.addTag(tags.getString(j));
        // }
        // // save the node
        // node.save();
        // // Get the tags of the node
        // // model.tags = node.tags;
    }
    model.msg = "suc";
    model.result = true;
    // Get the array of posted tags
    // for (var index = 0; index < json.length(); index++)
    // {
    //     node.addTag(json.getString(index));
    // }
}

main();
