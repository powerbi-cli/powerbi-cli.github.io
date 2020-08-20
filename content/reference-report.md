---
uid: reference/report
title: pbicli report
documentId: 98dcb314-d14b-4a8d-8b52-591594df9171
---

# pbicli report

## Commands

|                                                                 |                                                   |
| --------------------------------------------------------------- | ------------------------------------------------- |
| [pbicli report clone](#pbicli-report-clone)                     | Clones a Power BI report from a workspace         |
| [pbicli report datasource](#pbicli-report-datasource)           | Datasources of a Power BI report from a workspace |
| [pbicli report delete](#pbicli-report-delete)                   | Deletes a Power BI report from a workspace        |
| [pbicli report list](#pbicli-report-list)                       | List Power BI reports in a workspace              |
| [pbicli report page](#pbicli-report-page)                       | Get the details of a Power BI report page         |
| [pbicli report rebind](#pbicli-report-rebind)                   | Rebind a Power BI report to a dataset             |
| [pbicli report show](#pbicli-report-show)                       | Get the details of a Power BI report              |
| [pbicli report update](#pbicli-report-update)                   | Updates a Power BI report with to a dataset       |
| [pbicli report export download](#pbicli-report-export-download) | Download the exported Power BI reports            |
| [pbicli report export start](#pbicli-report-export-start)       | Start a Power BI report export                    |
| [pbicli report export status](#pbicli-report-export-status)     | Get the status of a Power BI report export        |

## pbicli report clone

Clones a Power BI report from a workspace

```bash
pbicli report clone [--workspace] [-w]
                    [--report] [-r]
                    [--name]
                    [--target-dataset]
                    [--target-workspace]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--name <name>`<br/>Name of the new Power BI report

-   `--target-dataset <dataset>`<br/>ID of the Power BI dataset for the cloned report. If not provided, the same dataset is used

-   `--target-workspace [workspace]`<br/>ID of the Power BI workspace for the cloned report. If not provided, the same workspace is used and if [workspaceId] is not provided 'My workspace' is used

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report datasource

Datasources of a Power BI report from a workspace

```bash
pbicli report datasource [--workspace] [-w]
                         [--report] [-r]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report delete

Deletes a Power BI report from a workspace

```bash
pbicli report delete [--workspace] [-w]
                     [--report] [-r]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report list

List Power BI reports in a workspace

```bash
pbicli report list [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report page

Get the details of a Power BI report page

```bash
pbicli report page [--workspace] [-w]
                   [--report] [-r]
                   [--page-name]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--page-name <name>`<br/>Name of the Power BI report page

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report rebind

Rebind a Power BI report to a dataset

```bash
pbicli report rebind [--workspace] [-w]
                     [--report] [-r]
                     [--target-dataset]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--target-dataset <dataset>`<br/>ID of the new Power BI dataset for the rebound report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report show

Get the details of a Power BI report

```bash
pbicli report show [--workspace] [-w]
                   [--report] [-r]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report update

Updates a Power BI report with to a dataset

```bash
pbicli report update [--workspace] [-w]
                     [--report] [-r]
                     [--source-workspace]
                     [--source-report]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--source-workspace <workspace>`<br/>ID of the source Power BI workspace

-   `--source-report <report>`<br/>ID of the source Power BI report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report export download

Download the exported Power BI report

```bash
pbicli report export download [--workspace] [-w]
                              [--report] [-r]
                              [--export]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--export <export>`<br/>ID of the Power BI report export

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report export start

Start a Power BI report export

```bash
pbicli report export start [--workspace] [-w]
                           [--report] [-r]
                           [--format]
                           [--config]
                           [--config-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--format <format>`<br/>Format of the exported report

    |                   |                                         |
    | ----------------- | --------------------------------------- |
    | All report types  | PDF, PPTX                               |
    | Power BI reports  | PBIX                                    |
    | Paginated reports | CSV, DOCX, IMAGE, MHTML, PNG, XLSX, XML |

-   `--config <data>`<br/>String with additional export config in JSON format

-   `--config-file <file>`<br/>File with additional export config in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli report export status

Get the status of a Power BI report export

```bash
pbicli report export status [--workspace] [-w]
                            [--report] [-r]
                            [--export]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <report>`<br/>Name or ID of the Power BI report

-   `--export <export>`<br/>ID of the Power BI report export

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
