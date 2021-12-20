---
uid: reference/admin
title: pbicli admin
documentId: acde4004-8731-4463-9ae4-2948ab3ba288
---

# pbicli admin

## Commands

|                                                                           |                                                                                                |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [pbicli admin activity](#pbicli-admin-activity)                           | Returns a list of audit activity events for a tenant                                           |
| [pbicli admin app list](#pbicli-admin-app-list)                           | Returns a list of apps in the organization                                                     |
| [pbicli admin app list-user](#pbicli-admin-app-list-user)                 | Returns a list of users that have access to the specified app                                  |
| [pbicli admin capacity assign](#pbicli-admin-capacity-assign)             | Assigns the provided workspaces to the specified capacity                                      |
| [pbicli admin capacity list](#pbicli-admin-capacity-list)                 | Returns a list of capacities for the organization                                              |
| [pbicli admin capacity list-user](#pbicli-admin-capacity-list-user)       | Returns a list of users that have access to the specified dashboard                            |
| [pbicli admin capacity unassign](#pbicli-admin-capacity-unassign)         | Unassigns the provided workspaces from capacity                                                |
| [pbicli admin capacity update](#pbicli-admin-capacity-update)             | Changes the specific capacity information.                                                     |
| [pbicli admin dashboard list](#pbicli-admin-dashboard-list)               | Returns a list of dashboards for the organization                                              |
| [pbicli admin dashboard list-user](#pbicli-admin-dashboard-list-user)     | Returns a list of users that have access to the specified dashboard                            |
| [pbicli admin dashboard tile](#pbicli-admin-dashboard-tile)               | Returns a list of tiles within the specified dashboard                                         |
| [pbicli admin dataflow datasource](#pbicli-admin-dataflow-datasource)     | Returns a list of datasources for the specified dataflow                                       |
| [pbicli admin dataflow export](#pbicli-admin-dataflow-export)             | Exports the specified dataflow definition                                                      |
| [pbicli admin dataflow list](#pbicli-admin-dataflow-list)                 | Returns a list of dataflows for the organization                                               |
| [pbicli admin dataflow list-user](#pbicli-admin-dataflow-list-user)       | Returns a list of users that have access to the specified dataflow                             |
| [pbicli admin dataflow upstream](#pbicli-admin-dataflow-upstream)         | Returns a list of upstream dataflows for the specified dataflow in a Power BI workspace        |
| [pbicli admin dataset dataflow](#pbicli-admin-dataset-dataflow)           | Returns a list of upstream dataflows in a Power BI workspace                                   |
| [pbicli admin dataset datasource](#pbicli-admin-dataset-datasource)       | Returns a list of datasources for the specified dataset                                        |
| [pbicli admin dataset list](#pbicli-admin-dataset-list)                   | Returns a list of datasets for the organization                                                |
| [pbicli admin dataset list-user](#pbicli-admin-dataset-list-user)         | Returns a list of users that have access to the specified dataset                              |
| [pbicli admin import](#pbicli-admin-import)                               | Returns a list of imports for the organization                                                 |
| [pbicli admin key add](#pbicli-admin-key-add)                             | Adds an encryption key for Power BI workspaces assigned to a capacity                          |
| [pbicli admin key list](#pbicli-admin-key-list)                           | Returns the encryption keys for the tenant                                                     |
| [pbicli admin key rotate](#pbicli-admin-key-rotate)                       | Adds an encryption key for Power BI workspaces assigned to a capacity                          |
| [pbicli admin label remove](#pbicli-admin-label-remove)                   | Remove sensitivity labels from artifacts                                                       |
| [pbicli admin label set](#pbicli-admin-label-set)                         | Set sensitivity labels from artifacts                                                          |
| [pbicli admin pipeline delete-user](#pbicli-admin-pipeline-delete-user)   | Removes user permissions to the specified workspace                                            |
| [pbicli admin pipeline list](#pbicli-admin-pipeline-list)                 | Returns a list of workspaces for the organization                                              |
| [pbicli admin pipeline list-user](#pbicli-admin-pipeline-list-user)       | Returns a list of users that have access to the specified workspace                            |
| [pbicli admin pipeline update-user](#pbicli-admin-pipeline-update-user)   | Updates the specified workspace properties                                                     |
| [pbicli admin refresh](#pbicli-admin-refresh)                             | Returns a list of imports for the organization                                                 |
| [pbicli admin report list](#pbicli-admin-report-list)                     | Returns a list of reports for the organization                                                 |
| [pbicli admin report list-user](#pbicli-admin-report-list-user)           | Returns a list of users that have access to the specified dataset                              |
| [pbicli admin report subscription](#pbicli-admin-report-subscription)     | Returns a list of users that have access to the specified dataset                              |
| [pbicli admin user artifact](#pbicli-admin-user-artifact)                 | Returns a list of apps in the organization                                                     |
| [pbicli admin user subscription](#pbicli-admin-user-subscription)         | Returns a list of subscriptions that the given user has subscribed to                          |
| [pbicli admin workspace add-user](#pbicli-admin-workspace-add-user)       | Grants user permissions to the specified workspace                                             |
| [pbicli admin workspace delete-user](#pbicli-admin-workspace-delete-user) | Removes user permissions to the specified workspace                                            |
| [pbicli admin workspace list](#pbicli-admin-workspace-list)               | Returns a list of workspaces for the organization                                              |
| [pbicli admin workspace list-user](#pbicli-admin-workspace-list-user)     | Returns a list of users that have access to the specified workspace                            |
| [pbicli admin workspace modified](#pbicli-admin-workspace-modified)       | Gets a list of workspace IDs in the organization                                               |
| [pbicli admin workspace restore](#pbicli-admin-workspace-restore)         | Restores a deleted workspace                                                                   |
| [pbicli admin workspace result](#pbicli-admin-workspace-result)           | Gets the scan result for the specified scan                                                    |
| [pbicli admin workspace scan](#pbicli-admin-workspace-scan)               | Initiates a scan to receive metadata for the requested list of workspaces                      |
| [pbicli admin workspace status](#pbicli-admin-workspace-status)           | Gets the scan status for the specified scan                                                    |
| [pbicli admin workspace unused](#pbicli-admin-workspace-unused)           | Returns a list of artifacts that have not been used within 30 days for the specified workspace |
| [pbicli admin workspace update-user](#pbicli-admin-workspace-update-user) | Updates the specified workspace properties                                                     |

## pbicli admin activity

Returns a list of audit activity events for a tenant

```bash
pbicli admin activity [--filter]
                      [--continuation-token]
                      [--date]
                      [--start-time]
                      [--end-time]
```

### Parameters

-   `--filter <filter>`<br/>Filters the results based on a boolean condition, using 'Activity', 'UserId', or both properties. Supports only 'eq' and 'and' operators

-   `--continuation-token <token>`<br/>Token required to get the next chunk of the result set

-   `--date <date>`<br/>Date for audit event results. Used with (optional) time values

-   `--start-time <time>`<br/>Start UTC time of the window for audit event results. If not provided '00:00:00' will be used

-   `--end-time <time>`<br/>End UTC time of the window for audit event results. If not provided '23:59:59' will be used

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin app list

Returns a list of apps in the organization

```bash
pbicli admin app list [--top]
```

### Parameters

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin app list-user

Returns a list of users that have access to the specified app

```bash
pbicli admin app list-user [--app] [-a]
```

### Parameters

-   `--app -a <name>`<br/>Name or ID of the Power BI app

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin capacity assign

Assigns the provided workspaces to the specified capacity

```bash
pbicli admin capacity assign [--capacity] [-c]
                             [--workspace] [-w]
```

### Parameters

-   `--capacity -c <name>`<br/>Name or ID of the Power BI capacity

-   `--workspace -w <name>`<br/>Name(s) or ID(s) of the Power BI workspace. Use comma seperated if multiple

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin capacity list

Returns a list of capacities for the organization

```bash
pbicli admin capacity list [--expand]
```

### Parameters

-   `--expand <entity>`<br/>Expands related entities inline. Allowed values: tenantKey

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin capacity list-user

Returns a list of users that have access to the specified dashboard

```bash
pbicli admin capacity list-user [--dashboard] [-d]
```

### Parameters

-   `--dashboard -d <name>`<br/>Name or ID of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin capacity unassign

Unassigns the provided workspaces from capacity

```bash
pbicli admin capacity unassign [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name(s) or ID(s) of the Power BI workspace. Use comma seperated if multiple

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin capacity update

Changes the specific capacity information.

```bash
pbicli admin capacity update [--capacity] [-c]
                             [--tenant-key]
```

### Parameters

-   `--capacity -c <name>`<br/>Name or ID of the Power BI capacity

-   `--tenant-key <key>`<br/>The id of the encryption key

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dashboard list

Returns a list of dashboards for the organization

```bash
pbicli admin dashboard list [--workspace] [-w]
                            [--expand]
                            [--filter]
                            [--top]
                            [--skip]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: tiles. Not used if --workspace is provided

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dashboard list-user

Returns a list of users that have access to the specified dashboard

```bash
pbicli admin dashboard list-user [--dashboard] [-d]
```

### Parameters

-   `--dashboard -d <name>`<br/>Name or ID of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dashboard tile

Returns a list of tiles within the specified dashboard

```bash
pbicli admin dashboard tile [--dashboard] [-d]
```

### Parameters

-   `--dashboard -d <name>`<br/>Name or ID of the Power BI dashboard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataflow datasource

Returns a list of datasources for the specified dataflow

```bash
pbicli admin dataflow datasource [--dataflow] [-d]
```

### Parameters

-   `--dataflow -d <name>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataflow export

Exports the specified dataflow definition

```bash
pbicli admin dataflow export [--dataflow] [-d]
```

### Parameters

-   `--dataflow -d <name>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataflow list

Returns a list of dataflows for the organization

```bash
pbicli admin dataflow list [--workspace] [-w]
                           [--filter]
                           [--top]
                           [--skip]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataflow list-user

Returns a list of users that have access to the specified dataflow

```bash
pbicli admin dataflow list-user [--dataflow] [-d]
```

### Parameters

-   `--dataflow -d <name>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataflow upstream

Returns a list of upstream dataflows for the specified dataflow in a Power BI workspace

```bash
pbicli admin dataflow upstream [--workspace] [-w]
                               [--dataflow] [-d]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--dataflow -d <name>`<br/>Name or ID of the Power BI dataflow

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataset dataflow

Returns a list of upstream dataflows in a Power BI workspace

```bash
pbicli admin dataset dataflow [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataset datasource

Returns a list of datasources for the specified dataset

```bash
pbicli admin dataset datasource [--dataset] [-d]
```

### Parameters

-   `--dataset -d <name>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataset list

Returns a list of datasets for the organization

```bash
pbicli admin dataset list [--workspace] [-w]
                          [--filter]
                          [--top]
                          [--skip]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin dataset list-user

Returns a list of users that have access to the specified dataset

```bash
pbicli admin dataset list-user [--dataset] [-d]
```

### Parameters

-   `--dataset -d <name>`<br/>Name or ID of the Power BI dataset

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin import

Returns a list of imports for the organization

```bash
pbicli admin import [--expand]
                    [--filter]
                    [--top]
                    [--skip]
```

### Parameters

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: datasets, reports

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin key add

Adds an encryption key for Power BI workspaces assigned to a capacity

```bash
pbicli admin key add [--name]
                     [--keyVaultURI]
                     [--active]
                     [--default]
```

### Parameters

-   `--name <name>`<br/>The name of the encryption key

-   `--keyVaultURI <uri>`<br/>Uri to the version of the Azure Key Vault key to be used

-   `--active`<br/>Indicates to activate any inactivated capacities to use this key for its encryption

-   `--default`<br/>Indicates that this key is set as default for the entire tenant. Any new capacity creation will inherit this key upon creation

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin key list

Returns the encryption keys for the tenant

```bash
pbicli admin key list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin key rotate

Adds an encryption key for Power BI workspaces assigned to a capacity

```bash
pbicli admin key rotate [--key]
                        [--keyVaultURI]
```

### Parameters

-   `--key <id>`<br/>ID of the encryption key

-   `--keyVaultURI <uri>`<br/>Uri to the version of the Azure Key Vault key to be used

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin label remove

Remove sensitivity labels from artifacts

```bash
pbicli admin label remove [--label-file]
```

### Parameters

-   `--label-file <file>`<br/>File with the artifact IDs to remove the sensitivity labels in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin label set

Set sensitivity labels from artifacts

```bash
pbicli admin label set [--label-file]
```

### Parameters

-   `--label-file <file>`<br/>File with the artifact IDs to add the sensitivity labels in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin pipeline delete-user

Removes user permissions to the specified workspace

```bash
pbicli admin pipeline delete-user [--pipeline] [-p]
                                  [--identifier]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

-   `--identifier <identifier>`<br/>Identifier of the user or principal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin pipeline list

Returns a list of workspaces for the organization

```bash
pbicli admin pipeline list [--expand]
                           [--filter]
                           [--top]
                           [--skip]
```

### Parameters

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: users, stages

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin pipeline list-user

Returns a list of users that have access to the specified workspace

```bash
pbicli admin pipeline list-user [--pipeline] [-p]
```

### Parameters

-   `--pipeline -p <name>`<br/>Name or ID of the Power BI pipeline

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin pipeline update-user

Updates the specified workspace properties

```bash
pbicli admin pipeline update-user [--pipeline] [-p]
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

## pbicli admin refresh

Returns a list of imports for the organization

```bash
pbicli admin refresh [--capacity] [-c]
                     [--refreshable-id]
                     [--expand]
                     [--filter]
                     [--top]
                     [--skip]
```

### Parameters

-   `--capacity -c <name>`<br/>Name or ID of the Power BI capacity

-   `--refreshable-id <refreshId>`<br/>The refreshable id

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: capacity, workspace

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin report list

Returns a list of reports for the organization

```bash
pbicli admin report list [--workspace] [-w]
                         [--filter]
                         [--top]
                         [--skip]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin report list-user

Returns a list of users that have access to the specified dataset

```bash
pbicli admin report list-user [--report] [-r]
```

### Parameters

-   `--report -r <report>`<br/>Name or ID of the Power BI report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin report subscription

Returns a list of users that have access to the specified dataset

```bash
pbicli admin report subscription [--report] [-r]
```

### Parameters

-   `--report -r <report>`<br/>Name or ID of the Power BI report

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin user artifact

Returns a list of apps in the organization

```bash
pbicli admin user artifact [--user]
                           [--continuation-token]
```

### Parameters

-   `--user <UPN>`<br/>The user principal name (UPN) or Graph ID of the user

-   `--continuation-token <token>`<br/>Token to get the next chunk of the result set

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin user subscription

Returns a list of subscriptions that the given user has subscribed to

```bash
pbicli admin user subscription [--user]
                               [--continuation-token]
```

### Parameters

-   `--user <UPN>`<br/>The user principal name (UPN) or Graph ID of the user

-   `--continuation-token <token>`<br/>Token to get the next chunk of the result set

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace add-user

Grants user permissions to the specified workspace

```bash
pbicli admin workspace add-user [--workspace] [-w]
                                [--email]
                                [--identifier]
                                [--access-right]
                                [--principal-type]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--email <email>`<br/>Email address of the user

-   `--identifier <identifier>`<br/>Identifier of the principal

-   `--access-right <right>`<br/>Access right. Allowed values: Admin, Contributor, Member

-   `--principal-type <type>`<br/>Type of pricipal. Allowed values: App, User, Group, None

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace delete-user

Removes user permissions to the specified workspace

```bash
pbicli admin workspace delete-user [--workspace] [-w]
                                   [--user]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--user <UPN>`<br/>The user principal name (UPN) of the user to remove

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace list

Returns a list of workspaces for the organization

```bash
pbicli admin workspace list [--expand]
                            [--filter]
                            [--top]
                            [--skip]
```

### Parameters

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: dashboards, datasets, dataflows, reports, users, workbooks

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace list-user

Returns a list of users that have access to the specified workspace

```bash
pbicli admin workspace list-user [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace modified

Gets a list of workspace IDs in the organization

```bash
pbicli admin workspace modified [--modified]
                                [--personal-workspaces]
```

### Parameters

-   `--modified <datetime>`<br/>Last modified date (must be in ISO 8601 compliant UTC format)

-   `--personal-workspaces`<br/>Include personal workspaces

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace restore

Restores a deleted workspace

```bash
pbicli admin workspace restore [--workspace] [-w]
                               [--owner]
                               [--name]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--owner <email>`<br/>The email address of the owner of the group to be restored

-   `--name [name]`<br/>The optional new name of the group to be restored

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace result

Gets the scan result for the specified scan

```bash
pbicli admin workspace result [--scan-id]
```

### Parameters

-   `--scan-id <scanId>`<br/>The scan ID for the triggered scan

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace scan

Initiates a scan to receive metadata for the requested list of workspaces

```bash
pbicli admin workspace scan [--dataset-expressions]
                            [--dataset-schema]
                            [--datasource-details]
                            [--artifact-users	]
                            [--lineage]
                            [--workspace-file]
```

### Parameters

-   `--dataset-expressions`<br/>Whether to return dataset expressions (Dax query and Mashup)

-   `--dataset-schema`<br/>Whether to return dataset schema (Tables, Columns and Measures)

-   `--datasource-details`<br/>Whether to return datasource details

-   `--artifact-users `<br/>Whether to return artifact user details (Permission level)

-   `--lineage`<br/>Whether to return lineage info (upstream dataflows, tiles, datasource IDs)

-   `--workspace-file <file>`<br/>File with the workspace IDs to add to the scan in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace status

Gets the scan status for the specified scan

```bash
pbicli admin workspace status [--scan-id]
```

### Parameters

-   `--scan-id <scanId>`<br/>The scan ID for the triggered scan

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace unused

Returns a list of artifacts that have not been used within 30 days for the specified workspace

```bash
pbicli admin workspace unused [--workspace] [-w]
                              [--continuation-token]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--continuation-token <token>`<br/>Token to get the next chunk of the result set

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli admin workspace update-user

Updates the specified workspace properties

```bash
pbicli admin workspace update-user [--workspace] [-w]
                                   [--update-details]
                                   [--update-details-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace

-   `--update-details <data>`<br/>String with the update details in JSON format

-   `--update-details-file <file>`<br/>File with the update details in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
