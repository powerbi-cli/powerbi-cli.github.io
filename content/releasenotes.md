---
uid: overview/releasenotes
title: Power BI CLI release notes
documentId: 80cb43a5-4a0a-4f60-9690-d41cca745bb0
---

# Power BI CLI release notes

## v1.3.1 - September 4, 2022

### Changed

**General**

-   Fix bug that prevents to login to a sovereign cloud

## v1.3.0 - August 18, 2022

### Changed

**General**

-   All file parameters now support `@{file}` syntax to load content from a file.
-   The `version` command now return a JSON output with the current version and updated version, if available
-   The interactive mode can be entered via the `interactive` command

**dataset**

-   Fix an issue with the `query` command not excepting an inline query

### Added

**admin**

-   Added `dashboard subscription` command
-   Added `shared` command

**dashboard**

-   Added `delete` command

**dataset**

-   Added `refresh cancel` command
-   Added `refresh detail` command
-   Added `update` command

**rest**

-   Added functionality

**scorecard**

-   Added `move` command
-   Added `show` command
-   Added `update` command
-   Added `goal delete` command
-   Added `goal disconnect` command
-   Added `goal history` command
-   Added `goal refresh` command
-   Added `goal update` command
-   Added `goal rule crete` command
-   Added `goal rule delete` command
-   Added `goal rule show` command
-   Added `goal value create` command
-   Added `goal value delete` command
-   Added `goal value list` command
-   Added `goal value show` command
-   Added `goal value update` command
-   Added `goal value note create` command
-   Added `goal value note delete` command
-   Added `goal value note update` command

**workspace**

-   Added `Viewer` role for the user commands

## v1.2.1 - February 25, 2022

### Changed

**admin**

-   Fixed error in parameter `--workspace-file` of `workspace scan` command

## v1.2.0 - December 20, 2011

### Added

**admin**

-   Added missing commands, including workspace scan, get users, and information protection label commands

**cloud**

-   Added functionality (multi cloud)

**configure**

-   Added functionality

**dataflow**

-   Added `transaction` command
-   Added `update` command

**dataset**

-   Added `query` command to execute DAX queries
-   Added `refresh` command
-   Added `user` command

**pipeline**

-   Added functionality

**scorecard**

-   Added functionality

**user**

-   Added functionality

### Changed

**xmla**

-   Deprecated with this version; will removed in a future version

## v1.1.0 - May 16, 2021

### Added

**embedded**

-   Added functionality

**xmla**

-   Added functionality, but in preview

### Changed

**General**

-   change of the default login behaviour

**report**

-   fix issue with the `rebind` command

## v1.0.4 - October 6, 2020

### Changed

**General**

-   fix login issue: not correctly store auth token

## v1.0.2 - September 22, 2020

### Changed

**workspace**

-   Fixed option `--workspace` to be required for command `workspace add list`

## v1.0.1 - August 27, 2020

### Changed

**General**

-   Multiple description are updated

**dataflow**

-   Fixed missing commands `refresh` and `storage`

**version**

-   Fixed incorrect version reference

## v1.0.0 - August 27, 2020

### Added

**admin**

-   Added functionality

**capacity**

-   Added functionality

**feature**

-   Added functionality

### Changed

**General**

-   [BREAKING CHANGE] `group` commands and options are renamed to `workspace`
-   `version` changed to command

**workspace**

-   Renamed from `group`

## v0.9.0 - June 22, 2020

This version is the first beta release of this Power BI CLI.

The command supported by this version are:

```text
app
dashboard
dataflow
dataset
gateway
group
import
report
```

## Feedback
