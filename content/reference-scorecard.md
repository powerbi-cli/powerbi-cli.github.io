---
uid: reference/scorecard
title: pbicli scorecard
documentId: 508e7181-2674-45ef-b5ce-f2ffd340a54f
---

# pbicli scorecard

## Commands

|                                                                                     |                                                                        |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [pbicli scorecard create](#pbicli-scorecard-create)                                 | Create a Power BI scorecard                                            |
| [pbicli scorecard delete](#pbicli-scorecard-delete)                                 | Delete a Power BI scorecard                                            |
| [pbicli scorecard goal create](#pbicli-scorecard-goal-create)                       | Adds a new goal to a scorecard                                         |
| [pbicli scorecard goal delete](#pbicli-scorecard-goal-delete)                       | Deletes a goal from a Power BI scorecard                               |
| [pbicli scorecard goal disconnect](#pbicli-scorecard-goal-disconnect)               | Disconnects the current value or target of a connected goal            |
| [pbicli scorecard goal history](#pbicli-scorecard-goal-history)                     | Gets the refresh history of a connected goal                           |
| [pbicli scorecard goal list](#pbicli-scorecard-goal-list)                           | List Power BI scorecard goals in a workplace                           |
| [pbicli scorecard goal refresh](#pbicli-scorecard-goal-refresh)                     | Schedules a refresh of the current value or target of a connected goal |
| [pbicli scorecard goal rule create](#pbicli-scorecard-goal-rule-create)             | Creates or updates status rules of a goal                              |
| [pbicli scorecard goal rule delete](#pbicli-scorecard-goal-rule-delete)             | Removes status rule definitions from a goal                            |
| [pbicli scorecard goal rule show](#pbicli-scorecard-goal-rule-show)                 | Show status rules of a goal                                            |
| [pbicli scorecard goal show](#pbicli-scorecard-goal-show)                           | Get the details of a Power BI scorecard connected goal                 |
| [pbicli scorecard goal value create](#pbicli-scorecard-goal-value-create)           | Creates a new goal value check-in                                      |
| [pbicli scorecard goal value delete](#pbicli-scorecard-goal-value-delete)           | Deletes a goal value check-in                                          |
| [pbicli scorecard goal value list](#pbicli-scorecard-goal-value-list)               | List the goal value check-ins                                          |
| [pbicli scorecard goal value note create](#pbicli-scorecard-goal-value-note-create) | Creates a new goal value check-in note                                 |
| [pbicli scorecard goal value note delete](#pbicli-scorecard-goal-value-note-delete) | Deletes a goal value check-in note                                     |
| [pbicli scorecard goal value note update](#pbicli-scorecard-goal-value-note-update) | Updates a goal value check-in note                                     |
| [pbicli scorecard goal value show](#pbicli-scorecard-goal-value-show)               | Show a goal value check-ins                                            |
| [pbicli scorecard goal value update](#pbicli-scorecard-goal-value-update)           | Updates a goal value check-in                                          |
| [pbicli scorecard list](#pbicli-scorecard-list)                                     | List Power BI scorecards                                               |
| [pbicli scorecard move](#pbicli-scorecard-move)                                     | Moves goals within the scorecard                                       |
| [pbicli scorecard show](#pbicli-scorecard-show)                                     | Get the details of a Power BI scorecard                                |
| [pbicli scorecard update](#pbicli-scorecard-update)                                 | Update a Power BI scorecard                                            |

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

Adds a new goal to a scorecard

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

-   `--goal -g <goal>`<br/>Name of the Power BI scorecard goal

-   `--definition <definition>`<br/>String with the goal definition in JSON format. Use @{file} to load from a file

-   `--definition-file <file>`<br/>File with the goal definition in JSON format. Deprecated: use --definition @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal delete

Deletes a goal from a Power BI scorecard

```bash
pbicli scorecard goal delete [--workspace] [-w]
                             [--scorecard] [-s]
                             [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal disconnect

Disconnects the current value or target of a connected goal

```bash
pbicli scorecard goal disconnect [--workspace] [-w]
                                 [--scorecard] [-s]
                                 [--goal] [-g]
                                 [--current]
                                 [--target]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--current`<br/>Disconnect the current value of the goal

-   `--target`<br/>Disconnect the target value of the goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal history

Gets the refresh history of a connected goal

```bash
pbicli scorecard goal history [--workspace] [-w]
                              [--scorecard] [-s]
                              [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

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

## pbicli scorecard goal refresh

Schedules a refresh of the current value or target of a connected goal

```bash
pbicli scorecard goal refresh [--workspace] [-w]
                              [--scorecard] [-s]
                              [--goal] [-g]
                              [--current]
                              [--target]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--current`<br/>Schedules a refresh of the current value of the goal

-   `--target`<br/>Schedules a refresh of the target value of the goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal rule create

Creates or updates status rules of a goal

```bash
pbicli scorecard goal rule create [--workspace] [-w]
                                  [--scorecard] [-s]
                                  [--goal] [-g]
                                  [--definition]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--definition <definition>`<br/>String with the goal definition in JSON format. Use @{file} to load from a file

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal rule delete

Removes status rule definitions from a goal

```bash
pbicli scorecard goal rule delete [--workspace] [-w]
                                  [--scorecard] [-s]
                                  [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal rule show

Show status rules of a goal

```bash
pbicli scorecard goal rule show [--workspace] [-w]
                                [--scorecard] [-s]
                                [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal show

Get the details of a Power BI scorecard connected goal

```bash
pbicli scorecard goal show [--workspace] [-w]
                           [--scorecard] [-s]
                           [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value create

Creates a new goal value check-in

```bash
pbicli scorecard goal value create [--workspace] [-w]
                                   [--scorecard] [-s]
                                   [--goal] [-g]
                                   [--definition]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--definition <definition>`<br/>String with the goal definition in JSON format. Use @{file} to load from a file

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value delete

Deletes a goal value check-in

```bash
pbicli scorecard goal value delete [--workspace] [-w]
                                   [--scorecard] [-s]
                                   [--goal] [-g]
                                   [--timestamp]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--timestamp <timestamp>`<br/>The timestamp for the value of the goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value list

List the goal value check-ins

```bash
pbicli scorecard goal value list [--workspace] [-w]
                                 [--scorecard] [-s]
                                 [--goal] [-g]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value note create

Creates a new goal value check-in note

```bash
pbicli scorecard goal value note create [--workspace] [-w]
                                        [--scorecard] [-s]
                                        [--goal] [-g]
                                        [--timestamp]
                                        [--text]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--timestamp <timestamp>`<br/>The timestamp for the value of the goal

-   `--text <text>`<br/>String with the note text in JSON format. Use @{file} to load from a file

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value note delete

Deletes a goal value check-in note

```bash
pbicli scorecard goal value note delete [--workspace] [-w]
                                        [--scorecard] [-s]
                                        [--goal] [-g]
                                        [--timestamp]
                                        [--note]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--timestamp <timestamp>`<br/>The timestamp for the value of the goal

-   `--note <note>`<br/>ID of the note

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value note update

Updates a goal value check-in note

```bash
pbicli scorecard goal value note update [--workspace] [-w]
                                        [--scorecard] [-s]
                                        [--goal] [-g]
                                        [--timestamp]
                                        [--note]
                                        [--text]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--timestamp <timestamp>`<br/>The timestamp for the value of the goal

-   `--note <note>`<br/>ID of the note

-   `--text <text>`<br/>String with the note text in JSON format. Use @{file} to load from a file

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value show

Show a goal value check-ins

```bash
pbicli scorecard goal value show [--workspace] [-w]
                                 [--scorecard] [-s]
                                 [--goal] [-g]
                                 [--timestamp]
                                 [--expand]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--timestamp <timestamp>`<br/>The timestamp for the value of the goal

-   `--expand <entity>`<br/>Expands related entities inline, receives a comma-separated list of data types. Allowed values: notes

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard goal value update

Updates a goal value check-in

```bash
pbicli scorecard goal value update [--workspace] [-w]
                                   [--scorecard] [-s]
                                   [--goal] [-g]
                                   [--timestamp]
                                   [--definition]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <scorecard>`<br/>Name of the Power BI scorecard

-   `--goal -g <goal>`<br/>Name or ID of the Power BI scorecard goal

-   `--timestamp <timestamp>`<br/>The timestamp for the value of the goal

-   `--definition <definition>`<br/>String with the goal definition in JSON format. Use @{file} to load from a file

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

## pbicli scorecard move

Moves goals within the scorecard

```bash
pbicli scorecard move [--workspace] [-w]
                      [--scorecard] [-s]
                      [--definition]
                      [--definition-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <name>`<br/>Name or ID of the Power BI scorecard

-   `--definition <definition>`<br/>String with the 'goal move' definition in JSON format. Use @{file} to load from a file

-   `--definition-file <file>`<br/>File with the 'goal move' definition in JSON format. Deprecated: use --definition @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard show

Get the details of a Power BI scorecard

```bash
pbicli scorecard show [--workspace] [-w]
                      [--report] [-r]
                      [--scorecard] [-s]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--report -r <name>`<br/>Name or ID of the linked Power BI report

-   `--scorecard -s <name>`<br/>Name or ID of the Power BI scorecard

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli scorecard update

Update a Power BI scorecard

```bash
pbicli scorecard update [--workspace] [-w]
                        [--scorecard] [-s]
                        [--definition]
                        [--definition-file]
```

### Parameters

-   `--workspace -w <name>`<br/>Name or ID of the Power BI workspace. If not provided it uses 'My workspace'

-   `--scorecard -s <name>`<br/>Name or ID of the Power BI scorecard

-   `--definition <definition>`<br/>String with the scorecard definition in JSON format. Use @{file} to load from a file

-   `--definition-file <file>`<br/>File with the scorecard definition in JSON format. Deprecated: use --definition @{file}

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
