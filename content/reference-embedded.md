---
uid: reference/embedded
title: pbicli embedded
documentId: 2cc1f15a-f76d-4d60-892c-75eb9ba60024
---

# pbicli embedded

## Commands

|                                                   |                                                               |
| ------------------------------------------------- | ------------------------------------------------------------- |
| [pbicli embedded list](#pbicli-embedded-list)     | Lists all the dedicated capacities for the given subscription |
| [pbicli embedded show](#pbicli-embedded-show)     | Gets details about the specified dedicated capacity           |
| [pbicli embedded start](#pbicli-embedded-start)   | Starts the specified dedicated capacity                       |
| [pbicli embedded stop](#pbicli-embedded-stop)     | Stops the specified dedicated capacity                        |
| [pbicli embedded update](#pbicli-embedded-update) | Changes the specific capacity information                     |

## pbicli embedded list

Lists all the dedicated capacities for the given subscription

```bash
pbicli embedded list [--subscription] [-s]
                     [--resource] [-r]
```

### Parameters

-   `--subscription -s <subscription>`<br/>Name or ID of the Azure subscription

-   `--resource -r <resource>`<br/>(Optional) Name or ID of the Azure Resource group

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli embedded show

Gets details about the specified dedicated capacity

```bash
pbicli embedded show [--subscription] [-s]
                     [--resource] [-r]
                     [--capacity] [-c]
```

### Parameters

-   `--subscription -s <subscription>`<br/>Name or ID of the Azure subscription

-   `--resource -r <resource>`<br/>Name or ID of the Azure Resource group

-   `--capacity -c <name>`<br/>Name of the Azure dedicated capacity

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli embedded start

Starts the specified dedicated capacity

```bash
pbicli embedded start [--subscription] [-s]
                      [--resource] [-r]
                      [--capacity] [-c]
```

### Parameters

-   `--subscription -s <subscription>`<br/>Name or ID of the Azure subscription

-   `--resource -r <resource>`<br/>Name or ID of the Azure Resource group

-   `--capacity -c <name>`<br/>Name of the Azure dedicated capacity

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli embedded stop

Stops the specified dedicated capacity

```bash
pbicli embedded stop [--subscription] [-s]
                     [--resource] [-r]
                     [--capacity] [-c]
```

### Parameters

-   `--subscription -s <subscription>`<br/>Name or ID of the Azure subscription

-   `--resource -r <resource>`<br/>Name or ID of the Azure Resource group

-   `--capacity -c <name>`<br/>Name of the Azure dedicated capacity

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli embedded update

Changes the specific capacity information

```bash
pbicli embedded update [--subscription] [-s]
                       [--resource] [-r]
                       [--capacity] [-c]
                       [--parameter]
                       [--parameter-file]
```

### Parameters

-   `--subscription -s <subscription>`<br/>Name or ID of the Azure subscription

-   `--resource -r <resource>`<br/>Name or ID of the Azure Resource group

-   `--capacity -c <name>`<br/>Name of the Azure dedicated capacity

-   `--parameter <data>`<br/>String with the capacity parameters in JSON format

-   `--parameter-file <file>`<br/>File with the capacity parameters in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
