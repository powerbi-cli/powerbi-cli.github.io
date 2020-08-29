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
| [pbicli app](xref:reference/app)             | Manage Power BI apps                             |
| [pbicli capacity](xref:reference/capacity)   | Manage Power BI capacities                       |
| [pbicli dashboard](xref:reference/dashboard) | Manage Power BI dashboards                       |
| [pbicli dataflow](xref:reference/dataflow)   | Manage Power BI dataflows                        |
| [pbicli dataset](xref:reference/dataset)     | Manage Power BI datasets                         |
| [pbicli feature](xref:reference/feature)     | Manage Power BI features                         |
| [pbicli gateway](xref:reference/gateway)     | Manage Power BI gateways                         |
| [pbicli import](xref:reference/import)       | Manage Power BI imports                          |
| [pbicli report](xref:reference/report)       | Manage Power BI reports                          |
| [pbicli workspace](xref:reference/workspace) | Manage Power BI workspaces                       |

## pbicli login

Login to Power BI

```bash
pbicli login [--interactive]
             [--azurecli]
             [--service-principal]
             [--principal] [-p] <principal>
             [--secret] [-s] <secret>
             [--tenant] [-t] <tenant>
```

### Examples

Login with Azure CLI credentials

```bash
pbicli login --azurecli
```

Login interactive

```bash
pbicli login --interactive
```

Log in with a service principal using client secret

```bash
pbicli login --service-principal -p 7105d380-a699-4d0a-aeb4-ad3e6f4db865 -s VerySecret -t contoso.onmicrosoft.com
```

### Parameters

-   `--interactive`<br/>Login interactively

-   `--azurecli`<br/>Login via Azure CLI

-   `--service-principal`<br/>Login with a service principal

-   `--principal -p <principal>`<br/>The service principal ID

-   `--secret -s <secret>`<br/>Client secret of a service principal. Will prompt if not given.

-   `--tenant -t <tenant>`<br/>The AAD tenant, must provide when using service principal and interactive login.

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
