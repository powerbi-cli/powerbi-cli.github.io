---
uid: reference/dataflow
title: pbicli dataflow
documentId: fd97c470-7d26-4337-a604-cdd27a0106bf
---

# pbicli dataflow

## Commands

|                                                                       |                                                       |
| --------------------------------------------------------------------- | ----------------------------------------------------- |
| [pbicli dataflow datasource](#pbicli-dataflow-datasource)             | Get the datasources of a Power BI dataflow            |
| [pbicli dataflow delete](#pbicli-dataflow-delete)                     | Deletes a Power BI dataflow from a group              |
| [pbicli dataflow list](#pbicli-dataflow-list)                         | List Power BI dataflows in a group                    |
| [pbicli dataflow show](#pbicli-dataflow-show)                         | Get the details of a Power BI dataflow                |
| [pbicli dataflow upstream](#pbicli-dataflow-upstream)                 | Get the upstream dataflows of a Power BI dataflow     |
| [pbicli dataflow refresh start](#pbicli-dataflow-refresh-start)       | Start a refresh of a Power BI dataflow                |
| [pbicli dataflow refresh update](#pbicli-dataflow-refresh-update)     | Update a Power BI refresh schedule                    |
| [pbicli dataflow storage assign](#pbicli-dataflow-storage-assign)     | Assign a Power BI group to a dataflow storage account |
| [pbicli dataflow storage list](#pbicli-dataflow-storage-list)         | List Power BI dataflow storage accounts               |
| [pbicli dataflow storage unassign](#pbicli-dataflow-storage-unassign) | Assign a Power BI group to a dataflow storage account |

## pbicli dataflow datasource

Get the datasources of a Power BI dataflow

```bash
pbicli dataflow datasource [--workspace] [-w]
                           [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

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
pbicli dataflow delet [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow show

Get the details of a Power BI dataflow

```bash
pbicli dataflow delet [--workspace] [-w]
                      [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

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

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow refresh start

Start a refresh of a Power BI dataflow

```bash
pbicli dataflow refresh start [--workspace] [-w]
                              [--dataflow] [-f]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataflow refresh update

Start a refresh of a Power BI dataflow

```bash
pbicli dataflow refresh update [--workspace] [-w]
                               [--dataflow] [-f]
                               [--refresh-schedule]
                               [--refresh-schedule-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataflow -f <dataflow>`<br/>Name or ID of the Power BI dataflow

-   `--refresh-schedule <data>`<br/>`String with the refresh schedule in JSON format

-   `--refresh-schedule-file <file>`<br/>File with the refresh schedule in JSON format

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

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

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

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
