---
uid: reference/pipeline
title: pbicli pipeline
documentId: df1436b4-72fa-430a-bdeb-b20dd7f4e82d
---

# pbicli pipeline

## Commands

|                                                                   |                                                                    |
| ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| [pbicli pipeline assign](#pbicli-pipeline-assign)                 | Assigns the workspace to the specified deployment pipeline stage   |
| [pbicli pipeline create](#pbicli-pipeline-create)                 | Creates a Power BI pipeline                                        |
| [pbicli pipeline delete](#pbicli-pipeline-delete)                 | Delete a Power BI pipeline                                         |
| [pbicli pipeline deploy](#pbicli-pipeline-deploy)                 | Start a deploy from a specific stage in a Power BI pipeline        |
| [pbicli pipeline list](#pbicli-pipeline-list)                     | List Power BI pipelines                                            |
| [pbicli pipeline operation list](#pbicli-pipeline-operation-list) | List the operations of a Power BI pipeline                         |
| [pbicli pipeline operation show](#pbicli-pipeline-operation-show) | Show a specific operation of a Power BI pipeline                   |
| [pbicli pipeline show](#pbicli-pipeline-show)                     | Get the details of a Power BI pipeline                             |
| [pbicli pipeline stage artifact](#pbicli-pipeline-stage-artifact) | List the artifacts of a Power BI pipeline stage                    |
| [pbicli pipeline stage list](#pbicli-pipeline-stage-list)         | List the stages of a Power BI pipeline                             |
| [pbicli pipeline unassign](#pbicli-pipeline-unassign)             | Unassigns the workspace to the specified deployment pipeline stage |
| [pbicli pipeline user delete](#pbicli-pipeline-user-delete)       | Revoke access of a user or service pricipal                        |
| [pbicli pipeline user list](#pbicli-pipeline-user-list)           | List user and service pricipal with access                         |
| [pbicli pipeline user update](#pbicli-pipeline-user-update)       | Update access of a user or service pricipal                        |

## pbicli pipeline assign

Assigns the workspace to the specified deployment pipeline stage

```bash
pbicli pipeline assign [--pipeline] [-p]
                       [--stage]
                       [--workspace] [-w]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--stage <number>`<br/>The deployment pipeline stage order. Development (0), Test (1), Production (2)

-   `--workspace -w <name>`<br/>Name of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline create

Creates a Power BI pipeline

```bash
pbicli pipeline create [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline delete

Delete a Power BI pipeline

```bash
pbicli pipeline delete [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline deploy

Start a deploy from a specific stage in a Power BI pipeline

```bash
pbicli pipeline deploy [--pipeline] [-p]
                       [--partial]
                       [--options]
                       [--options-file]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--partial`<br/>

-   `--options <data>`<br/>String with the deploy options in JSON format

-   `--options-file <file>`<br/>File with the deploy options in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline list

List Power BI pipelines

```bash
pbicli pipeline list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline operation list

List the operations of a Power BI pipeline

```bash
pbicli pipeline operation list [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline operation show

Show a specific operation of a Power BI pipeline

```bash
pbicli pipeline operation show [--pipeline] [-p]
                               [--operation]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--operation <operationId>`<br/>ID of the Power BI pipeline operation

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline show

Get the details of a Power BI pipeline

```bash
pbicli pipeline show [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline stage artifact

List the artifacts of a Power BI pipeline stage

```bash
pbicli pipeline stage artifact [--pipeline] [-p]
                               [--stage] [-s]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--stage -s <number>`<br/>Number of the Power BI pipeline stage

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline stage list

List the stages of a Power BI pipeline

```bash
pbicli pipeline stage list [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline unassign

Unassigns the workspace to the specified deployment pipeline stage

```bash
pbicli pipeline unassign [--pipeline] [-p]
                         [--stage]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--stage <number>`<br/>The deployment pipeline stage order. Development (0), Test (1), Production (2)

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline user delete

Revoke access of a user or service pricipal

```bash
pbicli pipeline user delete [--pipeline] [-p]
                            [--identifier]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--identifier <identifier>`<br/>Identifier of the user or principal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline user list

List user and service pricipal with access

```bash
pbicli pipeline user list [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli pipeline user update

Update access of a user or service pricipal

```bash
pbicli pipeline user update [--pipeline] [-p]
                            [--identifier]
                            [--access-right]
                            [--principal-type]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--identifier <identifier>`<br/>Identifier of the user or principal

-   `--access-right <right>`<br/>Access right. Allowed values: Admin

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group, None

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
