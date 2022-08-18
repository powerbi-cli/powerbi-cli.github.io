---
uid: reference/dashboard
title: pbicli dashboard
documentId: c223e30d-da34-4b43-a5ac-cc8a612fc66d
---

# pbicli dashboard

## Commands

|                                                               |                                              |
| ------------------------------------------------------------- | -------------------------------------------- |
| [pbicli dashboard create](#pbicli-dashboard-create)           | Create a Power BI dashboard                  |
| [pbicli dashboard delete](#pbicli-dashboard-delete)           | Delete a Power BI dashboard                  |
| [pbicli dashboard list](#pbicli-dashboard-list)               | List Power BI dashboards in a workspace      |
| [pbicli dashboard show](#pbicli-dashboard-show)               | Get the details of a Power BI dashboard      |
| [pbicli dashboard tile create](#pbicli-dashboard-tile-create) | Clone a Power BI dashboard tile              |
| [pbicli dashboard tile list](#pbicli-dashboard-tile-list)     | List Power BI dashboard tiles in a workspace |
| [pbicli dashboard tile show](#pbicli-dashboard-tile-show)     | Get the details of a Power BI dashboard tile |

## pbicli dashboard create

Create a Power BI dashboard

```bash
pbicli dashboard create [--workspace] [-w]
                        [--dashboard] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dashboard -d <dashboard>`<br/>Name of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dashboard delete

Delete a Power BI dashboard

```bash
pbicli dashboard delete [--workspace] [-w]
                        [--dashboard] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dashboard -d <dashboard>`<br/>Name or ID of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dashboard list

List Power BI dashboards in a workspace

```bash
pbicli dashboard list [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dashboard show

Get the details of a Power BI dashboard

```bash
pbicli dashboard show [--workspace] [-w]
                      [--dashboard] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dashboard -d <dashboard>`<br/>Name or ID of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dashboard tile create

Clone a Power BI dashboard tile

```bash
pbicli dashboard tile create [--workspace] [-w]
                             [--dashboard] [-d]
                             [--tile] [-t]
                             [--dest-dashboard]
                             [--dest-workspace]
                             [--dest-model]
                             [--dest-report]
                             [--abort]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dashboard -d <dashboard>`<br/>Name of the Power BI dashboard

-   `--tile -t <tile>`<br/>Name or ID of the Power BI dashboard tile

-   `--dest-dashboard <destdashboard>`<br/>ID of the destination Power BI dashboard

-   `--dest-workspace [destworkspace]`<br/>ID of the destination Power BI workspace

-   `--dest-model [destmodel]`<br/>ID of the destination Power BI model/dataset

-   `--dest-report [destreport]`<br/>ID of the destination Power BI report

-   `--abort`<br/>If set the clone action will be arborted if the row/column position is not available

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dashboard tile list

List Power BI dashboard tiles in a workspace

```bash
pbicli dashboard tile list [--workspace] [-w]
                           [--dashboard] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dashboard -d <dashboard>`<br/>Name or ID of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dashboard tile show

Get the details of a Power BI dashboard tile

```bash
pbicli dashboard tile show [--workspace] [-w]
                           [--dashboard] [-d]
                           [--tile] [-t]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dashboard -d <dashboard>`<br/>Name or ID of the Power BI dashboard

-   `--tile -t <tile>`<br/>Name or ID of the Power BI dashboard tile

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
