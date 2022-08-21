---
uid: reference/index
title: pbicli
documentId: 1c64785e-a725-4830-98e8-5b9aa2b6c4c3
---

# pbicli

## Commands

|                                              |                                                  |
| -------------------------------------------- | ------------------------------------------------ |
| [pbicli admin](xref:reference/admin)         | Operations for working with administrative tasks |
| [pbicli app](xref:reference/app)             | Operations for working with apps                 |
| [pbicli capacity](xref:reference/capacity)   | Operations for working with capacities           |
| [pbicli cloud](xref:reference/cloud)         | Operations for working with clouds               |
| [pbicli configure](xref:reference/configure) | Operations for working with CLI configuration    |
| [pbicli dashboard](xref:reference/dashboard) | Operations for working with dashboards           |
| [pbicli dataflow](xref:reference/dataflow)   | Operations for working with dataflows            |
| [pbicli dataset](xref:reference/dataset)     | Operations for working with datasets             |
| [pbicli embedded](xref:reference/embedded)   | Operations for working with Embedded capacity    |
| [pbicli feature](xref:reference/feature)     | Operations for working with features             |
| [pbicli gateway](xref:reference/gateway)     | Operations for working with gateways             |
| [pbicli import](xref:reference/import)       | Operations for working with imports              |
| [pbicli interactive](#pbicli-interactive)    | Start interactive mode                           |
| [pbicli login](#pbicli-login)                | Login to Power BI                                |
| [pbicli logout](#pbicli-logout)              | Logout of Power BI                               |
| [pbicli pipeline](xref:reference/pipeline)   | Operations for working with pipelines            |
| [pbicli report](xref:reference/report)       | Operations for working with reports              |
| [pbicli rest](#pbicli-rest)                  | Invoke a custom Power BI REST API request        |
| [pbicli scorecard](xref:reference/scorecard) | Operations for working with scorecards (goals)   |
| [pbicli user](xref:reference/user)           | Operations for working with users                |
| [pbicli version](#pbicli-version)            | Show the version of this Power BI CLI            |
| [pbicli workspace](xref:reference/workspace) | Operations for working with workspaces           |

## pbicli interactive

Start interactive mode

```bash
pbicli interactive
```

### Parameters

-   `-h, --help`<br/>display help for command

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli login

Login to Power BI

```bash
pbicli login [--interactive]
             [--use-device-code]
             [--azurecli]
             [--service-principal]
             [--principal] [-p]
             [--secret] [-s]
             [--tenant] [-t]
             [--no-azure]
```

### Parameters

-   `--interactive`<br/>Login interactively. Default value if no parameter is given

-   `--use-device-code`<br/>Use CLI's old authentication flow based on device code.

-   `--azurecli`<br/>Login via Azure CLI

-   `--service-principal`<br/>Login with a service principal

-   `--principal -p <principal>`<br/>The service principal ID

-   `--secret -s <secret>`<br/>Client secret

-   `--tenant -t <tenant>`<br/>The AAD tenant

-   `--no-azure`<br/>Do not authenticate against Azure for 'embedded' commands

### Examples

Login interactive

### [Bash](#tab/bash)

```bash
pbicli login
```

### [PowerShell](#tab/powershell)

```powershell
pbicli login
```

---

Login with Azure CLI credentials

### [Bash](#tab/bash)

```bash
pbicli login --azurecli
```

### [PowerShell](#tab/powershell)

```powershell
pbicli login --azurecli
```

---

Log in with a service principal using client secret

### [Bash](#tab/bash)

```bash
pbicli login --service-principal -p 7105d380-a699-4d0a-aeb4-ad3e6f4db865 -s VerySecret -t contoso.onmicrosoft.com
```

### [PowerShell](#tab/powershell)

```powershell
pbicli login --service-principal -p 7105d380-a699-4d0a-aeb4-ad3e6f4db865 -s VerySecret -t contoso.onmicrosoft.com
```

---

## pbicli logout

Log out and deletes stored login information for the Power BI REST APIs.

```bash
pbicli logout
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli rest

Invoke a custom Power BI REST API request

```bash
pbicli rest [--uri]
            [--body] [-b]
            [--headers]
            [--method] [-m]
```

### Parameters

-   `--uri <uri>`<br/>Request URL. If it doesn't start with a host, CLI prefixes it with the current cloud endpoint.

-   `--body -b <body>`<br/>Request body. Use @{file} to load from a file

-   `--headers <headers>`<br/>Space-separated headers in KEY=VALUE format or JSON string

-   `--method -m <method>`<br/>HTTP request method, accepted values: delete, get, head, options, patch, post, put

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli version

Show the version of this Power BI CLI

```bash
pbicli version
```

## Feedback
