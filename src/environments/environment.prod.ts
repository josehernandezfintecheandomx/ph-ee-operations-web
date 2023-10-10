// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// `.env.ts` is generated by the `npm run env` command
import env from "./.env";

export let environment = {
  name: "prod",
  production: true,
  version: env.phee.version,
  serverUrl: window['env']['serverApiUrl'] || "https://paymenthub.qa.oneacrefund.org/opsapp",
  serverUrls: window['env']['serverApiUrls'] || "https://paymenthub.qa.oneacrefund.org/opsapp",
  apiPath: window['env']['apiPath'] || '/opsapp/api',
  apiVersion: window['env']['apiVersion'] || '/v1',
  oauth: {
    // For connecting to Mifos X using OAuth2 Authentication change the value to true
    enabled: window['env']['oauthEnabled'] || false, 
    type: window['env']['oauthType'] || "keycloak", 
    serverUrl: window['env']['oauthServerUrl'] || "https://paymenthub.qa.oneacrefund.org/opsapp",
    realm: window['env']['oauthRealm'] || "paymenthub",
    clientId: window['env']['oauthClientId'] || "opsapp",
    clientSecret: window['env']['oauthClientSecret'] || "",
    basicAuth: window['env']['oauthBasicAuth'] || true,
    basicAuthToken: window['env']['oauthBasicAuthToken'] || 'Y2xpZW50Og=='
  },
  auth: {
    enabled: window['env']['authEnabled'] || false,
  },
  tenant: window['env']['platformTenantId'] || 'phdefault',
  tenants: window['env']['platformTenantIds'] || 'phdefault',
  defaultLanguage: window['env']['defaultLanguage'] || "en",
  supportedLanguages: window['env']['supportedLanguages'] || ["en", "fr"]
};
