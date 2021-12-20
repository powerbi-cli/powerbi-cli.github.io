---
uid: reference/gateway
title: pbicli gateway
documentId: b7c29e54-4160-4269-a18f-62d217310694
---

# pbicli gateway

## Commands

|                                                                                 |                                                              |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [pbicli gateway datasource create](#pbicli-gateway-datasource-create)           | Create a datasource at a Power BI gateway                    |
| [pbicli gateway datasource delete](#pbicli-gateway-datasource-delete)           | Deletes a datasource at a Power BI gateway                   |
| [pbicli gateway datasource list](#pbicli-gateway-datasource-list)               | List datasources of a Power BI gateway                       |
| [pbicli gateway datasource show](#pbicli-gateway-datasource-show)               | Get the detail of a datasource of a Power BI gateway         |
| [pbicli gateway datasource status](#pbicli-gateway-datasource-status)           | Get the status details of a datasource of a Power BI gateway |
| [pbicli gateway datasource update](#pbicli-gateway-datasource-update)           | Update a datasource at a Power BI gateway                    |
| [pbicli gateway datasource user add](#pbicli-gateway-datasource-user-add)       | Add user to a datasource of a Power BI gateway               |
| [pbicli gateway datasource user delete](#pbicli-gateway-datasource-user-delete) | Delete user from the datasource of a Power BI gateway        |
| [pbicli gateway datasource user list](#pbicli-gateway-datasource-user-list)     | Retrieve users for the datasource of a Power BI gateway      |

| [pbicli gateway list](#pbicli-gateway-list) | List Power BI gateways |
| [pbicli gateway show](#pbicli-gateway-show) | Get the details of a Power BI gateway |

## pbicli gateway datasource create

Create a datasource at a Power BI gateway

```bash
pbicli gateway datasource create [--gateway] [-g]
                                 [--datasource]
                                 [--datasource-file]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource <datasource>`<br/>String with the datasource definition in JSON format

-   `--datasource-file <file>`<br/>File with the datasource definition in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource delete

Deletes a datasource at a Power BI gateway

```bash
pbicli gateway datasource delete [--gateway] [-g]
                                 [--datasource] [-d]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource list

List datasources of a Power BI gateway

```bash
pbicli gateway datasource list [--gateway] [-g]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource show

Get the detail of a datasource of a Power BI gateway

```bash
pbicli gateway datasource show [--gateway] [-g]
                               [--datasource] [-d]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource status

Get the status details of a datasource of a Power BI gateway

```bash
pbicli gateway datasource status [--gateway] [-g]
                                 [--datasource] [-d]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource update

Update a datasource at a Power BI gateway

```bash
pbicli gateway datasource update [--gateway] [-g]
                                 [--datasource] [-d]
                                 [--credential]
                                 [--credential-file]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

-   `--credential <credential>`<br/>String with the datasource credential definition in JSON format

-   `--credential-file <file>`<br/>File with the datasource credential definition in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource user add

Add user to a datasource of a Power BI gateway

```bash
pbicli gateway datasource user add [--gateway] [-g]
                                   [--datasource] [-d]
                                   [--email]
                                   [--identifier]
                                   [--access-right]
                                   [--principal-type]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

-   `--access-right <right>`<br/>Access right. Allowed values: None, Read, ReadOverrideEffectiveIdentity

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group, None

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource user delete

Delete user from the datasource of a Power BI gateway

```bash
pbicli gateway datasource user delete [--gateway] [-g]
                                      [--datasource] [-d]
                                      [--email]
                                      [--identifier]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway datasource user list

Retrieve users for the datasource of a Power BI gateway

```bash
pbicli gateway datasource user list [--gateway] [-g]
                                    [--datasource] [-d]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

-   `--datasource -d <datasource>`<br/>Name or ID of the datasource of the Power BI gateway

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway list

List Power BI gateways

```bash
pbicli gateway list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli gateway show

Get the details of a Power BI gateway

```bash
pbicli gateway show [--gateway] [-g]
```

### Parameters

-   `--gateway -g <gateway>`<br/>Name or ID of the Power BI gateway

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
