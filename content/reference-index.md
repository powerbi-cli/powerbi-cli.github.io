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
| [pbicli report](xref:reference/report)       | Operations for working with reports              |
| [pbicli pipeline](xref:reference/pipeline)   | Operations for working with pipelines            |
| [pbicli scorecard](xref:reference/scorecard) | Operations for working with scorecards (goals)   |
| [pbicli workspace](xref:reference/workspace) | Operations for working with workspaces           |
| [pbicli user](xref:reference/user)           | Operations for working with users                |
| [pbicli xmla](xref:reference/xmla)           | [PREVIEW] Manage Power BI XMLA endpoint          |

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

### Examples

Login interactive

```bash
pbicli login
```

Login with Azure CLI credentials

```bash
pbicli login --azurecli
```

Log in with a service principal using client secret

```bash
pbicli login --service-principal -p 7105d380-a699-4d0a-aeb4-ad3e6f4db865 -s VerySecret -t contoso.onmicrosoft.com
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

## pbicli logout

Log out and deletes stored login information for the Power BI REST APIs.

```bash
pbicli logout
```

## pbicli version

Show the versions of Power BI CLI and show a message if a new version is available

```bash
pbicli version
```

## Feedback
