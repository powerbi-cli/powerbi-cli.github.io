---
uid: reference/dataflow
title: pbicli dataflow
documentId: fd97c470-7d26-4337-a604-cdd27a0106bf
---

# pbicli dataflow

## Commands

|                                                                           |                                                          |
| ------------------------------------------------------------------------- | -------------------------------------------------------- |
| [pbicli dataflow datasource](#pbicli-dataflow-datasource)                 | Get the datasources of a Power BI dataflow               |
| [pbicli dataflow delete](#pbicli-dataflow-delete)                         | Deletes a Power BI dataflow from a group                 |
| [pbicli dataflow list](#pbicli-dataflow-list)                             | List Power BI dataflows in a group                       |
| [pbicli dataflow refresh start](#pbicli-dataflow-refresh-start)           | Start a refresh of a Power BI dataflow                   |
| [pbicli dataflow refresh update](#pbicli-dataflow-refresh-update)         | Update a Power BI refresh schedule                       |
| [pbicli dataflow show](#pbicli-dataflow-show)                             | Get the details of a Power BI dataflow                   |
| [pbicli dataflow storage assign](#pbicli-dataflow-storage-assign)         | Assign a Power BI group to a dataflow storage account    |
| [pbicli dataflow storage list](#pbicli-dataflow-storage-list)             | List Power BI dataflow storage accounts                  |
| [pbicli dataflow storage unassign](#pbicli-dataflow-storage-unassign)     | Unassign a Power BI group to a dataflow storage account  |
| [pbicli dataflow transaction cancel](#pbicli-dataflow-transaction-cancel) | Attempts to cancel a Power BI group dataflow transaction |
| [pbicli dataflow transaction list](#pbicli-dataflow-transaction-list)     | List Power BI dataflow Transactions                      |
| [pbicli dataflow update](#pbicli-dataflow-update)                         | Update dataflow properties, capabilities and settings    |
| [pbicli dataflow upstream](#pbicli-dataflow-upstream)                     | Get the upstream dataflows of a Power BI dataflow        |

## pbicli dataflow datasource

Get the datasources of a Power BI dataflow

```bash
pbicli dataflow datasource [--workspace] [-w]
                           [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow delete

Deletes a Power BI dataflow from a group

```bash
pbicli dataflow delete [--workspace] [-w]
                       [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow list

List Power BI dataflows in a group

```bash
pbicli dataflow list [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow refresh start

Start a refresh of a Power BI dataflow

```bash
pbicli dataflow refresh start [--workspace] [-w]
                              [--dataflow] [-f]
                              [--notify]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

-   `--notify <option>`<br/>Allowed values: always, failure, none

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow refresh update

Update a Power BI refresh schedule

```bash
pbicli dataflow refresh update [--workspace] [-w]
                               [--dataflow] [-f]
                               [--refresh-schedule]
                               [--refresh-schedule-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

-   `--refresh-schedule <data>`<br/>String with the refresh schedule in JSON format. Use @{file} to load from a file

-   `--refresh-schedule-file <file>`<br/>File with the refresh schedule in JSON format. Deprecated: use --refresh-schedule @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow show

Get the details of a Power BI dataflow

```bash
pbicli dataflow show [--workspace] [-w]
                     [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow storage assign

Assign a Power BI group to a dataflow storage account

```bash
pbicli dataflow storage assign [--workspace] [-w]
                               [--storage-account]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--storage-account <storage>`<br/>ID of the Power BI dataflow storage account

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow storage list

List Power BI dataflow storage accounts

```bash
pbicli dataflow storage list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow storage unassign

Unassign a Power BI group to a dataflow storage account

```bash
pbicli dataflow storage unassign [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow transaction cancel

Attempts to cancel a Power BI group dataflow transaction

```bash
pbicli dataflow transaction cancel [--workspace] [-w]
                                   [--transaction]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--transaction <transaction>`<br/>ID of the Power BI dataflow transaction

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow transaction list

List Power BI dataflow Transactions

```bash
pbicli dataflow transaction list [--workspace] [-w]
                                 [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow update

Update dataflow properties, capabilities and settings

```bash
pbicli dataflow update [--workspace] [-w]
                       [--dataflow] [-f]
                       [--update]
                       [--update-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

-   `--update <data>`<br/>String with the update dataflow settings in JSON format. Use @{file} to load from a file

-   `--update-file <file>`<br/>File with the update dataflow settings in JSON format. Deprecated: use --update @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow upstream

Get the upstream dataflows of a Power BI dataflow

```bash
pbicli dataflow upstream [--workspace] [-w]
                         [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
