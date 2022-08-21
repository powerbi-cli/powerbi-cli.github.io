---
uid: reference/configure
title: pbicli configure
documentId: d74422c0-aae2-403d-b99c-106309f7aa71
---

# pbicli configure

## Commands

|                                                 |                              |
| ----------------------------------------------- | ---------------------------- |
| [pbicli configure list](#pbicli-configure-list) | List all applicable defaults |
| [pbicli configure set](#pbicli-configure-set)   | Set the defaults arguments   |

## pbicli configure list

List all applicable defaults

```bash
pbicli configure list
```

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## pbicli configure set

Set the defaults arguments

```bash
pbicli configure set [--defaults] [-d]
```

### Parameters

-   `--defaults -d <default...>`<br/>Space-separated 'name=value' pairs for common argument defaults

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

### Examples

Set the default for the `--workspace` parameter

### [Bash](#tab/bash)

```bash
pbicli configure set --defaults workspace=Demos
```

### [PowerShell](#tab/powershell)

```powershell
pbicli configure set --defaults workspace=Demos
```

---

After setting a default, the parameter can be omitted in the next command, like to get all the reports of the 'Demos' workspace:

### [Bash](#tab/bash)

```bash
pblicli report list
```

### [PowerShell](#tab/powershell)

```powershell
pblicli report list
```

---

## Feedback
