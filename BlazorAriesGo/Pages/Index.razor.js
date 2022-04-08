var aries;

export async function doEet2(parameters) {
    alert("index.razor.js" + parameters);
    const request =
        `{"assetsPath": "/dist/assets", "agent-default-label":"dem-js-agent","http-resolver-url":[],"auto-accept":true,"outbound-transport":["ws","http"],"transport-return-route":"all","log-level":"debug", "db-namespace":"demoagent", "media-type-profiles": ["didcomm/aip2;env=rfc19"]}`;

    aries = await new Aries.Framework(JSON.parse(request));
}

export async function Check() {
    if (aries != null) {
        alert("has aries2");
    }
    var context = aries.Context;
    console.log(`context:${context}`);
}