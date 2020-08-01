---
uid: reference/group
title: pbicli group
documentId: 52f7094c-4eac-4511-9faa-7be542326d2b
---

# pbicli group

## Commands

|                                                       |                                             |
| ----------------------------------------------------- | ------------------------------------------- |
| [pbicli group create](#pbicli-group-create)           | Creates a Power BI group                    |
| [pbicli group delete](#pbicli-group-delete)           | Delete a Power BI group                     |
| [pbicli group list](#pbicli-group-list)               | List Power BI groups the user has access to |
| [pbicli group show](#pbicli-group-show)               | Get detials of a Power BI group             |
| [pbicli group user add](#pbicli-group-user-add)       | Grant access to a user or service pricipal  |
| [pbicli group user delete](#pbicli-group-user-delete) | Revoke access of a user or service pricipal |
| [pbicli group user list](#pbicli-group-user-list)     | List user and service pricipal with access  |
| [pbicli group user update](#pbicli-group-user-update) | Update access of a user or service pricipal |

## pbicli group create

Creates a Power BI group

```bash
pbicli group create [--group] [-g]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group delete

Delete a Power BI group

```bash
pbicli group delete [--group] [-g]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group list

List Power BI groups the user has access to

```bash
pbicli group list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group show

Get detials of a Power BI group

```bash
pbicli group show [--group] [-g]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group user add

```bash
pbicli group user add [--group] [-g]
                      [--email]
                      [--identifier]
                      [--access-right]
                      [--principal-type]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

-   `--access-right <right>`<br/>Access right. Allowed values: Admin, Contributor, Member

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group user delete

```bash
pbicli group user delete [--group] [-g]
                         [--email]
                         [--identifier]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group user list

```bash
pbicli group user list [--group] [-g]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli group user update

```bash
pbicli group user update [--group] [-g]
                         [--email]
                         [--identifier]
                         [--access-right]
                         [--principal-type]
```

### Parameters

-   `--group -g <name>`<br/>Name or ID of the Power BI group

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

-   `--access-right <right>`<br/>Access right. Allowed values: Admin, Contributor, Member

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
