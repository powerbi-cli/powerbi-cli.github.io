---
uid: reference/capacity
title: pbicli capacity
documentId: acde4004-8731-4463-9ae4-2948ab3ba288
---

# pbicli capacity

## Commands

|                                                       |                                                                                    |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [pbicli capacity assign](#pbicli-capacity-assign)     | Assigns the specified workspace to the specified capacity                          |
| [pbicli capacity list](#pbicli-capacity-list)         | Returns a list of capacities the user has access to                                |
| [pbicli capacity refresh](#pbicli-capacity-refresh)   | Returns a list of imports for the organization                                     |
| [pbicli capacity status](#pbicli-capacity-status)     | Gets the status of the assignment to capacity operation of the specified workspace |
| [pbicli capacity unassign](#pbicli-capacity-unassign) | Unassigns the specified workspace to the specified capacity                        |
| [pbicli capacity workload](#pbicli-capacity-workload) | Operations for working with the the state of capacity workloads                    |

## pbicli capacity assign

Assigns the specified workspace to the specified capacity

```bash
pbicli capacity assign [--capacity] [-c]
                       [--workspace] [-w]
```

### Parameters

-   `--capacity -c <name>`<br/>Name or ID of the Power BI capacity

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli capacity list

Returns a list of capacities the user has access to

```bash
pbicli capacity list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli capacity refresh

Returns a list of imports for the organization

```bash
pbicli capacity refresh [--capacity] [-c]
                        [--refreshableId]
                        [--expand]
                        [--filter]
                        [--top]
                        [--skip]
```

### Parameters

-   `--capacity -c <name>`<br/>Name or ID of the Power BI capacity

-   `--refreshableId <refreshId>`<br/>The refreshable id

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: capacity, workspace

-   `--filter <filter>`<br/>Filters the results based on a boolean condition

-   `--top <number>`<br/>Returns only the first <number> results. Default: 5000

-   `--skip <number>`<br/>Skips the first <number> results

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli capacity status

Gets the status of the assignment to capacity operation of the specified workspace

```bash
pbicli capacity status [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli capacity unassign

Unassigns the specified workspace to the specified capacity

```bash
pbicli capacity unassign [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli capacity workload

Operations for working with the the state of capacity workloads

```bash
pbicli capacity workload [--capacity] [-c]
                         [--workload]
                         [--state]
                         [--memory]
```

### Parameters

-   `--capacity -c <name>`<br/>Name or ID of the Power BI capacity

-   `--workload <name>`<br/>Name the Power BI workload

-   `--state <state>`<br/>The capacity workload state. Allowed values: enabled, disabled

-   `--memory <number>`<br/>The memory percentage maximum limit

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
