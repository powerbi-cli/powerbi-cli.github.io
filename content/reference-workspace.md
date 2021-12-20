---
uid: reference/workspace
title: pbicli workspace
documentId: 52f7094c-4eac-4511-9faa-7be542326d2b
---

# pbicli workspace

## Commands

|                                                               |                                                 |
| ------------------------------------------------------------- | ----------------------------------------------- |
| [pbicli workspace create](#pbicli-workspace-create)           | Creates a Power BI workspace                    |
| [pbicli workspace delete](#pbicli-workspace-delete)           | Delete a Power BI workspace                     |
| [pbicli workspace list](#pbicli-workspace-list)               | List Power BI workspaces the user has access to |
| [pbicli workspace show](#pbicli-workspace-show)               | Get detials of a Power BI workspace             |
| [pbicli workspace user add](#pbicli-workspace-user-add)       | Grant access to a user or service pricipal      |
| [pbicli workspace user delete](#pbicli-workspace-user-delete) | Revoke access of a user or service pricipal     |
| [pbicli workspace user list](#pbicli-workspace-user-list)     | List user and service pricipal with access      |
| [pbicli workspace user update](#pbicli-workspace-user-update) | Update access of a user or service pricipal     |

## pbicli workspace create

Creates a Power BI workspace

```bash
pbicli workspace create [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace delete

Delete a Power BI workspace

```bash
pbicli workspace delete [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace list

List Power BI workspaces the user has access to

```bash
pbicli workspace list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace show

Get detials of a Power BI workspace

```bash
pbicli workspace show [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace user add

Grant access to a user or service pricipal

```bash
pbicli workspace user add [--workspace] [-w]
                          [--email]
                          [--identifier]
                          [--access-right]
                          [--principal-type]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

-   `--access-right <right>`<br/>Access right. Allowed values: Admin, Contributor, Member

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group, None

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace user delete

Revoke access of a user or service pricipal

```bash
pbicli workspace user delete [--workspace] [-w]
                             [--email]
                             [--identifier]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace user list

List user and service pricipal with access

```bash
pbicli workspace user list [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli workspace user update

Update access of a user or service pricipal

```bash
pbicli workspace user update [--workspace] [-w]
                             [--email]
                             [--identifier]
                             [--access-right]
                             [--principal-type]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

-   `--access-right <right>`<br/>Access right. Allowed values: Admin, Contributor, Member

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group, None

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
