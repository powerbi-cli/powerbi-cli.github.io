---
uid: install/signin
title: Sign in with Power BI CLI
documentId: 8857b440-b4ca-443c-99b5-9cb1b6730adc
---

# Sign in with Power BI CLI

Before using any CLI commands with a local install, you need to sign in with [pbicli login](xref:reference/index#pbicli-login).

1. Run the `login` command

```bash
az login
```

If CLI can open your default browser, it will do so and load an Azure sign-in page.

Otherwise, open a browser page at https://aka.ms/devicelogin and enter the authorization code displayed in your terminal.

If no web browser is available or the web browser fails to open, use device code flow with `pbicli login --use-device-code`.

2. Sign in with your account credentials in the browser.
3. After a successfull login run the login command of the Power BI CLI

## Sign in with a service principal

Service principals are accounts not tied to any particular user, which can have permissions on them assigned through pre-defined roles. Authenticating with a service principal is the best way to write secure scripts or programs, allowing you to apply both permissions restrictions and locally stored static credential information. To learn more about service principals, see [Setup a Service Principal](xref:install/serviceprincipal).

To sign in with a service principal, you need:

-   The service principal id
-   The service principal secret
-   The tenant associated with the service principal, as either an .onmicrosoft.com domain or Azure object ID

```bash
pbicli login --service-principal -p <principal id> -s <secret> -t <tenant>
```

## Environment variables

It is possible to use enviroment variables for the different login flow which can be usefull in a automatic flow.

> [!CAUTION]
> Please be aware that these environment variables stores sensitive information and can be used by other programs and use with caution.

| Variable         | Purpose                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| PBICLI_PRINCIPAL | Can be used to store the principal id of the service principal                                             |
| PBICLI_SECRET    | Can be used to store the secret of the service principal                                                   |
| PBICLI_TENANT    | Can be used to store the tenant of the service principal. Can also be used for the interactive login flow. |

## .pbiclirc

Besides using enviroment variables it is also possible to store this information in a `.pbiclirc` file. This file can contain the same sensible information in a JSON format.

> [!CAUTION]
> Please be aware that these environment variables stores sensitive information and can be used by other programs and use with caution.

```json
{
    "principal": "...",
    "secret": "...",
    "tenant": "..."
}
```

## Feedback
