---
uid: reference/dataset
title: pbicli dataset
documentId: 97583c27-9f85-493f-8b3f-e6e02184ef38
---

# pbicli dataset

## Commands

|                                                                         |                                                                             |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [pbicli dataset dataflow](#pbicli-dataset-dataflow)                     | Get the dataflows uplinks of a Power BI dataset                             |
| [pbicli dataset delete](#pbicli-dataset-delete)                         | Deletes a Power BI dataset from a group                                     |
| [pbicli dataset list](#pbicli-dataset-list)                             | List Power BI datasets in a group                                           |
| [pbicli dataset set-owner](#pbicli-dataset-set-owner)                   | Set the owner of a Power BI dataset to the current user / service principal |
| [pbicli dataset show](#pbicli-dataset-show)                             | Get the details of a Power BI dataset                                       |
| [pbicli dataset datasource list](#pbicli-dataset-datasource-list)       | List the datasources of a Power BI dataset                                  |
| [pbicli dataset datasource gateway](#pbicli-dataset-datasource-gateway) | List the datasource of a gateways linked to a Power BI dataset              |
| [pbicli dataset gateway datasource](#pbicli-dataset-gateway-datasource) | List the datasource of a gateways linked to a Power BI dataset              |
| [pbicli dataset gateway list](#pbicli-dataset-gateway-list)             | List the gateways of a Power BI dataset                                     |
| [pbicli dataset gateway update](#pbicli-dataset-gateway-update)         | Bind a gatweay of a Power BI dataset                                        |
| [pbicli dataset parameter list](#pbicli-dataset-parameter-list)         | List the parameters of a Power BI dataset                                   |
| [pbicli dataset parameter update](#pbicli-dataset-parameter-update)     | Update the parameters of a Power BI dataset                                 |
| [pbicli dataset refresh history](#pbicli-dataset-refresh-history)       | Get the history of a Power BI refresh schedule                              |
| [pbicli dataset refresh update](#pbicli-dataset-refresh-update)         | Update a Power BI refresh schedule                                          |
| [pbicli dataset refresh show](#pbicli-dataset-refresh-show)             | Get the details of a Power BI refresh schedule                              |

## pbicli dataset dataflow

Get the dataflows uplinks of a Power BI dataset

```bash
pbicli dataset delete [--workspace] [-w]
                      [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset delete

Deletes a Power BI dataset from a group

```bash
pbicli dataset delete [--workspace] [-w]
                      [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset list

List Power BI datasets in a group

```bash
pbicli dataset list [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset set-owner

Set the owner of a Power BI dataset to the current user / service principal

```bash
pbicli dataset set-owner [--workspace] [-w]
                         [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset show

Get the details of a Power BI dataset

```bash
pbicli dataset show [--workspace] [-w]
                    [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset datasource list

List the datasources of a Power BI dataset

```bash
pbicli dataset datasource list [--workspace] [-w]
                               [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset datasource gateway

List the datasource of a gateways linked to a Power BI dataset

```bash
pbicli dataset datasource gateway [--workspace] [-w]
                                  [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset gateway datasource

List the datasource of a gateways linked to a Power BI dataset

```bash
pbicli dataset gateway datasource [--workspace] [-w]
                                  [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset gateway list

List the gateways of a Power BI dataset

```bash
pbicli dataset gateway list [--workspace] [-w]
                            [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset gateway update

Bind a gatweay of a Power BI dataset

```bash
pbicli dataset gateway list [--workspace] [-w]
                            [--dataset] [-d]
                            [--gatewayId]
                            [--datasourceIds]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--gatewayId <gatewayId>`<br/>Name or ID of the Power BI gateway

-   `--datasourceIds <data>`<br/>Set of datasource Ids. Comma seperated

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset parameter list

List the parameters of a Power BI dataset

```bash
pbicli dataset parameter list [--workspace] [-w]
                              [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset parameter update

Update the parameters of a Power BI dataset

```bash
pbicli dataset parameter list [--workspace] [-w]
                              [--dataset] [-d]
                              [--parameter]
                              [--parameter-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--parameter <data>`<br/>String with the parameters in JSON format

-   `--parameter-file <file>`<br/>File with the parameters in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset refresh history

Get the history of a Power BI refresh schedule

```bash
pbicli dataset refresh history [--workspace] [-w]
                               [--dataset] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset refresh update

Update a Power BI refresh schedule

```bash
pbicli dataset refresh list [--workspace] [-w]
                            [--dataset] [-d]
                            [--refresh-schedule]
                            [--refresh-schedule-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `---refresh-schedule <data>`<br/>String with the refresh schedule in JSON format

-   `--refresh-schedule-file <file>`<br/>File with the refresh schedule in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset refresh show

Get the details of a Power BI refresh schedule

```bash
pbicli dataset refresh history [--workspace] [-w]
                               [--dataset] [-d]
                               [--direct-query]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--direct-query`<br/>Dataset is a direct query or live connection

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
