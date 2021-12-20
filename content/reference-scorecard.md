---
uid: reference/scorecard
title: pbicli scorecard
documentId: 508e7181-2674-45ef-b5ce-f2ffd340a54f
---

# pbicli scorecard

## Commands

|                                                               |                                              |
| ------------------------------------------------------------- | -------------------------------------------- |
| [pbicli scorecard create](#pbicli-scorecard-create)           | Create a Power BI scorecard                  |
| [pbicli scorecard delete](#pbicli-scorecard-delete)           | Delete a Power BI scorecard                  |
| [pbicli scorecard goal create](#pbicli-scorecard-goal-create) | Clone a Power BI dashboard tile              |
| [pbicli scorecard goal list](#pbicli-scorecard-goal-list)     | List Power BI scorecard goals in a workplace |
| [pbicli scorecard goal show](#pbicli-scorecard-goal-show)     | Get the details of a Power BI scorecard goal |
| [pbicli scorecard list](#pbicli-scorecard-list)               | List Power BI scorecards                     |
| [pbicli scorecard show](#pbicli-scorecard-show)               | Get the details of a Power BI scorecard      |

## pbicli scorecard create

Create a Power BI scorecard

```bash
pbicli scorecard create [--workspace] [-w]
                        [--scorecard] [-s]
                        [--description]
                        [--contact]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--description <description>`<br/>Description of the Power BI scorecard

-   `--contact <contact>`<br/>Contact of the Power BI scorecard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard delete

Delete a Power BI scorecard

```bash
pbicli scorecard delete [--workspace] [-w]
                        [--scorecard] [-s]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <name>`<br/>Name or ID of the Power BI scorecard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal create

Clone a Power BI dashboard tile

```bash
pbicli scorecard goal create [--workspace] [-w]
                             [--scorecard] [-s]
                             [--goal] [-g]
                             [--definition]
                             [--definition-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name of the Power BI scorecard goel

-   `--definition <definition>`<br/>String with the goal definition in JSON format

-   `--definition-file <file>`<br/>File with the goal definition in JSON format

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal list

List Power BI scorecard goals in a workplace

```bash
pbicli scorecard goal list [--workspace] [-w]
                           [--scorecard] [-s]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal show

Get the details of a Power BI scorecard goal

```bash
pbicli scorecard goal show [--workspace] [-w]
                           [--scorecard] [-s]
                           [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goel

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard list

List Power BI scorecards

```bash
pbicli scorecard list [--workspace] [-w]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard show

Get the details of a Power BI scorecard

```bash
pbicli scorecard show [--workspace] [-w]
                      [--scorecard] [-s]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <name>`<br/>Name or ID of the Power BI scorecard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
