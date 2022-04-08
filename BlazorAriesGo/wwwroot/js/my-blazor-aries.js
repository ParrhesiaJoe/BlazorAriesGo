//import { Aries } from "../dist/web/aries";

var aries;
var stopNotifier;

//async function startAries() {
//    alert("hello");
//    console.log("hello2");
//    if (aries) {
//        console.log("aries is already initialized");
//        //document.querySelector("#output").value = "aries is already initialized";
//        return;
//    }

//    aries = await new ar.Aries.Framework();
//    //const request = document.querySelector("#opts").value;
//    //aries = await new Aries.Framework(JSON.parse(request));
//    console.log("foo");
//    document.querySelector("#output").value = "aries started";
//}

async function doEet(parameters) {
    alert("doEet" + parameters);
    const request =
        `{"assetsPath": "/dist/assets", "agent-default-label":"dem-js-agent","http-resolver-url":[],"auto-accept":true,"outbound-transport":["ws","http"],"transport-return-route":"all","log-level":"debug", "db-namespace":"demoagent", "media-type-profiles": ["didcomm/aip2;env=rfc19"]}`;
    
    aries = await new Aries.Framework(JSON.parse(request));
    var context = aries.Context;
    Console.log("context");
}
