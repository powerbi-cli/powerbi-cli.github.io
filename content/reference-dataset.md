---
uid: reference/dataset
title: pbicli dataset
documentId: 97583c27-9f85-493f-8b3f-e6e02184ef38
---

# pbicli dataset

## Commands

|                                                                         |                                                                                       |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [pbicli dataset dataflow](#pbicli-dataset-dataflow)                     | Get the dataflows uplinks of a Power BI dataset                                       |
| [pbicli dataset datasource gateway](#pbicli-dataset-datasource-gateway) | List the datasource of a gateways linked to a Power BI dataset                        |
| [pbicli dataset datasource list](#pbicli-dataset-datasource-list)       | List the datasources of a Power BI dataset                                            |
| [pbicli dataset datasource update](#pbicli-dataset-datasource-update)   | Update the datasources of a Power BI dataset                                          |
| [pbicli dataset delete](#pbicli-dataset-delete)                         | Deletes a Power BI dataset from a group                                               |
| [pbicli dataset gateway datasource](#pbicli-dataset-gateway-datasource) | List the datasource of a gateways linked to a Power BI dataset                        |
| [pbicli dataset gateway list](#pbicli-dataset-gateway-list)             | List the gateways of a Power BI dataset                                               |
| [pbicli dataset gateway update](#pbicli-dataset-gateway-update)         | Bind a gatweay of a Power BI dataset                                                  |
| [pbicli dataset list](#pbicli-dataset-list)                             | List Power BI datasets in a group                                                     |
| [pbicli dataset parameter list](#pbicli-dataset-parameter-list)         | List the parameters of a Power BI dataset                                             |
| [pbicli dataset parameter update](#pbicli-dataset-parameter-update)     | Update the parameters of a Power BI dataset                                           |
| [pbicli dataset query](#pbicli-dataset-query)                           | Execute an DAX query against the Power BI XMLA endpoint                               |
| [pbicli dataset refresh cancel](#pbicli-dataset-refresh-cancel)         | Cancels the refresh operation for the specified Power BI dataset                      |
| [pbicli dataset refresh detail](#pbicli-dataset-refresh-detail)         | Returns execution details of the refresh operation for the specified Power BI dataset |
| [pbicli dataset refresh history](#pbicli-dataset-refresh-history)       | Get the history of a Power BI refresh schedule                                        |
| [pbicli dataset refresh show](#pbicli-dataset-refresh-show)             | Get the details of a Power BI refresh schedule                                        |
| [pbicli dataset refresh start](#pbicli-dataset-refresh-start)           | Triggers a Power BI dataset refresh                                                   |
| [pbicli dataset refresh update](#pbicli-dataset-refresh-update)         | Update a Power BI refresh schedule                                                    |
| [pbicli dataset set-owner](#pbicli-dataset-set-owner)                   | Set the owner of a Power BI dataset to the current user / service principal           |
| [pbicli dataset show](#pbicli-dataset-show)                             | Get the details of a Power BI dataset                                                 |
| [pbicli dataset update](#pbicli-dataset-update)                         | Updates the properties for the specified dataset                                      |
| [pbicli dataset user update](#pbicli-dataset-user-update)               | Update access of a user or service pricipal                                           |

## pbicli dataset dataflow

Get the dataflows uplinks of a Power BI dataset

```bash
pbicli dataset dataflow [--workspace] [-w]
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

## pbicli dataset datasource update

Update the datasources of a Power BI dataset

```bash
pbicli dataset datasource update [--workspace] [-w]
                                 [--dataset] [-d]
                                 [--update-details]
                                 [--update-details-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--update-details <data>`<br/>String with the connection server details in JSON format. Use @{file} to load from a file

-   `--update-details-file <file>`<br/>File with the connection server details in JSON format. Deprecated: use --update-details @{file}

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
pbicli dataset gateway update [--workspace] [-w]
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
pbicli dataset parameter update [--workspace] [-w]
                                [--dataset] [-d]
                                [--parameter]
                                [--parameter-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--parameter <data>`<br/>String with the parameters in JSON format. Use @{file} to load from a file

-   `--parameter-file <file>`<br/>File with the parameters in JSON format. Deprecated: use --parameter @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset query

Execute an DAX query against the Power BI XMLA endpoint

```bash
pbicli dataset query [--workspace] [-w]
                     [--dataset] [-d]
                     [--dax]
                     [--dax-file]
                     [--script]
                     [--script-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. Optional if dataset is provided as ID.

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--dax <query>`<br/>String with the DAX query to be executed. Use @{file} to load from a file

-   `--dax-file <file>`<br/>File with the DAX query to be executed. Deprecated: use --dax @{file}

-   `--script <script>`<br/>String with the raw query statement in JSON format. Use @{file} to load from a file

-   `--script-file <file>`<br/>File with the raw query statement in JSON format. Deprecated: use --script @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset refresh cancel

Cancels the refresh operation for the specified Power BI dataset

```bash
pbicli dataset refresh cancel [--workspace] [-w]
                              [--dataset] [-d]
                              [--refresh] [-r]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--refresh -r <refresh>`<br/>ID of the refresh id

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset refresh detail

Returns execution details of the refresh operation for the specified Power BI dataset

```bash
pbicli dataset refresh detail [--workspace] [-w]
                              [--dataset] [-d]
                              [--refresh] [-r]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--refresh -r <refresh>`<br/>ID of the refresh id

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

## pbicli dataset refresh show

Get the details of a Power BI refresh schedule

```bash
pbicli dataset refresh show [--workspace] [-w]
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

## pbicli dataset refresh start

Triggers a Power BI dataset refresh

```bash
pbicli dataset refresh start [--workspace] [-w]
                             [--dataset] [-d]
                             [--notify]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--notify <option>`<br/>Allowed values: always, failure, none

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset refresh update

Update a Power BI refresh schedule

```bash
pbicli dataset refresh update [--workspace] [-w]
                              [--dataset] [-d]
                              [--refresh-schedule]
                              [--refresh-schedule-file]
                              [--direct-query]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--refresh-schedule <data>`<br/>String with the refresh schedule in JSON format. Use @{file} to load from a file

-   `--refresh-schedule-file <file>`<br/>File with the refresh schedule in JSON format. Deprecated: use --refresh-schedule @{file}

-   `--direct-query`<br/>Dataset is a direct query or live connection

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

## pbicli dataset update

Updates the properties for the specified dataset

```bash
pbicli dataset update [--workspace] [-w]
                      [--dataset] [-d]
                      [--large]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--dataset -d <dataset>`<br/>Name or ID of the Power BI dataset

-   `--large`<br/>Set dataset storage mode to support large datasets

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli dataset user update

Update access of a user or service pricipal

```bash
pbicli dataset user update [--workspace] [-w]
                           [--dataset] [-d]
                           [--identifier]
                           [--access-right]
                           [--principal-type]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. Optional if dataset is provided as ID.

-   `--dataset -d <name>`<br/>Name or ID of the Power BI dataset

-   `--identifier <identifier>`<br/>Identifier of the user or principal

-   `--access-right <right>`<br/>Access right. Allowed values: Read, ReadExplore, ReadReshare, ReadReshareExplore

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group, None

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
