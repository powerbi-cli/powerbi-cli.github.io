---
uid: install/signin
title: Sign in with Power BI CLI
documentId: 8857b440-b4ca-443c-99b5-9cb1b6730adc
---

# Sign in with Power BI CLI

There are several authentication types for the Power BI CLI. The prefered way is to leverage the Azure CLI login flow

None of your sign-in information is stored by the CLI. Only the gathered access token which is valid for maximal 1 hour is locally stored by the CLI.

## Sign in via Azure CLI

1. Run the login command of the Azure CLI

```bash
az login
```

If the Azure CLI can open your default browser, it will do so and load an Azure sign-in page.

Otherwise, open a browser page at https://aka.ms/devicelogin and enter the authorization code displayed in your terminal.

2. Sign in with your account credentials in the browser.
3. After a successfull login run the login command of the Power BI CLI

```bash
pbicli login --azurecli
```

See the [Azure CLI documentation](https://docs.microsoft.com/en-us/cli/azure/get-started-with-azure-cli?view=azure-cli-latest#sign-in) for more info.

## Sign in interactively

The Power BI CLI's default authentication method uses a web browser and access token to sign in.

1. Run the `login` command

```bash
pbicli login
```

Open a browser page at https://aka.ms/devicelogin and enter the authorization code displayed in your terminal.

2. Sign in with your account credentials in the browser.

## Sign in with a service principal

Service principals are accounts not tied to any particular user, which can have permissions on them assigned through pre-defined roles. Authenticating with a service principal is the best way to write secure scripts or programs, allowing you to apply both permissions restrictions and locally stored static credential information. To learn more about service principals, see [Create an Azure service principal with the Azure CLI](https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest#sign-in-using-a-service-principal).

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
