---
uid: reference/import
title: pbicli import
documentId: f985f710-4de1-4392-8195-fb428ec60f15
---

# pbicli import

## Commands

|                                                       |                                                           |
| ----------------------------------------------------- | --------------------------------------------------------- |
| [pbicli import dataflow](#pbicli-import-dataflow)     | Upload of Power BI dataflow JSON file                     |
| [pbicli import list](#pbicli-import-list)             | List Power BI imports                                     |
| [pbicli import pbix](#pbicli-import-pbix)             | Upload of Power BI PBIX file (< 1GB)                      |
| [pbicli import pbix-large](#pbicli-import-pbix-large) | Start an upload of Power BI PBIX file (> 1GB, < 10GB)     |
| [pbicli import rdl](#pbicli-import-rdl)               | Upload of Power BI RDL file                               |
| [pbicli import show](#pbicli-import-show)             | Get the details of a Power BI import                      |
| [pbicli import temp](#pbicli-import-temp)             | Creates a temporaty upload location for a Power BI report |

## pbicli import dataflow

Upload of Power BI dataflow JSON file

```bash
pbicli import dataflow [--workspace] [-w]
                       [--file]
                       [--conflict]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--file <file>`<br/>Path to the dataflow JSON file

-   `--conflict <option>`<br/>Option to resolve a dataflow name conflict. Allowed values: Abort, GenerateUniqueName

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli import list

List Power BI imports

```bash
pbicli import list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli import pbix

Upload of Power BI PBIX file (< 1GB)

```bash
pbicli import pbix [--workspace] [-w]
                   [--file]
                   [--name]
                   [--conflict]
                   [--skip-report]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--file <path>`<br/>Path to the PBIX file

-   `--name <name>`<br/>The display name of the dataset with file extension. Default the file name is used

-   `--conflict <option>`<br/>Option to resolve a dataset name conflict. Default value is 'Ignore'. Allowed values: Abort, CreateOrOverwrite, Ignore, Overwrite

-   `--skip-report`<br/>Do not import the report from the PBIX file

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli import pbix-large

Start an upload of Power BI PBIX file (> 1GB, < 10GB)

```bash
pbicli import pbix-large [--workspace] [-w]
                         [--name]
                         [--url]
                         [--conflict]
                         [--skip-report]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--name <name>`<br/>The display name of the dataset

-   `--url <url>`<br/>Url of the temporary blob storage

-   `--conflict <option>`<br/>Option to resolve a dataset name conflict. Default value is 'Ignore'. Allowed values: Abort, CreateOrOverwrite, Ignore, Overwrite

-   `--skip-report`<br/>Do not import the report from the PBIX file

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli import rdl

Upload of Power BI RDL file

```bash
pbicli import rdl [--workspace] [-w]
                  [--file]
                  [--name]
                  [--conflict]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--file <file>`<br/>Path to the RDL file

-   `--name <name>`<br/>The display name of the report with file extension. Default the file name is used

-   `--conflict <option>`<br/>Option to resolve a report name conflict. Allowed values: Abort, Overwrite

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli import show

Get the details of a Power BI import

```bash
pbicli import show [--workspace] [-w]
                   [--import] [-i]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--import -i <import>`<br/>Name or ID of the Power BI import

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli import temp

Creates a temporaty upload location for a Power BI report

```bash
pbicli import temp [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
